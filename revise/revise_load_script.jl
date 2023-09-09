import Pkg
Pkg.instantiate()

using Revise

Pkg.activate(dirname(@__DIR__))
Pkg.resolve()
Pkg.instantiate()

using HydroPowerModels
@info("""
This session is using HydroPowerModels with Revise.jl.
For more information visit https://timholy.github.io/Revise.jl/stable/.
""")