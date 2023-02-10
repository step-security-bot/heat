#!/bin/bash

export HEAT_BENCHMARK_DEVICE=gpu
export HEAT_BENCHMARK_NUM_SAMPLES=5
export HEAT_BENCHMARK_GPUS_PER_NODE=4
export HEAT_BENCHMARK_MAX_NUM_NODES=8
export HEAT_BENCHMARK_TIME_PER_RUN=00:01:00

for ((j=0;2**j<=$HEAT_BENCHMARK_MAX_NUM_NODES;j++))
do
    export HEAT_BENCHMARK_NUM_NODES=$((2**$j))
    export HEAT_BENCHMARK_NUM_MPI_PROCS=$(($HEAT_BENCHMARK_NUM_NODES*$HEAT_BENCHMARK_GPUS_PER_NODE))
    sbatch --nodes $HEAT_BENCHMARK_NUM_NODES --ntasks $HEAT_BENCHMARK_NUM_MPI_PROCS --time $HEAT_BENCHMARK_TIME_PER_RUN --gres gpu:$HEAT_BENCHMARK_GPUS_PER_NODE run_my_script_gpu.sh
done
