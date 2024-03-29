"""
    hydro_thermal_operation(alldata::Array{Dict{Any,Any}}, params::Dict)

Create a hydrothermal power operation model containing the policy graph the system data and the planning parameters.

Required parameters are:
-   alldata is a vector of dicts with information of the problem's stages. 
-   param is a dict containing solution parameters.
"""
function hydro_thermal_operation(
    alldata::Array{Dict{Any,Any}},
    params::Dict;
    build_opf_model::Function=HydroPowerModels.build_opf_powermodels,
    build_graph::Function=HydroPowerModels.build_graph,
)
    # verbose
    if !params["verbose"]
        PowerModels.silence()
    end

    # Model Definition
    graph = build_graph(params)
    backward_model = build_model(graph, alldata, params, build_opf_model)
    if has_inconsistency(params)
        forward_model = build_model(graph, alldata, params, build_opf_model, true)
    else
        forward_model = backward_model
    end

    # save data
    m = HydroPowerModel(backward_model, forward_model, alldata, params)

    return m
end

"""
    build_opf_powermodels(sp::JuMP.Model, data::Dict, params::Dict)

Network grid model builder.

Required parameters are:
-   sp is a JuMP model.
-   data is a dict with information of the subproblem. 
-   param is a dict containing solution parameters.
"""
function build_opf_powermodels(sp::JuMP.Model, data::Dict, params::Dict, is_forward::Bool)
    return PowerModels.instantiate_model(
        data["powersystem"],
        if is_forward
            params["model_constructor_grid_forward"]
        else
            params["model_constructor_grid_backward"]
        end,
        params["post_method"];
        jump_model=sp,
        setting=params["setting"],
    )
end

"""
    build_graph(data::Dict, params::Dict)

Graph description.
"""
function build_graph(params::Dict)
    # graph definition
    graph = SDDP.LinearGraph(0)
    SDDP.add_node(graph, 1)
    SDDP.add_edge(graph, 0 => 1, 1.0)
    for t in 2:params["stages"]
        SDDP.add_node(graph, t)
        SDDP.add_edge(graph, t - 1 => t, params["discount_factor"])
    end
    if params["cycle_probability"] > 0.0
        SDDP.add_edge(graph, params["stages"] => 1, params["cycle_probability"])
    end
    return graph
end

"""
    build_model(graph::SDDP.Graph, alldata::Array{Dict{Any,Any}}, params::Dict, build_opf_model::Function, is_forward::Bool=false)

Build the policy model.
"""

function build_model(
    graph::SDDP.Graph,
    alldata::Array{Dict{Any,Any}},
    params::Dict,
    build_opf_model::Function,
    is_forward::Bool=false,
)
    model = SDDP.PolicyGraph(
        graph;
        sense=:Min,
        optimizer=if is_forward
            params["optimizer_forward"]
        else
            params["optimizer_backward"]
        end,
        lower_bound=0.0,
        direct_mode=false,
    ) do sp, t

        # if set silence the solver
        # related to https://github.com/JuliaOpt/JuMP.jl/pull/1921
        if !params["verbose"]
            try
                MOI.set(JuMP.backend(sp), MOI.Silent(), true)
            catch
                #@info "Silent() attribute not implemented by the optimizer."
            end
        end

        # Extract current data
        data = alldata[min(t, size(alldata, 1))]

        # gather useful information from data
        gather_useful_info!(data)

        # build eletric grid model using PowerModels
        pm = build_opf_model(sp, data, params, is_forward)

        # create reference to variables
        createvarrefs!(sp, pm)

        # save AbstractPowerModel and Data
        sp.ext[:pm] = pm
        sp.ext[:data] = data

        # save lower_bound
        sp.ext[:lower_bound] = 0.0

        # resevoir variables
        variable_volume(sp, data)
        variable_min_volume_violation(sp, data)
        constraint_min_volume_violation(sp, data, t == params["stages"])

        # outflow and spillage variables
        variable_outflow(sp, data)
        variable_spillage(sp, data)
        variable_min_outflow_violation(sp, data)
        constraint_min_outflow_violation(sp, data)

        # hydro balance
        variable_inflow(sp, data)
        rainfall_noises(sp, data, params, cidx(t, data["hydro"]["size_inflow"][1]))
        constraint_hydro_balance(sp, data, params)

        # hydro_generation
        constraint_hydro_generation(sp, data, pm)

        # deficit
        variable_deficit(sp, data, pm)
        constraint_mod_deficit(sp, data, pm)

        # costs stage
        variable_cost(sp, data)
        add_gen_cost(sp, data)
        add_spill_cost(sp, data)
        add_deficit_cost(sp, data)
        add_min_outflow_violation_cost(sp, data)
        add_min_volume_violation_cost(sp, data)

        # Stage objective
        set_objective(sp, data)

        # # variable primal start
        JuMP.MOI.set.(sp, JuMP.MOI.VariablePrimalStart(), sp[:deficit], 0.0)
        JuMP.MOI.set.(sp, JuMP.MOI.VariablePrimalStart(), sp[:inflow], 0.0)
        JuMP.MOI.set.(sp, JuMP.MOI.VariablePrimalStart(), sp[:outflow], 0.0)
        JuMP.MOI.set.(sp, JuMP.MOI.VariablePrimalStart(), sp[:spill], 0.0)
        for r in sp[:reservoir]
            JuMP.MOI.set.(sp, JuMP.MOI.VariablePrimalStart(), r.in, 0.0)
        end
        for r in sp[:reservoir]
            JuMP.MOI.set.(sp, JuMP.MOI.VariablePrimalStart(), r.out, 0.0)
        end
    end
    return model
end

"""
    has_inconsistency(params::Dict)::Bool

Return true if the forward and backward are not equal.
"""

function has_inconsistency(params::Dict)::Bool
    return params["model_constructor_grid_forward"] !=
           params["model_constructor_grid_backward"] ||
           params["optimizer_forward"] != params["optimizer_backward"]
end
