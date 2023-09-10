mutable struct HydroPowerModel
    backward_graph::SDDP.PolicyGraph     #backward
    forward_graph::SDDP.PolicyGraph      #forward
    alldata::Array{Dict{Any,Any}}
    params::Dict
end
