
#' ---
#' title : Example Case 3 AC - Year Planning
#' author : Andrew Rosemberg
#' date : 15th Feb 2019
#' ---

#' # Introduction

#' This an example of the HydroPowerModels package for solving a simple stochastic case with the following specifications:
#'    - 3 Buses
#'    - 3 Lines
#'    - 2 Generators
#'    - 1 Reservoir and Hydrogenerator
#'    - 3 Scenarios
#'    - 12 Stages
#'    - AC Formulation

#' # Case

#' ## Importing package and optimizer
using Ipopt
using HydroPowerModels

#' ## Initialization
#+ results =  "hidden"
using Random
seed = 1221

#' ## Load Case Specifications

#' Data
case = "case3"
current_dir = dirname(dirname(dirname(@__FILE__)))
case_dir = joinpath(current_dir, "testcases")
alldata = HydroPowerModels.parse_folder(joinpath(case_dir, case));

params = create_param(;
    stages = 12,
    model_constructor_grid = ACPPowerModel,
    post_method = PowerModels.build_opf,
    optimizer = Ipopt.Optimizer,
)

#' ## Build Model
#+ results =  "hidden"
m = hydro_thermal_operation(alldata, params);

#' ## Train
#+ results =  "hidden"
start_time = time()
HydroPowerModels.train(
    m;
    iteration_limit = 100,
    stopping_rules = [SDDP.Statistical(; num_replications = 20, iteration_period = 20)],
);
end_time = time() - start_time

#' Termination Status and solve time (s)
(SDDP.termination_status(m.forward_graph), end_time)

#' ## Simulation
#+ results =  "hidden"
using Random: Random
Random.seed!(seed)
results = HydroPowerModels.simulate(m, 100);

#' ## Results
#' Objective
results[:simulations][1][1][:objective]
