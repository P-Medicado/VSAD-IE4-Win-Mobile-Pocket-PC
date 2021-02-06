
/**
 * Create a multiline string using the commented contents 
 * of a function.
 * @param {*} func A function to contain multiline text.
 * @returns {string}
 */
function multiline(func) {
    var str = func.toString().
        replace(/^[^\/]+\/\*!?/, '').
        replace(/\*\/[^\/]+$/, '')

    return str
}
/**
 * Creates a template-literal-like string using the commented 
 * contents of a function.
 * @param {Function} func A function to contain multiline template literal-like text.
 * @returns {string}
 */
function template(func, optional_evaller) {
    /// <param name="func" type="String"></param>
    /// <returns type="String" />
    
    var str = multiline(func)
    var strings = str.split("${")
	var evaller = func.toString().indexOf("return eval(") > 0 ? func : function(str) { return eval(str) }
	evaller = optional_evaller || evaller

    for (var i = 1; i < strings.length; i++) {
        var js = strings[i]

        if(js.indexOf("${") >= 0)
            throw new Error("No nests ${}")
        
        var end = 1
        do end = js.indexOf("}", end + 1)
        while (js.indexOf("}", end + 1) > 0)
        // end = js.lastIndexOf("}")
        
        strings[i] = evaller(js.slice(0, end)) + js.slice(end + 1)
    }
    return strings.join("")
}
