#### [CodePen](https://codepen.io/geraldopcf/pen/WNzyQMG)

html
```html
<h2>o name do form é mais importante do que o #id</h2>    

<form id="mainForm" name="mainForm">
        <input type="radio" name="rads" id="one" value="50MB" />
        <label for="one">One</label>
        <input type="radio" name="rads"  id="two" value="200MB" />
        <label for="two">Two</label>
        <input type="radio" name="rads" id="three" value="300Mb" />
      
        <label for="three">Three</label>
        <input type="radio" name="rads" id="four" value="1GB" />
        <label for="four">Four</label>
    
    </form>
    <span id="result"></span>

<hr>

<form name="users">
  <input type="radio" name="opt" id="onee" value="1">
  <label for="onee">One</label>
  <input type="radio" name="opt" id="twoo" value="2">
  <label for="twoo">Two</label>
  
</form>

<div id="res"></div>
<div id="res2"></div>

```

js

```js
    document.mainForm.onclick = function(){
    var radVal = document.mainForm.rads.value;
      console.log(radVal);
  
    result.innerHTML = 'You selected: '+radVal;
}

document.users.onclick = function(){
  let val = document.users.opt.value;
  console.log(val);
  window.res.innerHTML = `Selecionou ${val}`;
  if(val === "1"){
    window.res2.innerHTML = "https://codepen.io/geraldopcf/pen/WNzyQMG";
    return;
  }
  if(val === "2"){
    let url  = "https://www.youtube.com/watch?v=2zNSgSzhBfM"
    window.res2.innerHTML = `<a href="${url}">Youtube</a>`;
    return
  }
}
```