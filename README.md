<h1 align="center"> 🐢 &nbsp; Internet Explorer for Mobile + JavaScript &nbsp; 🐚 </h1>
  

<p align="center">  
<i>
We're gathering info for writing small web apps <br> for versions of Internet Explorer for mobile devices.
<br><br>
We fully support IE for Pocket PC 4.01 to now!
<br><br>
</i>
</p>
  
  
  
***
   
### Creating Classes
Creating a class. Objects including data + methods.
```js
function Cake(flavor, has_icing) {
    this.flavor = flavor
    this.has_icing = has_icing
    this.slices = 10

    this.eat = function() {
        this.slices--
        return this.slices
    }
}
```
  
### Template Literals
Using template literal strings. Multiline string including computed JavaScript.
```js
var my_str = template(function(){/*!
<div style="background: ${has_bg ? "green" : "yellow"};">
    <h1> ${title} </h1>
</div>
*/})
```
  
### Powerful Objects
Using singleton-like objects. Raw objects including data + methods.
```js
var A_Color = {
    r: 70,
    g: 100,
    b: 100,
    greener: function() {
        this.g = Math.min(this.g + 10, 255)
        if(this.g > 100) this.b = Math.max(this.b - 10, 0)
    },
    bluer: function() {
        this.b = Math.min(this.b + 10, 255)
        if(this.b > 100) this.g = Math.max(this.g - 10, 0)
    }
}
```
  
***
  
## More Info
  

##### Yes, we have prototype.
In JavaScript, we have a few classics like `Math.round()`; a good example of  
a `class` with a `static` method. `prototype` isn't that at all. `prototype`  
is one way to add **non-static** methods to a `class`. Pocket IE 4? Has it.  

##### Classes? We have those too.
Modern webdevs use the JS keyword `class` to make an Object-Oriented-style  
class: a blueprint to make objects from with the same `properties` + `methods`.  
To make a new object from your class, write `new Car("blue", "leather", 1982)`.  
Can we do this in pIE from 2003? Absolutely.  
   
##### What about HTML DOM? `.innerHTML` is older than you think.
We can build DOM binding off two features, `.innerHTML` + classes.  
Check, check.