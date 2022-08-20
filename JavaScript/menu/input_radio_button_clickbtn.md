#### [Live Demo](https://codepen.io/geraldopcf/pen/qBoKdYX)

html
```html
<input type="radio" name="calc" value="html" id="one">
<label for="one">HTML</label>

<input type="radio" name="calc" value="js" id="js">
<label for="js">JavaScript</label>

<button onclick="check()">checkout</button>

<div>
  <span id="res"></span>
  
</div>

  <p id="output"></p>
```

css
```css
*{
  background: black;
  color: white;
}

button{
  background: green;
  font-size: 1.5rem;
}
```



js

```js
function check(){
 
const inputs = document.querySelectorAll("input[type='radio']");

  let selected = "";
  for(radiobtn of inputs){
    if(radiobtn.checked){
      select = radiobtn.value;
      break;
    }
  }
 output.innerText = radiobtn ? "vc selecionou " +select : "nao houve selação";
}
  


```