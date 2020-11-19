<h1 align="center"> 🐢 &nbsp; Internet Explorer for Mobile + JavaScript &nbsp; 🐚 </h1>
  

<p align="center">  
<i>
We're gathering info for writing small web apps <br> for versions of Internet Explorer for mobile devices.
<br><br>
We fully support IE for Pocket PC 4.01 to now!
<br><br>
</i>
</p>
  
## Quick Questions
```md
What does JavaScript pre-IE 5 look like?

Is everything procedural? No classes, prototypes, OOP, composition?

What about DOM binding?
```
  
### Yes, we have prototype.
In JavaScript, we have a few classics like `Math.round()`; a good example of  
a `class` with a `static` method. `prototype` isn't that at all. `prototype`  
is one way to add **non-static** methods to a `class`. Pocket IE 4? Has it.  

### Classes? We have those too.
Modern webdevs use the JS keyword `class` to make an Object-Oriented-style  
class: a blueprint to make objects from with the same `properties` + `methods`.  
To make a new object from your class, write `new Car("blue", "leather", 1982)`.  
Can we do this in pIE from 2003? Absolutely.  
   
### What about HTML DOM? `.innerHTML` is older than you think.
We can build DOM binding off two features, `.innerHTML` + classes.  
Check, check.
  
## 🔗&nbsp; Links 
[IE 4's Unique DOM Objects ](https://www.tutorialspoint.com/javascript/javascript_ie4_dom.htm)

> IE 4 does not support `document.getElementById()`  
> nor does it support `document.getElementsByTagName()`;  
> alternatives are available. See article.
  
[IE 4 Does not have DHTML's MSFT HTC](https://web.archive.org/web/20070228155553/http://msdn.microsoft.com/workshop/components/htc/reference/htcref.asp)

> IE 4 does not have JavaScript HTML Components  
> like `document` or `event fires`. This makes 
> [DOM Prototype Emulation](https://web.archive.org/web/20070228234402/http://delete.me.uk/2004/09/ieproto.html) impossible.
  
[IE 4 supports modifying innerHTML while keeping event handlers](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)

> Even today, when setting innerHTML, event  
> handlers are destroyed. Use insertAdjacentHTML  
> to safely modify innerHTML. This is supported  
> in IE 4. Important to note, **not every**  
> **element supports this or innerHTML sets** - 
> see article.

```md
https://www.hpcfactor.com/support/cesd/s/0122.asp
https://stackoverflow.com/questions/5651220/what-version-of-internet-explorer-is-built-into-pocket-pc-4-20-build-14053
http://www.pocketpcfaq.com/
```
  
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
  
more references search: [ie 4 site:https://docstore.mik.ua/orelly/webprog/jscript](https://www.google.com/search?q=ie+4+site:https://docstore.mik.ua/orelly/webprog/jscript)

also for paint this will make the table grid better.
`div.insertAdjacentHTML("beforeend","<style>.board tr a {height: 78px;}</style>")`
  
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
*from ./link/happy.js*  
  
Objects can hold functions within them.  
They functions can even take parameters -  
though not shown here. These sub-functions  
or methods can use `this.` to access the  
properties on the object. You then can  
use the functions easily `feels.happy()`.  
