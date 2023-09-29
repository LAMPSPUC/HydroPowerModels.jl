using GLPK
using HydroPowerModels

########################################
#       Load Case
########################################
testcases_dir = joinpath(dirname(dirname(dirname(@__FILE__))), "testcases")
alldata = HydroPowerModels.parse_folder(joinpath(testcases_dir, "case3deterministic"))

########################################
#       Set Parameters
########################################
# model_constructor_grid may be for example: ACPPowerModel or DCPPowerModel
# optimizer may be for example: IpoptSolver(tol=1e-6) or GLPK.Optimizer
params = create_param(;
    stages=12,
    model_constructor_grid=DCPPowerModel,
    post_method=PowerModels.build_opf,
    optimizer=GLPK.Optimizer,
);

########################################
#       Build Model
########################################
m = hydro_thermal_operation(alldata, params)

########################################
#       Solve
########################################
HydroPowerModels.train(m; iteration_limit=60);

########################################
#       Simulation
########################################
results = HydroPowerModels.simulate(m, 1);

########################################
#       Test
########################################
# objective
@test isapprox(
    sum(s[:stage_objective] for s in results[:simulations][1]), 11000.00, atol=1e-2
)

# solution
@test results[:simulations][1][1][:powersystem]["solution"]["bus"]["3"]["deficit"] == 0
@test isapprox(
    results[:simulations][1][1][:powersystem]["solution"]["gen"]["2"]["pg"], 0, atol=1e-2
)
@test isapprox(
    results[:simulations][1][1][:powersystem]["solution"]["gen"]["3"]["pg"],
    0.3756,
    atol=1e-2,
)
@test isapprox(
    results[:simulations][1][1][:powersystem]["solution"]["gen"]["1"]["pg"],
    0.6243,
    atol=1e-2,
)

########################################
#       Build Model: min vol violation
########################################
for data in alldata
    data["hydro"]["Hydrogenerators"][1]["min_volume"] = 0.2
    data["hydro"]["Hydrogenerators"][1]["minimal_volume_violation_cost"] = 10000000
end

m = hydro_thermal_operation(alldata, params)

########################################
#       Solve
########################################
HydroPowerModels.train(m; iteration_limit=60);

########################################
#       Simulation
########################################
results = HydroPowerModels.simulate(m, 1);

########################################
#       Test
########################################
@test results[:simulations][1][end][:reservoirs][:reservoir][1].out >= 0.2

########################################
#       Build Model: min turb violation
########################################
for data in alldata
    data["hydro"]["Hydrogenerators"][1]["min_volume"] = 0.0
    data["hydro"]["Hydrogenerators"][1]["minimal_volume_violation_cost"] = 0.0
    data["hydro"]["Hydrogenerators"][1]["min_volume"] = 5.0
    data["hydro"]["Hydrogenerators"][1]["minimal_outflow_violation_cost"] = 10000000
end
m = hydro_thermal_operation(alldata, params)

########################################
#       Solve
########################################
HydroPowerModels.train(m; iteration_limit=60);

########################################
#       Simulation
########################################
results = HydroPowerModels.simulate(m, 1);

########################################
#       Test
########################################
@test results[:simulations][1][end][:reservoirs][:outflow][1] >= 5
