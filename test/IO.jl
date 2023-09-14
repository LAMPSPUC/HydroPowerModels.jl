using GLPK

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
        @test isnothing(validate_json_hydro("..\\testcases\\validate_json\\correct_json.jl"))
        @test !isnothing(validate_json_hydro("..\\testcases\\validate_json\\missing_json.jl"))
        @test !isnothing(validate_json_hydro("..\\testcases\\validate_json\\type_json.jl"))
    end
end
