
    /** 
     * Class Q: Queue Item
     * @param {Function} fn
     */
    function Q(fn) {
        if(!(this instanceof Q)) return new Q(fn)

        this.is_completed = false
        this.is_started = false
        this.result = {}
        this.fn = fn
    }
    /**
     * @param {Function} callback
     */
    Q.prototype.try = function(callback) {
        var that = this
        const resolve = function(result) {
            that.is_completed = true
            that.result = result
            callback(that)
        }
        
        var args = [resolve].concat(Array.prototype.slice.call(arguments, 1))
        this.fn.apply(this, args)
    }

    /**  
     * Class Qs: Queue List
     */
    function Qs() {
        if(!(this instanceof Qs)) return new Qs()

        /** @type {Q[]} */
        this.q = []

        this.id = 0
    }
    /**
     * @param {(resolve = () => {}, arg) => 3} fn
     */
    Qs.prototype.push = function(fn) {
        var new_task = Q(fn)
        this.q.push(new_task)
    }
    /**
     * @param {Object} params
     * @param {(p) => p} final_callback
     */
    Qs.prototype.all = function(params, final_callback) {
        if(this.id >= this.q.length) return final_callback(params)

        var task = this.q[this.id]
        if(!task.is_started) this.private_start_task(task, params)

        var that = this
        if(!task.is_completed) return setTimeout(
            function() { return that.all(params, final_callback) }, 
            100
        )
        
        this.id++
        this.all(task.result, final_callback)
    }
    /**
     * @param {Q} task
     * @param {Object} params
     */
    Qs.prototype.private_start_task = function(task = Q(), params) {
        // const callback = (q = Q()) => console.log(q.result)
        var callback = function() { return null }
        task.is_started = true
        task.try(callback, params)
    }
