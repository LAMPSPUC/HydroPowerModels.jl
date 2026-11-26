<div align="center">

# HydroPowerModels.jl

<p><sub><b>MULTISTAGE PLANNING · SDDP · NETWORK FORMULATIONS</b></sub></p>

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.3842130.svg)](https://doi.org/10.5281/zenodo.3842130) [![][docs-latest-img]][docs-latest-url] [![Build Status][build-img]][build-url] [![Codecov branch][codecov-img]][codecov-url] [![status][paper-img]][paper-url]

</div>

[build-img]: https://github.com/LAMPSPUC/HydroPowerModels.jl/actions/workflows/CI.yml/badge.svg?branch=main
[build-url]: https://github.com/LAMPSPUC/HydroPowerModels.jl/actions/workflows/CI.yml

[codecov-img]: https://codecov.io/gh/LAMPSPUC/HydroPowerModels.jl/coverage.svg?branch=main
[codecov-url]: https://codecov.io/gh/LAMPSPUC/HydroPowerModels.jl?branch=main

[docs-latest-img]: https://img.shields.io/badge/docs-guide-blue.svg
[docs-latest-url]: https://github.com/LAMPSPUC/HydroPowerModels.jl/blob/main/docs/src/index.md

[paper-img]: https://proceedings.juliacon.org/papers/10.21105/jcon.00035/status.svg
[paper-url]: https://proceedings.juliacon.org/papers/10.21105/jcon.00035#

<p align="center">
  <img src="docs/src/assets/diagrams/hydropowermodels--formulations.svg" width="760" alt="Case data: a folder with PowerModels.json (the network), hydro.json (reservoirs and cascades) and inflows.csv (inflow scenarios), read by parse_folder. Each stage: a hydro layer (volumes, outflow, spillage, cascades, inflows, deficit) on a PowerModels network in any formulation, such as ACPPowerModel, SOCWRPowerModel, DCPPowerModel or NFAPowerModel. SDDP.jl: the backward pass computes the cuts on model_constructor_grid_backward, the forward pass visits the states on model_constructor_grid_forward, the same formulation by default; simulate(m, N) operates the forward formulation with the cuts and returns the results.">
</p>
<p align="center"><i>A case folder becomes one multistage model whose stages put the hydro layer on any PowerModels network; SDDP.jl computes the cuts on one formulation and can visit states and operate on another.</i></p>

HydroPowerModels.jl builds multistage hydrothermal planning models from network and reservoir data and solves them with stochastic dual dynamic programming (SDDP), through [SDDP.jl](https://github.com/odow/SDDP.jl). Each stage problem is a PowerModels.jl network with the reservoirs on top, so the network formulation is an argument: polar AC power flow, its conic relaxations, the DC approximation or a network-flow model. The formulation that computes the cuts may differ from the one that is operated, so the cost of a simplified planning model is measured on the system it simplifies.

## Installation

The package is unregistered, so add it from the repository:

```julia
julia> ] add https://github.com/LAMPSPUC/HydroPowerModels.jl.git
```

## Example

A DC economic hydrothermal dispatch over 12 stages, on a case folder such as [`testcases/case3`](testcases/case3):

```julia
using HydroPowerModels
using Ipopt, HiGHS

data = HydroPowerModels.parse_folder("case3_folderpath")

params = create_param( stages = 12,
                    model_constructor_grid  = DCPPowerModel,
                    post_method             = PowerModels.build_opf,
                    optimizer               = HiGHS.Optimizer
);

m = hydro_thermal_operation(data, params)

HydroPowerModels.train(m;iteration_limit = 60);

results = HydroPowerModels.simulate(m, 100);
```

To plan on one formulation and operate on another, add `model_constructor_grid_forward` and `optimizer_forward` (for example `ACPPowerModel` with Ipopt): the cuts are computed on `model_constructor_grid`, while forward passes and the simulation run the forward formulation. [`examples/HydroValleys/case3_inconsistency.jl`](examples/HydroValleys/case3_inconsistency.jl) does this for DC planning under AC operation, and the [manual](docs/src/getstarted.md) explains how to read `results`.

## Result

<p align="center">
  <img src="docs/src/assets/network-simplifications-policies.svg" width="760" alt="For each planning network model on a 3-bus loop and a 28-bus system, an open marker for the expected cost under the planning model and a filled marker for the expected cost when the same cuts are operated under AC power flow, with the gap and the SDDP time. 3-bus: NFA 43.23 to 54.72, SOC 45.05 to 54.92, SDP 45.45 to 48.29, DC 43.39 to 48.89, DCLL 45.42 to 48.07 million dollars. 28-bus: NFA 0.587 to 0.687, SOC 0.608 to 0.609, SDP not converged, DC 0.587 to 0.645, DCLL 0.613 to 0.609 million dollars.">
</p>

**Planned and operated cost of the policies induced by each planning model, computed with the package.** Open marker: expected cost under the planning model; filled marker: expected cost when the same cuts operate the system under AC power flow. Data: Rosemberg et al. (2022), Tables I and II. The order of the planned costs does not survive operation under AC; the [design page](docs/src/design.md) explains the setup.

## Design

The network formulation and the problem builder are arguments (`model_constructor_grid`, `post_method`), and the hydro layer is written once on top of whatever network PowerModels returns: reservoir volumes with bounds and violation penalties, turbined outflow and spillage along cascades, sampled inflows, hydro generation tied to the network's generator variables, and load shedding at a deficit cost. A study of network models is then a sweep over one argument while data, inflows and the SDDP configuration stay fixed.

| Argument of `create_param` | Role |
|:--|:--|
| `model_constructor_grid` | network formulation of every stage (default `DCPPowerModel`) |
| `model_constructor_grid_backward`, `optimizer_backward` | formulation and solver on which the backward pass computes the cuts |
| `model_constructor_grid_forward`, `optimizer_forward` | formulation and solver on which forward passes visit states and the simulation operates |
| `stages`, `stage_hours`, `discount_factor`, `cycle_probability` | the policy graph: horizon, stage length, discounting, cyclic graphs |

When the forward and backward formulations differ, the package builds two policy graphs over the same data and copies the cuts from the planning graph to the operating graph after each iteration. Each simulated stage returns the PowerModels solution (generation, flows, voltages, duals) together with the reservoir trajectories.


## Data formats and dependencies

**Network Data Formats**
* PowerModels ".json" files

**Reservoir Data Formats**
* JSON ".json" files

**Problem Specifications and Network Formulations**
* Problem Specifications and Network Formulations are handled by [PowerModels.jl](https://github.com/lanl-ansi/PowerModels.jl).

**Solution Method**
* Solution method is handled by [SDDP.jl](https://github.com/odow/SDDP.jl).

**If you are struggling to figure out how to use something, raise a Github issue!**


## Documentation

- [Overview and installation](docs/src/index.md)
- [Getting started](docs/src/getstarted.md)
- [Design: planning and operating formulations](docs/src/design.md)
- [Input data formats](docs/src/inputfiles.md)
- [Example scripts](examples)

## Citation

This package was developed as part of a [master's thesis](https://www.researchgate.net/publication/342751537_A_Framework_for_Assessing_the_Impacts_of_Network_Formulations_in_the_Operation_of_Hydrothermal_Power_Systems). If you use HydroPowerModels.jl, we ask that you please cite the following:

```
@article{Rosemberg2020,
  doi = {10.21105/jcon.00035},
  url = {https://doi.org/10.21105/jcon.00035},
  year = {2020},
  publisher = {The Open Journal},
  volume = {1},
  number = {1},
  pages = {35},
  author = {Andrew W. Rosemberg and Alexandre Street and Joaquim D. Garcia and Thuener Silva and \\ Davi M. Valladão and Oscar Dowson},
  title = {HydroPowerModels.jl: A Julia/JuMP Package for Hydrothermal Economic Dispatch Optimization},
  journal = {Proceedings of the JuliaCon Conferences}
}
```

For the assessment of planning network models under AC operation:

```
@article{rosemberg2021assessing,
  title   = {Assessing the Cost of Network Simplifications in Long-Term Hydrothermal Dispatch Planning Models},
  author  = {Rosemberg, Andrew W. and Street, Alexandre and Dias Garcia, Joaquim and Vallad{\~a}o, Davi M. and Silva, Thuener and Dowson, Oscar},
  journal = {IEEE Transactions on Sustainable Energy},
  volume  = {13},
  number  = {1},
  pages   = {196--206},
  year    = {2022},
  doi     = {10.1109/TSTE.2021.3106810}
}
```
