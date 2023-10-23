using GLPK

dir = joinpath(abspath(joinpath(dirname(@__FILE__), "..")), "testcases")

@testset "IO" begin
    @testset "Input parameters" begin
        optimizer = GLPK.Optimizer
        params = create_param(;
            stages=3,
            model_constructor_grid=DCPPowerModel,
            post_method=PowerModels.build_opf,
            optimizer=optimizer,
        )
        # no hydro data
        @test params["stages"] == 3
        @test params["post_method"] == PowerModels.build_opf
        @test params["optimizer"] == optimizer
        @test params["model_constructor_grid"] == DCPPowerModel
    end

    @testset "Validate Json" begin
        @test isnothing(
            validate_json_hydro(joinpath(dir, "validate_json", "hydro_correct.json"))
        )
        @test !isnothing(
            validate_json_hydro(joinpath(dir, "validate_json", "hydro_missing.json"))
        )
        @test !isnothing(
            validate_json_hydro(joinpath(dir, "validate_json", "hydro_type.json"))
        )

        @test isnothing(
            validate_json_powermodels(joinpath(dir, "validate_json", "powermodels_correct.json"))
        )
        @test !isnothing(
            validate_json_powermodels(joinpath(dir, "validate_json", "powermodels_missing.json"))
        )
        @test !isnothing(
            validate_json_powermodels(joinpath(dir, "validate_json", "powermodels_type.json"))
        )
    end
end
