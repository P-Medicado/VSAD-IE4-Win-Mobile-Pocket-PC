## Previous Readme Content

To start, let's look at some JS: 
```js
function inpt(id) {
    if(document.createElement) {
        var _ = document.createElement("input")
        _ = window[id]
    }
    else var _ = window[id]
    
    return _
}
```  
*from ./lib/blank.js*

Remember, there is no createElement  
in the document object. This will always run else.  
But this if (along w the double var trick) will  
tell your IDE that inpt() returns an `<input>` element.
  
Now we'll look at a smaller function: 
```js
function num(id) {
    return  +inpt(id).value
}
```
*from ./lib/blank.js*
  
Here, we use our `inpt()` function to get  
an input. Then, use the `+` operator to tell  
our IDE that this function returns a `number`.  
  

  
The last bit is really powerful. It is so  
helpful y thoughtful to be included in  
such an old shipping version of IE. Let's see:
```js
var feels = {
    r: 70,
    g: 100,
    b: 100,
    happy: function() {
        this.g = Math.min(this.g + 10, 255)
        if(this.g > 100) this.b = Math.max(this.b - 10, 0)
    },
    sad: function() {
        this.b = Math.min(this.b + 10, 255)
        if(this.b > 100) this.g = Math.max(this.g - 10, 0)
    }
}
```
  
Objects can hold functions within them.  
They functions can even take parameters -  
though not shown here. These sub-functions  
or methods can use `this.` to access the  
properties on the object. You then can  
use the functions easily `feels.happy()`. 