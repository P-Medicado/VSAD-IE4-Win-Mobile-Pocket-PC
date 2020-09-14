
function start() {
    var add_one = +inpt("add_in").value
    var add_two = +inpt("add_out").value

    alert("Sum is: " + (add_one + add_two))
}

function math(key) {
    var a = "one"
    var b = "two"
    switch (key) {
        case "add": return num(a) + num(b)
        case "sub": return num(a) - num(b)
        case "mul": return num(a) * num(b)
        case "div": return num(a) / num(b)
    
        default:
            break;
    }
}

document.write('<input type="number" value="42" name="" id="one">')
