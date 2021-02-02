var GetEl = {
    /**
     * @returns {HTMLInputElement}
     * @param {string} id 
     */
    inp: function(id) {
        return window[id]
    },
    /**
     * @returns {HTMLDivElement}
     * @param {string} id 
     */
    div: function(id) {
        return window[id]
    },
    /**
     * @returns {HTMLAnchorElement}
     * @param {string} id 
     */
    a: function(id) {
        return window[id]
    },
}