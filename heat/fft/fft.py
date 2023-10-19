"""Provides a collection of Discrete Fast Fourier Transforms (DFFT) and their inverses."""

import torch

from ..core.communication import MPI
from ..core.dndarray import DNDarray
from ..core.stride_tricks import sanitize_axis
from ..core.types import promote_types, heat_type_of
from ..core.factories import array, zeros

from typing import Type, Union, Tuple, Any, Iterable, Optional

__all__ = [
    "fft",
    "fft2",
    "fftn",
    "hfft",
    "hfft2",
    "hfftn",
    "ifft",
    "ifft2",
    "ifftn",
    # "ihfft",
    # "ihfft2",
    # "ihfftn",
    "irfft",
    "irfft2",
    "irfftn",
    "rfft",
    "rfft2",
    "rfftn",
    # "fftfreq",
    # "rfftfreq",
    # "fftshift",
    # "ifftshift",
]


def __fft_op(x: DNDarray, fft_op: callable, **kwargs) -> DNDarray:
    """
    Helper function for fft
    """
    try:
        local_x = x.larray
    except AttributeError:
        raise TypeError(f"x must be a DNDarray, is {type(x)}")
    original_split = x.split

    # sanitize kwargs
    axis = kwargs.get("axis", None)
    try:
        axis = sanitize_axis(x.gshape, axis)
    except ValueError as e:
        raise IndexError(e)
    if isinstance(axis, tuple) and len(axis) > 1:
        raise TypeError(f"axis must be an integer, got {axis}")
    n = kwargs.get("n", None)
    norm = kwargs.get("norm", None)

    # non-distributed DNDarray
    if not x.is_distributed():
        result = fft_op(local_x, n=n, dim=axis, norm=norm)
        return array(result, split=original_split, device=x.device, comm=x.comm)

    # distributed DNDarray:
    # calculate output shape
    output_shape = list(x.shape)
    if n is not None:
        output_shape[axis] = n

    fft_along_split = original_split == axis

    # FFT along non-split axis
    if not fft_along_split:
        result = fft_op(local_x, n=n, dim=axis, norm=norm)
        return DNDarray(
            result,
            gshape=tuple(output_shape),
            dtype=heat_type_of(result),
            split=original_split,
            device=x.device,
            comm=x.comm,
            balanced=x.balanced,
        )

    # FFT along split axis
    if original_split != 0:
        # transpose x so redistribution starts from axis 0
        transpose_axes = list(range(x.ndim))
        transpose_axes[0], transpose_axes[original_split] = (
            transpose_axes[original_split],
            transpose_axes[0],
        )
        x = x.transpose(transpose_axes)

    # redistribute x
    if x.ndim > 1:
        _ = x.resplit(axis=1)
    else:
        _ = x.resplit(axis=None)
    # FFT along axis 0 (now non-split)
    result = __fft_op(_, fft_op, n=n, axis=0, norm=norm)
    del _
    # redistribute partial result back to axis 0
    result.resplit_(axis=0)
    if original_split != 0:
        # transpose x, partial_result back to original shape
        x = x.transpose(transpose_axes)
        result = result.transpose(transpose_axes)

    return result


