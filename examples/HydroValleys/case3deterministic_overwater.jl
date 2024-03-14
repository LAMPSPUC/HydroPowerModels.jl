using HiGHS
using HydroPowerModels

########################################
#       Load Case
########################################
case = "case3deterministic_overwater"
current_dir = dirname(dirname(dirname(@__FILE__)))
case_dir = joinpath(current_dir, "testcases")
alldata = HydroPowerModels.parse_folder(joinpath(case_dir, case));

########################################
#       Set Parameters
########################################
# model_constructor_grid may be for example: ACPPowerModel or DCPPowerModel
# optimizer may be for example: IpoptSolver(tol=1e-6) or HiGHS.Optimizer
params = create_param(;
    stages = 12,
    model_constructor_grid = DCPPowerModel,
    post_method = PowerModels.build_opf,
    optimizer = HiGHS.Optimizer,
);

########################################
#       Build Model
########################################
m = hydro_thermal_operation(alldata, params)

########################################
#       Solve
########################################
HydroPowerModels.train(m; iteration_limit = 60);

########################################
#       Simulation
########################################
results = HydroPowerModels.simulate(m, 1);

########################################
#       Test
########################################
# objective
@test isapprox(
    sum(s[:stage_objective] for s in results[:simulations][1]),
    6016.68,
    atol = 1e-2,
)

# solution grid
@test results[:simulations][1][1][:powersystem]["solution"]["bus"]["3"]["deficit"] == 0
@test isapprox(
    results[:simulations][1][1][:powersystem]["solution"]["gen"]["2"]["pg"],
    0,
    atol = 1e-2,
)
@test isapprox(
    results[:simulations][1][1][:powersystem]["solution"]["gen"]["3"]["pg"],
    0.74,
    atol = 1e-2,
)
@test isapprox(
    results[:simulations][1][1][:powersystem]["solution"]["gen"]["1"]["pg"],
    0.25,
    atol = 1e-2,
)

# solution reservoirs
@test isapprox(results[:simulations][1][1][:reservoirs][:spill][1], 0.090, atol = 1e-2)
