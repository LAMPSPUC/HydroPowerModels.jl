"""
    train(hydro_model::HydroPowerModel;kwargs...) 

Train future cost function using SDDP.

Keyword arguments (same as SDDP.train):
<https://github.com/odow/SDDP.jl/blob/0490bea2c46787e1d4d63a5491ea0106c7fe70cf/src/algorithm.jl#L780-L827>

"""
function train(hydro_model::HydroPowerModel; kwargs...)
    if has_inconsistency(hydro_model.params)
        # https://odow.github.io/SDDP.jl/dev/tutorial/pglib_opf/
        return SDDP.train(
            hydro_model.backward_graph,
            forward_pass = SDDP.AlternativeForwardPass(hydro_model.forward_graph),
            post_iteration_callback = SDDP.AlternativePostIterationCallback(hydro_model.forward_graph);
            kwargs...)
    else
        return SDDP.train(hydro_model.forward_graph; kwargs...)
    end
end