def __fftn_op(x: DNDarray, fftn_op: callable, **kwargs) -> DNDarray:
    """
    Helper function for fftn
    """
    try:
        local_x = x.larray
    except AttributeError:
        raise TypeError("x must be a DNDarray, is {}".format(type(x)))

    original_split = x.split

    # sanitize kwargs
    axes = kwargs.get("axes", None)
    try:
        axes = sanitize_axis(x.gshape, axes)
    except ValueError as e:
        raise IndexError(e)
    repeated_axes = axes is not None and len(axes) != len(set(axes))
    if repeated_axes:
        raise NotImplementedError("Multiple transforms over the same axis not implemented yet.")
    s = kwargs.get("s", None)
    if s is not None and len(s) > x.ndim:
        raise ValueError(
            f"Input is {x.ndim}-dimensional, so s can be at most {x.ndim} elements long. Got {len(s)} elements instead."
        )
    norm = kwargs.get("norm", None)

    # non-distributed DNDarray
    if not x.is_distributed():
        result = fftn_op(local_x, s=s, dim=axes, norm=norm)
        return array(result, split=original_split, device=x.device, comm=x.comm)

    # distributed DNDarray:
    # calculate output shape
    output_shape = list(x.shape)
    if s is not None:
        if axes is None:
            axes = tuple(range(x.ndim)[-len(s) :])
        for i, axis in enumerate(axes):
            output_shape[axis] = s[i]
    else:
        if axes is None:
            axes = tuple(range(x.ndim))
        s = tuple(output_shape[axis] for axis in axes)
    output_shape = tuple(output_shape)

    fft_along_split = original_split in axes

    # FFT along non-split axes only
    if not fft_along_split:
        result = fftn_op(local_x, s=s, dim=axes, norm=norm)
        return DNDarray(
            result,
            gshape=tuple(output_shape),
            dtype=heat_type_of(result),
            split=original_split,
            device=x.device,
            comm=x.comm,
            balanced=x.balanced,
        )

    # FFT along split axis
    if original_split != 0:
        # transpose x so redistribution starts from axis 0
        transpose_axes = list(range(x.ndim))
        transpose_axes[0], transpose_axes[original_split] = (
            transpose_axes[original_split],
            transpose_axes[0],
        )
        x = x.transpose(transpose_axes)

    # original split is 0 and fft is along axis 0
    if x.ndim == 1:
        _ = x.resplit(axis=None)
        result = __fftn_op(_, fftn_op, **kwargs)
        del _
        result.resplit_(axis=0)
        return result

    # redistribute x from axis 0 to 1
    _ = x.resplit(axis=1)
    # FFT along axis 0 (now non-split)
    split_index = axes.index(original_split)
    partial_result = __fftn_op(_, fftn_op, s=(s[split_index],), axes=(0,), norm=norm)
    del _
    # redistribute partial result from axis 1 to 0
    partial_result.resplit_(axis=0)
    if original_split != 0:
        # transpose x, partial_result back to original shape
        x = x.transpose(transpose_axes)
        partial_result = partial_result.transpose(transpose_axes)

    # now apply FFT along leftover (non-split) axes
    axes = list(axes)
    axes.remove(original_split)
    axes = tuple(axes)
    s = list(s)
    s = s[:split_index] + s[split_index + 1 :]
    s = tuple(s)
    result = __fftn_op(partial_result, fftn_op, s=s, axes=axes, norm=norm)
    del partial_result
    return array(result.larray, is_split=original_split, device=x.device, comm=x.comm)


def __real_fft_op(x: DNDarray, fft_op: callable, **kwargs) -> DNDarray:
    try:
        result = __fft_op(x, fft_op, **kwargs)
    except RuntimeError as e:
        if "real input tensor" in str(e):
            raise TypeError(f"Input array must be real, is {x.dtype}.")
        else:
            raise e
    return result


def __real_fftn_op(x: DNDarray, fftn_op: callable, **kwargs) -> DNDarray:
    try:
        result = __fftn_op(x, fftn_op, **kwargs)
    except RuntimeError as e:
        if "real input tensor" in str(e):
            raise TypeError(f"Input array must be real, is {x.dtype}.")
        else:
            raise e
    return result


def fft(x: DNDarray, n: int = None, axis: int = -1, norm: str = None) -> DNDarray:
    """
    Compute the one-dimensional discrete Fourier Transform.

    This function computes the one-dimensional discrete Fourier Transform over the specified axis in an M-dimensional
    array by means of the Fast Fourier Transform (FFT). By default, the last axis is transformed, while the remaining
    axes are left unchanged.

    Parameters
    ----------
    x : DNDarray
        Input array, can be complex. WARNING: If x is 1-D and distributed, the entire array is copied on each MPI process.
    n : int, optional
        Length of the transformed axis of the output. If not given, the length is taken to be the length of the input
        along the axis specified by axis. If `n` is smaller than the length of the input, the input is cropped. If `n` is
        larger, the input is padded with zeros. Default: None.
    axis : int, optional
        Axis over which to compute the FFT. If not given, the last axis is used, or the only axis if x has only one
        dimension. Default: -1.
    norm : str, optional
        Normalization mode: 'forward', 'backward', or 'ortho' (see `numpy.fft` for details). Default is "backward".

    Notes
    -----
    This function requires MPI communication if the input array is transformed along the distribution axis.
    If the input array is 1-D and distributed, this function copies the entire array on each MPI process! i.e. if the array is very large, you might run out of memory.
    Hint: if you are looping through a batch of 1-D arrays to transform them, consider stacking them into a 2-D DNDarray and transforming them all at once (see :func:`fft2`).
    """
    return __fft_op(x, torch.fft.fft, n=n, axis=axis, norm=norm)


