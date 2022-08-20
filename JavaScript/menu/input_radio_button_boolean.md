#### [Live Demo](https://codepen.io/geraldopcf/pen/LYdrVmz)

html
```html
<input type="radio" name="calc" value="html" id="one">
<label for="one">HTML</label>

<input type="radio" name="calcx" value="js" id="two">
<label for="two">JavaScript</label>

<button onclick="check()">checkout</button>

<div>
  <span id="res"></span>
  
</div>
```


js

```js
function check(){  
  
const one = document.getElementById("one").checked;
const two = document.getElementById("two").checked;
const n = [one, two];
console.log(n);

const arr = new Array().fill(false); 
for(var i = 0; i < n.length; i++){
  var get = n.includes(n[i]);
arr.push(get)
}
arr.forEach((ele,index)=> console.log(index+':'+ele))
console.log(arr); 
  
}


```