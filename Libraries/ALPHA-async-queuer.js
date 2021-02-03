
    /**
     * @param {() => {}} func
     * @param {true} using_semi_colons
     */
    function syncly(func, using_semi_colons) {
        var fn = func.toString()
        var lines = fn.split("\n")
        for (var i = 0; i < lines.length; i++) 
            lines[i] = lines[i].trim()
        for (var i = 0; i < lines.length; i++) 
            if(!lines[i]) lines.splice(i, 1)
        
        lines.splice(0, 1)
        lines.pop()
        var obj_var = lines.splice(0, 1)[0].split(" ")[1]
        var res_var = lines.splice(0, 1)[0].split(" ")[1]

        var q = Qs()

        // TODO: re-implement using_semi_colons
        // var unit_funcs = using_semi_colons ? 
        //     lines.join("").split(";").filter(line => !!line) :
        //     lines
        var unit_funcs = lines

        for (var i = 0; i < unit_funcs.length; i++) {
            var line = unit_funcs[i]
            if(line.indexOf(res_var) < 0) line += "\n" + res_var + "(" + obj_var + ")"
            var fn = Function(res_var, obj_var, line)
            q.push(fn)
        }
        // unit_funcs.forEach(line => {
        //     if(!line.includes(res_var)) line += `\n${res_var}(${obj_var})`
        //     var fn = Function(res_var, obj_var, line)
        //     q.push(fn)
        // })

        return q
    }

/**
<script>
    function awaitable() {
        let obj = {}
        let next //; // = () => {}

        obj.text = obj.text || "Good morning!"
        setTimeout(next, 1000, obj)
        obj.text += "\n"
        obj.text += "How is everyone today?"
        setTimeout(next, 2000, obj)
    }

    // const q = syncly(awaitable, false)
    // q.q.forEach(_ => console.log(_.fn))
</script>
<script>
    function await_stacking() {
        let state = {}
        let next //; // = () => {}

        syncly(awaitable, false).all(state, next)
        state.text += "\n"
        syncly(awaitable, false).all(state, next)

        console.log(state.text)
    }
    const q = syncly(await_stacking, false)
    // q.q.forEach(_ => console.log(_.fn))
</script>
*/