def fft2(
    x: DNDarray, s: Tuple[int, int] = None, axes: Tuple[int, int] = (-2, -1), norm: str = None
) -> DNDarray:
    """
    Compute the 2-dimensional discrete Fourier Transform.

    This function computes the 2-dimensional discrete Fourier Transform over the specified axes in an M-dimensional
    array by means of the Fast Fourier Transform (FFT). By default, the last two axes are transformed, while the
    remaining axes are left unchanged.

    Parameters
    ----------
    x : DNDarray
        Input array, can be complex
    s : Tuple[int, int], optional
        Shape of the output along the transformed axes. (default is x.shape)
    axes : Tuple[int, int], optional
        Axes over which to compute the FFT. If not given, the last `len(s)` axes are used, or all axes if `s` is also
        not specified. Repeated indices in `axes` means that the transform over that axis is performed multiple times.
        (default is (-2, -1))
    norm : str, optional
        Normalization mode: 'forward', 'backward', or 'ortho' (see `numpy.fft` for details). Default is "backward".

    Notes
    -----
    This function requires MPI communication if the input array is distributed and the split axis is transformed.
    """
    return __fftn_op(x, torch.fft.fft2, s=s, axes=axes, norm=norm)


def fftn(
    x: DNDarray, s: Tuple[int, ...] = None, axes: Tuple[int, ...] = None, norm: str = None
) -> DNDarray:
    """
    Compute the N-dimensional discrete Fourier Transform.

    This function computes the N-dimensional discrete Fourier Transform over any number of axes in an M-dimensional
    array by means of the Fast Fourier Transform (FFT). By default, all axes are transformed, with the real transform
    performed over the last axis, while the remaining transforms are complex.

    Parameters
    ----------
    x : DNDarray
        Input array, can be complex
    s : Tuple[int, ...], optional
        Shape of the output along the transformed axes. (default is x.shape)
    axes : Tuple[int, ...], optional
        Axes over which to compute the FFT. If not given, the last `len(s)` axes are used, or all axes if `s` is also
        not specified. Repeated indices in `axes` means that the transform over that axis is performed multiple times.
        (default is None)
    norm : str, optional
        Normalization mode: 'forward', 'backward', or 'ortho' (see `numpy.fft` for details). Default is "backward".

    Notes
    -----
    This function requires MPI communication if the input array is distributed and the split axis is transformed.
    """
    return __fftn_op(x, torch.fft.fftn, s=s, axes=axes, norm=norm)


def hfft(x: DNDarray, n: int = None, axis: int = -1, norm: str = None) -> DNDarray:
    """
    Compute the one-dimensional discrete Fourier Transform of a Hermitian symmetric signal.

    This function computes the one-dimensional discrete Fourier Transform over the specified axis in an M-dimensional
    array by means of the Fast Fourier Transform (FFT). By default, the last axis is transformed, while the remaining
    axes are left unchanged. The input signal is assumed to be Hermitian-symmetric, i.e. `x[..., i] = x[..., -i].conj()`.

    Parameters
    ----------
    x : DNDarray
        Input array
    n : int, optional
        Length of the transformed axis of the output.
        If `n` is not None, the input array is either zero-padded or trimmed to length `n` before the transform.
        Default: `2 * (x.shape[axis] - 1)`.
    axis : int, optional
        Axis over which to compute the FFT. If not given, the last axis is used, or the only axis if x has only one
        dimension. Default: -1.
    norm : str, optional
        Normalization mode: 'forward', 'backward', or 'ortho' (see `numpy.fft` for details). Default is "backward".

    Notes
    -----
    This function requires MPI communication if the input array is transformed along the distribution axis.
    """
    if n is None:
        n = 2 * (x.shape[axis] - 1)
    return __fft_op(x, torch.fft.hfft, n=n, axis=axis, norm=norm)


