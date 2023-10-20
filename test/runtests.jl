using HydroPowerModels, Test
using JuMP, PowerModels, SDDP

testcases_dir = dirname(@__FILE__)

include(joinpath(testcases_dir,"hydrovalleymodel.jl"))
include(joinpath(testcases_dir,"IO.jl"))
include(joinpath(testcases_dir,"variables.jl"))
include(joinpath(testcases_dir,"examples.jl"))
