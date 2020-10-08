
function inpt(id) {
    if(document.createElement) {
        var _ = document.createElement("input")
        _ = window[id]
    }
    else var _ = window[id]
    
    return _
}
function num(id) {
    return  +inpt(id).value
}

function divt(id) {
    if(document.createElement) {
        var _ = document.createElement("div")
        _ = window[id]
    }
    else var _ = window[id]
    
    return _
}

function btnt(id) {
    if(document.createElement) {
        var _ = document.createElement("a")
        _ = window[id]
    }
    else var _ = window[id]
    
    return _
}