def hfft2(
    x: DNDarray, s: Tuple[int, int] = None, axes: Tuple[int, int] = (-2, -1), norm: str = None
) -> DNDarray:
    """
    Compute the 2-dimensional discrete Fourier Transform of a Hermitian symmetric signal.

    This function computes the 2-dimensional discrete Fourier Transform over the specified axes in an M-dimensional
    array by means of the Fast Fourier Transform (FFT). By default, the last two axes are transformed, while the
    remaining axes are left unchanged. The input signal is assumed to be Hermitian-symmetric, i.e. `x[..., i] = x[..., -i].conj()`.

    Parameters
    ----------
    x : DNDarray
        Input array
    s : Tuple[int, int], optional
        Shape of the signal along the transformed axes. If `s` is specified, the input array is either zero-padded or trimmed to length `s` before the transform.
        If `s` is not given, the last dimension defaults to even output: `s[-1] = 2 * (x.shape[-1] - 1)`.
    axes : Tuple[int, int], optional
        Axes over which to compute the FFT. If not given, the last two dimensions are transformed. Repeated indices in `axes` means that the transform over that axis is performed multiple times.
    norm : str, optional
        Normalization mode: 'forward', 'backward', or 'ortho' (see `numpy.fft` for details). Default is "backward".

    Notes
    -----
    This function requires MPI communication if the input array is distributed and the split axis is transformed.
    """
    if s is None:
        s = (x.shape[axes[0]], 2 * (x.shape[axes[1]] - 1))
    return __fftn_op(x, torch.fft.hfft2, s=s, axes=axes, norm=norm)


def hfftn(
    x: DNDarray, s: Tuple[int, ...] = None, axes: Tuple[int, ...] = None, norm: str = None
) -> DNDarray:
    """
    Compute the N-dimensional discrete Fourier Transform of a Hermitian symmetric signal.

    This function computes the N-dimensional discrete Fourier Transform over any number of axes in an M-dimensional
    array by means of the Fast Fourier Transform (FFT). By default, all axes are transformed.

    Parameters
    ----------
    x : DNDarray
        Input array
    s : Tuple[int, ...], optional
        Shape of the signal along the transformed axes. If `s` is specified, the input array is either zero-padded or trimmed to length `s` before the transform.
        If `s` is not given, the last dimension defaults to even output: `s[-1] = 2 * (x.shape[-1] - 1)`.
    axes : Tuple[int, ...], optional
        Axes over which to compute the FFT. If not given, all dimensions are transformed. Repeated indices in `axes` means that the transform over that axis is performed multiple times.
    norm : str, optional
        Normalization mode: 'forward', 'backward', or 'ortho' (see `numpy.fft` for details). Default is "backward".

    Notes
    -----
    This function requires MPI communication if the input array is distributed and the split axis is transformed.
    """
    if s is None:
        if axes is not None:
            s = list(x.shape[axis] for axis in axes)
        else:
            s = list(x.shape)
        s[-1] = 2 * (s[-1] - 1)
        s = tuple(s)

    return __fftn_op(x, torch.fft.hfftn, s=s, axes=axes, norm=norm)


def ifft(x: DNDarray, n: int = None, axis: int = -1, norm: str = None) -> DNDarray:
    """
    Compute the one-dimensional inverse discrete Fourier Transform.

    Parameters
    ----------
    x : DNDarray
        Input array, can be complex
    n : int, optional
        Length of the transformed axis of the output. If not given, the length is taken to be the length of the input
        along the axis specified by `axis`. If `n` is smaller than the length of the input, the input is cropped. If `n` is
        larger, the input is padded with zeros. Default: None.
    axis : int, optional
        Axis over which to compute the inverse FFT. If not given, the last axis is used, or the only axis if x has only one dimension. Default: -1.
    norm : str, optional
        Normalization mode: 'forward', 'backward', or 'ortho' (see `numpy.fft` for details). Default is "backward".

    Notes
    -----
    This function requires MPI communication if the input array is transformed along the distribution axis.
    If the input array is 1-D and distributed, this function copies the entire array on each MPI process! i.e. if the array is very large, you might run out of memory.
    Hint: if you are looping through a batch of 1-D arrays to transform them, consider stacking them into a 2-D DNDarray and transforming them all at once (see :func:`ifft2`).
    """
    return __fft_op(x, torch.fft.ifft, n=n, axis=axis, norm=norm)


def ifft2(
    x: DNDarray, s: Tuple[int, int] = None, axes: Tuple[int, int] = (-2, -1), norm: str = None
) -> DNDarray:
    """
    Compute the 2-dimensional inverse discrete Fourier Transform.

    Parameters
    ----------
    x : DNDarray
        Input array, can be complex
    s : Tuple[int, int], optional
        Shape of the output along the transformed axes. (default is x.shape)
    axes : Tuple[int, int], optional
        Axes over which to compute the inverse FFT. If not given, the last `len(s)` axes are used, or all axes if `s` is
        also not specified. Repeated indices in `axes` means that the transform over that axis is performed multiple
        times. (default is (-2, -1))
    norm : str, optional
        Normalization mode: 'forward', 'backward', or 'ortho' (see `numpy.fft` for details). Default is "backward".

    Notes
    -----
    This function requires MPI communication if the input array is distributed and the split axis is transformed.
    """
    return __fftn_op(x, torch.fft.ifft2, s=s, axes=axes, norm=norm)


