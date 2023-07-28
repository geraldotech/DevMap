### JavaScript 2

- [currentTarget_background_SVG.html](https://geraldotech.github.io/DevMap/JavaScript/assets/thread/currentTarget_background_SVG.html)
- [addEventListener](#addeventlistener)
- [addEventListener-with-target](#addeventlistener-with-target)
- [Pointer Events](#pointerevents)
  - [target-custom-attr-data](#target-custom-attr-data)
  - [target-vs-currenttarget](#target-vs-currenttarget)
  - [Contains (e.target)](#contains "e.target")
- <a href="https://github.com/geraldotech/DevMap/tree/main/TypeScript#hoisting" target="_blank">hoisting</a>

<hr>

### addEventListener

```js
//Register the addEventListener on document.click...
document.addEventListener("click", function () {
  console.log("click");
});

//🔹
const root = document.documentElement;
root.addEventListener("click", myfun);

function myfun() {
  console.log("click");
}
//rootEl
const rootEl = document.documentElement;
const myfunction = () => {
  console.log("click");
};

rootEl.addEventListener("click", myfunction);

//👉documentElement - mousemove
document.documentElement.addEventListener("mousemove", function(e){
    console.log(e);
});

//👉eventListener_mouseMove

//html
<div id="OutDataX"></div>
<div id="OutDataY"></div>

//js
const get = (el) => {return document.getElementById(el)};

document.addEventListener("mousemove", function(event){
    console.log(event);
    get("OutDataX").innerHTML = `X: ${event.clientX}`;
    if(event.clientX === 50) alert('50!');
    get("OutDataY").innerHTML = `Y: ${event.clientY}`;
});
```

### addEventListener with target

```js
<p id="bar">TypeScript</p>;

//👉addEventListener: click -  target
document.getElementById("bar").addEventListener("click", function (event) {
  console.log(event.target); //  <p id="bar">TypeScript</p>
});

//👉addEventListener: input - captura o input em realtime
document.querySelector("input").addEventListener("input", function (e) {
  console.log(e);
});
//👉addEventListener: change
document
  .querySelector("input[type='checkbox']")
  .addEventListener("change", function (e) {
    console.log(e);
  });

console.log(event.target.id); //bar
console.log(event.target.getAttribute("data")); //eu
console.log(event.target.value); //only for input radio/checkbox
```

- ### PointerEvents

```js
<p id="bar">TypeScript</p>;

document.getElementById("bar").addEventListener("click", function (event) {
  console.log(event); //check output on console
});

//👉PointerEvent usando `var` não precisa do event(e).target pode chamar a const direto

<p id="bar">TypeScript</p>;
const p = document.getElementById("bar");
p.addEventListener("click", function (e) {
  console.log(p.id); //bar
});
```

- Target custom Attr Data
  <a id="target-custom-attr-data"></a>

```js
<p id="bar" data="eu">
  TypeScript
</p>;

console.log(p.getAttribute("data")); //eu
console.log(e.target.getAttribute("data")); //eu
console.log(e.target.attributes.data.value); //get value of Attr data

//👉 Target com custom Attr like "itemtype";
<li class="menu" itemtype="tip">
  Steak
</li>;
console.log(e.target.attributes.itemtype.value); //tip
```

- Target vs currentTarget
  <a id="target-vs-currenttarget"></a>

```js
<ul>
  <li>A</li>
  <li>B</li>
  <li>C</li>
  <li>Z</li>
</ul>;

const el = document.querySelector("ul");
el.addEventListener("click", function (e) {
  console.log(e.currentTarget); // <ul>
  console.log(e.target); // <li>
});
```

- Contains
  <a id="contains"></a>

<a href="https://codepen.io/geraldopcf/pen/yLKZROJ" target="_blank">CodePen</a>

```html
<div
  id="mydiv"
  style="width: 100px;height: 100px;background-color: blue;"
></div>

div { margin: auto; padding: 1em; max-width: 6em; background: rgba(0, 0, 0, .2);
text-align: center; }
```

```js
var mydiv = document.getElementById("mydiv");

document.addEventListener("click", function (e) {
  var inside = mydiv.contains(e.target);
  if (inside) {
    alert("click inside");
  } else {
    alert("click outsite");
  }
});
```
