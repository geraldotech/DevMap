### JavaScript 2

- [currentTarget_background_SVG.html](https://geraldotech.github.io/DevMap/JavaScript/assets/thread/currentTarget_background_SVG.html)
- [addEventListener](#addeventlistener)
- [addEventListener-with-target](#addeventlistener-with-target)
- [Pointer Events](#pointerevents)
  - [target-custom-attr-data](#target-custom-attr-data)
  - [target-vs-currenttarget](#target-vs-currenttarget)
  - [Contains (e.target)](#contains "e.target")
- <a href="https://github.com/geraldotech/DevMap/tree/main/TypeScript#hoisting" target="_blank">hoisting</a>
- [Web Components](./Web-Components)
- [Regex - Expressões Regulares](./Regex/README.md)
- [Learn-DOM-Manipulation](./Learn-DOM-Manipulation/)

  - [createElement, createTextNode, textContent, append vs appendChild](#domcreateel)
  - [getElement[id,class,tagName,byName] and QuerySelector](/getElements_idClasstagNameQuerySelector.md)
    <details>
    <summary>getAttributes,createElement ,set ,has ,remove...classList.add.contains</summary>
    - 1 [createAttr,getAttr,removeAttr](./assets/thread/create_get_remove_Attribute.html) - [Demo](https://geraldotech.github.io/DevMap/JavaScript/assets/thread/create_get_remove_Attribute.html)
    - 2 [hasAttribute_setAttribute](./assets/thread/hasAttribute_setAttribute.html) - [Demo](https://geraldotech.github.io/DevMap/JavaScript/assets/thread/hasAttribute_setAttribute.html)
    - 3 [setAttribute_vs_classList](./assets/thread/setAttribute_vs_classList.html) - [Demo](https://geraldotech.github.io/DevMap/JavaScript/assets/thread/setAttribute_vs_classList.html)
    - 4 [createElements_add_delete-App- TodoList](./assets/thread/createElements_add_delete.html) - [Demo](https://geraldotech.github.io/DevMap/JavaScript/assets/thread/createElements_add_delete.html)
    - 5 [createElements_add_delete_template_literal_add_assigment](./assets/thread/createElements_add_delete_template_literal_add_assigment.html) - [Demo](https://geraldotech.github.io/DevMap/JavaScript/assets/thread/createElements_add_delete_template_literal_add_assigment.html)

    </details>

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

  - <a href="https://codepen.io/geraldopcf/pen/yLKZROJ" target="_blank">CodePen</a>

  - [contains-e-target.html](./assets/thread/contains-e-target.html)
  - [Demo](https://geraldotech.github.io/DevMap/JavaScript/assets/thread/contains-e-target.html)

  ```html
  <div
    id="mydiv"
    style="width: 100px;height: 100px;background-color: blue;"
  ></div>

  div { margin: auto; padding: 1em; max-width: 6em; background: rgba(0, 0, 0,
  .2); text-align: center; }
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

- ### createElement, createTextNode, textContent, append vs appendChild

  <a id="domcreateel"></a>

  ```js
  //Images
  //createElements
  div = document.createElement("div");
  img = document.createElement("img");
  img.setAttribute("src", "http://smartdicastutorial.appspot.com/images/6d88733c461.jpg");
  img.setAttribute("alt", "img test")
  //appendChild
  div.appendChild(img)
  //appendChild body
  document.body.appendChild(div)
  # Images 2 Template Alternativ
  const btn = document.querySelector("button");
  btn.onclick = function(){
  re.innerHTML += `<img src="http://smartdicastutorial.appspot.com/images/6d88733c461.jpg"/>`

  //onclick classList
  document.addEventListener('click', function(){
  img.classList.add('meuimg');
  })
  # Images
  //create img -loop-img-button-click
  //html
  <button onclick=
    "show_image('https://www.w3schools.com/jsref/klematis.jpg',
                500,
                500,
                'Google Logo');">Add Google Logo</button
  //js
  function show_image(src, width, height, alt) {
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt
        // This next line will just add it to the <body> tag
        document.body.appendChild(img)
  }
  ```
