module HydroPowerModels

using JuMP, PowerModels, SDDP
using HypothesisTests, Statistics
using JSON, JSONSchema
using CSV
using DataFrames
using Reexport: Reexport

include("plugins/stop_rules.jl")
include("structs.jl")
include("variable.jl")
include("constraint.jl")
include("utilities.jl")
include("IO.jl")
include("simulate.jl")
include("train.jl")
# include("visualization/visualize_data.jl") # Issue: https://github.com/andrewrosemberg/HydroPowerModels.jl/issues/46
include("objective.jl")
include("build_model.jl")

export hydro_thermal_operation,
    create_param,
    set_active_demand!,
    flat_dict,
    signif_dict,
    SimulationStalling,
    validate_json,
    validate_json_hydro,
    validate_json_powermodels

Reexport.@reexport using PowerModels, SDDP

end
