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
    }
}

void (function(){
    if(window.document && window.document.getElementById) return
    
    if(!window.document) window.document = {}
    
    window.document.getElementById = function(id) {
        return window[id]
    }
})()
void (function(){
	if (String.prototype.trim) return 
	String.prototype.trim = function() {
		return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
	}
})()
