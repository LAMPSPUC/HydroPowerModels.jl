# HydroPowerModels.jl

```@meta
CurrentModule = HydroPowerModels
```

```@raw html
<p class="eyebrow">Multistage planning · SDDP · Network formulations</p>
<figure class="fig hero">
  <picture>
    <source media="(max-width: 640px)" srcset="assets/diagrams/hydropowermodels--formulations-compact.svg">
    <img src="assets/diagrams/hydropowermodels--formulations.svg" alt="Case data: a folder with PowerModels.json (the network), hydro.json (reservoirs and cascades) and inflows.csv (inflow scenarios), read by parse_folder. Each stage: a hydro layer (volumes, outflow, spillage, cascades, inflows, deficit) on a PowerModels network in any formulation, such as ACPPowerModel, SOCWRPowerModel, DCPPowerModel or NFAPowerModel. SDDP.jl: the backward pass computes the cuts on model_constructor_grid_backward, the forward pass visits the states on model_constructor_grid_forward, the same formulation by default; simulate(m, N) operates the forward formulation with the cuts and returns the results." width="760" height="249">
  </picture>
  <figcaption><i>A case folder becomes one multistage model whose stages put the hydro layer on any PowerModels network; SDDP.jl computes the cuts on one formulation and can visit states and operate on another.</i></figcaption>
</figure>
<p class="lede">HydroPowerModels.jl builds multistage hydrothermal planning models from network and reservoir data and solves them with stochastic dual dynamic programming (SDDP), through SDDP.jl. Each stage problem is a PowerModels.jl network with the reservoirs on top, so the network formulation is an argument: polar AC power flow, its conic relaxations, the DC approximation or a network-flow model. The formulation that computes the cuts may differ from the one that is operated, so the cost of a simplified planning model is measured on the system it simplifies.</p>
```

## Overview
HydroPowerModels.jl is a Julia/JuMP package for Hydrothermal Multistage Steady-State Power Network Optimization solved by Stochastic Dual Dynamic Programming (SDDP). 

Problem Specifications and Network Formulations are handled by [PowerModels.jl](https://github.com/lanl-ansi/PowerModels.jl). 

Solution method is handled by [SDDP.jl](https://github.com/odow/SDDP.jl).

## Installation

The current package is unregistered so you will need to add it as follows:

```julia
julia> ] add https://github.com/LAMPSPUC/HydroPowerModels.jl.git 
```

## Where to go next

| Page | What it covers |
|:--|:--|
| [Manual](getstarted.md) | load a case, set the parameters, train, simulate, read and plot the results |
| [Design](design.md) | the formulation as an argument, cuts on one formulation and operation on another, and the published comparison |
| [Case data](inputfiles.md) | the `PowerModels.json`, `hydro.json` and `inflows.csv` files of a case folder |
| [Examples](examples/cases.md) | case reports generated with the documentation |
| [Reference](apireference.md) | docstrings of the exported functions |