def ifftn(
    x: DNDarray, s: Tuple[int, int] = None, axes: Tuple[int, ...] = None, norm: str = None
) -> DNDarray:
    """
    Compute the N-dimensional inverse discrete Fourier Transform.

    Parameters
    ----------
    x : DNDarray
        Input array, can be complex
    s : Tuple[int, ...], optional
        Shape of the output along the transformed axes. (default is x.shape)
    axes : Tuple[int, ...], optional
        Axes over which to compute the inverse FFT. If not given, the last `len(s)` axes are used, or all axes if `s` is
        also not specified. Repeated indices in `axes` means that the transform over that axis is performed multiple
        times. (default is None)
    norm : str, optional
        Normalization mode: 'forward', 'backward', or 'ortho' (see `numpy.fft` for details). Default is "backward".

    Notes
    -----
    This function requires MPI communication if the input array is distributed and the split axis is transformed.
    """
    return __fftn_op(x, torch.fft.ifftn, s=s, axes=axes, norm=norm)


def ihfftn(
    x: DNDarray, s: Tuple[int, ...] = None, axes: Tuple[int, ...] = None, norm: str = None
) -> DNDarray:
    """
    Compute the N-dimensional inverse discrete Fourier Transform of a real signal. The output is Hermitian-symmetric.

    Parameters
    ----------
    x : DNDarray
        Input array, must be real
    s : Tuple[int, ...], optional
        Shape of the output along the transformed axes. (default is x.shape)
    axes : Tuple[int, ...], optional
        Axes over which to compute the inverse FFT. If not given, the last `len(s)` axes are used, or all axes if `s` is
        also not specified. Repeated indices in `axes` means that the transform over that axis is performed multiple
        times. (default is None)
    norm : str, optional
        Normalization mode: 'forward', 'backward', or 'ortho' (see `numpy.fft` for details). Default is "backward".
    """
    return __real_fftn_op(x, torch.fft.ihfftn, s=s, axes=axes, norm=norm)


def irfft(x: DNDarray, n: int = None, axis: int = -1, norm: str = None) -> DNDarray:
    """
    Compute the one-dimensional inverse discrete Fourier Transform for real input.

    Parameters
    ----------
    x : DNDarray
        Input array, can be complex
    n : int, optional
        Length of the transformed axis of the output. If not given, the length is taken to be the length of the input
        along the axis specified by `axis`. If `n` is smaller than the length of the input, the input is cropped. If `n` is
        larger, the input is padded with zeros. Default: None.
    axis : int, optional
        Axis over which to compute the inverse FFT. If not given, the last axis is used, or the only axis if x has only one dimension. Default: -1.
    norm : str, optional
        Normalization mode: 'forward', 'backward', or 'ortho' (see `numpy.fft` for details). Default is "backward".

    Notes
    -----
    This function requires MPI communication if the input array is transformed along the distribution axis.
    If the input array is 1-D and distributed, this function copies the entire array on each MPI process! i.e. if the array is very large, you might run out of memory.
    Hint: if you are looping through a batch of 1-D arrays to transform them, consider stacking them into a 2-D DNDarray and transforming them all at once (see :func:`irfft2`).
    """
    return __fft_op(x, torch.fft.irfft, n=n, axis=axis, norm=norm)


def irfft2(
    x: DNDarray, s: Tuple[int, int] = None, axes: Tuple[int, int] = (-2, -1), norm: str = None
) -> DNDarray:
    """
    Compute the 2-dimensional inverse discrete Fourier Transform for real input.

    Parameters
    ----------
    x : DNDarray
        Input array, can be complex
    s : Tuple[int, int], optional
        Shape of the output along the transformed axes. (default is x.shape)
    axes : Tuple[int, int], optional
        Axes over which to compute the inverse FFT. If not given, the last `len(s)` axes are used, or all axes if `s` is
        also not specified. Repeated indices in `axes` means that the transform over that axis is performed multiple
        times. (default is (-2, -1))
    norm : str, optional
        Normalization mode: 'forward', 'backward', or 'ortho' (see `numpy.fft` for details). Default is "backward".

    Notes
    -----
    This function requires MPI communication if the input array is distributed and the split axis is transformed.
    """
    return __fftn_op(x, torch.fft.irfft2, s=s, axes=axes, norm=norm)


