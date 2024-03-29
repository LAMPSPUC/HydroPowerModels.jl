using Documenter, Literate, HydroPowerModels

examples_dir = joinpath(dirname(dirname(@__FILE__)), "examples/HydroValleys")
docs_dir = dirname(@__FILE__)
testcases_dir = joinpath(dirname(dirname(@__FILE__)), "testcases")

plot_bool = true

makedocs(;
    modules=[HydroPowerModels],
    doctest=false,
    clean=true,
    repo="https://github.com/LAMPSPUC/HydroPowerModels.jl/blob/{commit}{path}#{line}",
    format=Documenter.HTML(;
        prettyurls=get(ENV, "CI", "false") == "true",
        canonical="https://LAMPSPUC.github.io/HydroPowerModels.jl",
        assets=String[],
    ),
    sitename="HydroPowerModels.jl",
    authors="Andrew Rosemberg et al",
    pages=[
        "Home" => "index.md",
        "Manual" => "getstarted.md",
        "Case data" => "inputfiles.md",
        "Examples" => "examples/cases.md",
        "Reference" => "apireference.md",
    ],
)

include("make_examples.jl")

deploydocs(; repo="github.com/LAMPSPUC/HydroPowerModels.jl.git")
