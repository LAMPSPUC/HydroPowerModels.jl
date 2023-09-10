# ======================= Simulation-Stalling Stopping Rule ======================= #

"""
    SimulationStalling(number_simulations::Int, iteration_period::Int,
    previous_simulations::Vector{Float64}, scenarious::Union{SDDP.Historical, Nothing}, verbose::Bool)

Perform a hypothesis test using the T distribution to find out
whether it is reasonable to accept that the average costs of the previous policy
and the current policy have the same average.

The test is performed with 'number_simulations' simulations every 'iteration_period' iterations,
using 'scenarious' as scenarios (drawn from history, case nothing) and with 'p_value' as p-value.
"""
mutable struct SimulationStalling <: SDDP.AbstractStoppingRule
    p_value::Float64
    iteration_period::Int
    number_simulations::Int
    previous_simulations::Vector{Float64}
    scenarious::Union{SDDP.Historical, Nothing}
    verbose::Bool
    function SimulationStalling(; p_value = 0.05, number_simulations=2, iteration_period = 1,
        previous_simulations = Vector{Float64}(undef, number_simulations), scenarious = nothing, verbose=false)
        @assert(number_simulations > 1) # number_simulations - 1 is the degree of freedom of the test that must be greater than zero
        return new(p_value, iteration_period, number_simulations, previous_simulations, scenarious, verbose)
    end
end

SDDP.stopping_rule_status(::SimulationStalling) = :simulation_stalling

function SDDP.convergence_test(graph::SDDP.PolicyGraph{T}, log::Vector{SDDP.Log},
                          rule::SimulationStalling) where T
    if length(log) % rule.iteration_period != 0
        return false
    end
    
    if length(log) == 1 || isnothing(rule.scenarious)
        rule.scenarious = SDDP.Historical([SDDP.sample_scenario(graph, SDDP.InSampleMonteCarlo())[1] for _ = 1:rule.number_simulations])
    end
    
    results = SDDP.simulate(graph, rule.number_simulations, sampling_scheme = rule.scenarious)
    simulations = [sum(t[:stage_objective] for t in sim) for sim in results]

    htest = OneSampleTTest(rule.previous_simulations, simulations)
    p_value = pvalue(htest)
    sample_mean = Statistics.mean(simulations)
    
    if rule.verbose
        println("Simulated policy value: [", sample_mean, ", ", htest.t, ", ", p_value, "]")
    end

    rule.previous_simulations = simulations
    return p_value > rule.p_value
end

# ======================= And Stopping Rule ======================= #

"""
    AndStoppingRules(stopping_rules::Vector{SDDP.AbstractStoppingRule})

Condition is met when all conditions 'stopping_rules' are met.
"""
mutable struct AndStoppingRules <: SDDP.AbstractStoppingRule
    stopping_rules::Vector{SDDP.AbstractStoppingRule}
end

SDDP.stopping_rule_status(::AndStoppingRules) = :and_stopping_rules

function SDDP.convergence_test(graph::SDDP.PolicyGraph{T}, log::Vector{SDDP.Log},
                          rule::AndStoppingRules) where T
    for stopping_rule in rule.stopping_rules
        if !SDDP.convergence_test(graph, log, stopping_rule)
            return false
        end
    end
    return true
end