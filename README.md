<h1 align="center"> 🐢 &nbsp; IE 4 Inforepo, by vsads hacking co. &nbsp; 🐚 </h1>
  

<p align="center">  
<i>
We're gathering up information for writing small web apps for old Pocket PCs. There are already a few demo apps.
<br><br>
How can I get started writing JavaScript for such an old OS? Is the JavaScript much different than what I know?
<br><br>
</i>
</p>

  
   
> What is the IE 4 Inforepo?
> ---
> A collection of links, references, projects,  
> &amp; human-readable tutorials for writing  
> JavaScript web-apps for Internet Explorer  
> 4 - common on most Pocket PCs from 2002 &amp; 2003.
  
## 🔗&nbsp; Links 
[IE 4's Unique DOM Objects ](https://www.tutorialspoint.com/javascript/javascript_ie4_dom.htm)

> Summary
> ---
> IE 4 does not support `document.getElementById()`  
> nor does it support `document.getElementsByTagName()`;  
> alternatives are available. See article.
  
[IE 4 Does not have DHTML's MSFT HTC](https://web.archive.org/web/20070228155553/http://msdn.microsoft.com/workshop/components/htc/reference/htcref.asp)

> Summary
> ---
> IE 4 does not have JavaScript HTML Components  
> like `document` or `event fires`. This makes 
> [DOM Prototype Emulation](https://web.archive.org/web/20070228234402/http://delete.me.uk/2004/09/ieproto.html) impossible.
  
[IE 4 supports modifying innerHTML while keeping event handlers](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)

> Summary
> ---
> Even today, when setting innerHTML, event  
> handlers are destroyed. Use insertAdjacentHTML  
> to safely modify innerHTML. This is supported  
> in IE 4. Important to note, **not every**  
> **element supports this or innerHTML sets** - 
> see article.
  
Expired Links: 
[https://www.worldtimzone.com/res/javascript/](https://www.worldtimzone.com/res/javascript/)
  
## 📬&nbsp; Archive
We had a working REPL for testing IE DOM y such. It has been lost.  
  
## 🛒&nbsp; User Demos 
simple demonstrations:  
+ [chess *unfinished*](./chess.html)  
+ [calc **done**](./calc.html)   
+ [happy **done**](./happy.html)   
+ [paint **done**](./paint.html)  
  
## A demo to compare for @leasj y @mm64
github pages go brrr (but my ppc nah can use my wifi) ~  
  
***
  
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
*from ./link/chess.js*  
  
Objects can hold functions within them.  
They functions can even take parameters -  
though not shown here. These sub-functions  
or methods can use `this.` to access the  
properties on the object. You then can  
use the functions easily `feels.happy()`.  