def irfftn(
    x: DNDarray, s: Tuple[int, int] = None, axes: Tuple[int, ...] = None, norm: str = None
) -> DNDarray:
    """
    Compute the N-dimensional inverse discrete Fourier Transform for real input.

    Parameters
    ----------
    x : DNDarray
        Input array, can be complex
    s : Tuple[int, ...], optional
        Shape of the output along the transformed axes. (default is x.shape)
    axes : Tuple[int, ...], optional
        Axes over which to compute the inverse FFT. If not given, the last `len(s)` axes are used, or all axes if `s` is
        also not specified. Repeated indices in `axes` means that the transform over that axis is performed multiple
        times. (default is None)
    norm : str, optional
        Normalization mode: 'forward', 'backward', or 'ortho' (see `numpy.fft` for details). Default is "backward".

    Notes
    -----
    This function requires MPI communication if the input array is distributed and the split axis is transformed.
    """
    return __fftn_op(x, torch.fft.irfftn, s=s, axes=axes, norm=norm)


def rfft(x: DNDarray, n: int = None, axis: int = -1, norm: str = None) -> DNDarray:
    """
    Compute the one-dimensional discrete Fourier Transform for real input.

    Parameters
    ----------
    x : DNDarray
        Input array, must be float.
    n : int, optional
        Length of the transformed axis of the output. If not given, the length is taken to be the length of the input
        along the axis specified by `axis`. If `n` is smaller than the length of the input, the input is cropped. If `n` is
        larger, the input is padded with zeros. Default: None.
    axis : int, optional
        Axis over which to compute the FFT. If not given, the last axis is used, or the only axis if x has only one dimension. Default: -1.
    norm : str, optional
        Normalization mode: 'forward', 'backward', or 'ortho' (see `numpy.fft` for details). Default is "backward".

    Notes
    -----
    This function requires MPI communication if the input array is transformed along the distribution axis.
    If the input array is 1-D and distributed, this function copies the entire array on each MPI process! i.e. if the array is very large, you might run out of memory.
    Hint: if you are looping through a batch of 1-D arrays to transform them, consider stacking them into a 2-D DNDarray and transforming them all at once (see :func:`rfft2`).
    """
    return __real_fft_op(x, torch.fft.rfft, n=n, axis=axis, norm=norm)


def rfft2(
    x: DNDarray, s: Tuple[int, int] = None, axes: Tuple[int, int] = (-2, -1), norm: str = None
) -> DNDarray:
    """
    Compute the 2-dimensional discrete Fourier Transform for real input.

    Parameters
    ----------
    x : DNDarray
        Input array, must be float.
    s : Tuple[int, int], optional
        Shape of the output along the transformed axes. (default is x.shape)
    axes : Tuple[int, int], optional
        Axes over which to compute the FFT. If not given, the last `len(s)` axes are used, or all axes if `s` is
        also not specified. Repeated indices in `axes` means that the transform over that axis is performed multiple
        times. (default is (-2, -1))
    norm : str, optional
        Normalization mode: 'forward', 'backward', or 'ortho' (see `numpy.fft` for details). Default is "backward".

    Notes
    -----
    This function requires MPI communication if the input array is distributed and the split axis is transformed.
    """
    return __real_fftn_op(x, torch.fft.rfft2, s=s, axes=axes, norm=norm)


def rfftn(
    x: DNDarray, s: Tuple[int, int] = None, axes: Tuple[int, ...] = None, norm: str = None
) -> DNDarray:
    """
    Compute the N-dimensional discrete Fourier Transform for real input.

    Parameters
    ----------
    x : DNDarray
        Input array, must be float.
    s : Tuple[int, ...], optional
        Shape of the output along the transformed axes. (default is x.shape)
    axes : Tuple[int, ...], optional
        Axes over which to compute the FFT. If not given, the last `len(s)` axes are used, or all axes if `s` is
        also not specified. Repeated indices in `axes` means that the transform over that axis is performed multiple
        times. (default is None)
    norm : str, optional
        Normalization mode: 'forward', 'backward', or 'ortho' (see `numpy.fft` for details). Default is "backward".

    Notes
    -----
    This function requires MPI communication if the input array is distributed and the split axis is transformed.
    """
    return __real_fftn_op(x, torch.fft.rfftn, s=s, axes=axes, norm=norm)
