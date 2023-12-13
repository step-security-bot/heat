#!/usr/bin/env python
# pylint: skip-file


import argparse
import h5py
import torch
import time

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="PyTorch distance matrix gpu benchmark")
    parser.add_argument("--file", type=str, help="file to benchmark")
    parser.add_argument("--dataset", type=str, help="dataset within file to benchmark")
    parser.add_argument("--trials", type=int, help="number of benchmark trials")
    args = parser.parse_args()

    print(f"Loading data... {args.file}[{args.dataset}]", end="")
    with h5py.File(args.file, "r") as handle:
        data = torch.tensor(handle[args.dataset], device="cuda")
    print("\t[OK]")

    for trial in range(args.trials):
        print(f"Trial {trial}...", end="")
        start = time.perf_counter()
        dist = torch.cdist(data, data)
        end = time.perf_counter()
        print(f"\t{end - start}s")
