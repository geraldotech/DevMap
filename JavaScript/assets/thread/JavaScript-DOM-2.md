### JavaScript 2

- [DOM events](#dom---events)
  - [onclick](#onclick)
  - [addEventListener](#addeventlistener)
  - [addEventListener and event.target](#addeventlistener-with-target)
  - [DOMContentLoaded](#domcontentloaded)
  - [onload vs onreadystatechange vs domcontentloaded](#onload-vs-onreadystatechange-vs-domcontentloaded)
- [Pointer Events](#pointerevents)
  - [target custom attribute data](#target-custom-attr-data)
  - [target vs currenttarget](#target-vs-currenttarget)
  - [Contains (e.target)](#contains 'e.target')
  - [currentTarget_background_SVG.html](https://geraldotech.github.io/DevMap/JavaScript/assets/thread/currentTarget_background_SVG.html)
- <a href="https://github.com/geraldotech/DevMap/tree/main/TypeScript#hoisting" target="_blank">Hoisting</a>
- [Web Components](./Web-Components)
- [Regex - Expressões Regulares](./Regex/README.md)
- [Learn-DOM-Manipulation](./Learn-DOM-Manipulation/)

  - [getElementById {direct way}](#get-a-element-by-id-direct-way)
  - [createElement, createTextNode, textContent, append vs appendChild](#domcreateel)
  - [getElement[id,class,tagName,byName] and QuerySelector](getElements_idClasstagNameQuerySelector.md)

    <details>
    <summary>getAttributes, createElement ,set ,has ,remove...classList.add.contains</summary>

    - 1 [createAttribute, getAttribute, removeAttribute](./create_get_remove_Attribute.html) - [Demo](https://geraldotech.github.io/DevMap/JavaScript/assets/thread/create_get_remove_Attribute.html)
    - 2 [hasAttribute / setAttribute](./hasAttribute_setAttribute.html) - [Demo](https://geraldotech.github.io/DevMap/JavaScript/assets/thread/hasAttribute_setAttribute.html)
    - 3 [setAttribute_vs_classList and toggle()](./setAttribute_vs_classList.html) - [Demo](https://geraldotech.github.io/DevMap/JavaScript/assets/thread/setAttribute_vs_classList.html)
    - 4 [createElements_add_delete-App - TodoList](./createElements_add_delete.html) - [Demo](https://geraldotech.github.io/DevMap/JavaScript/assets/thread/createElements_add_delete.html)
    - 5 [createElements add delete template literal add assigment](./createElements_add_delete_template_literal_add_assigment.html) - [Demo](https://geraldotech.github.io/DevMap/JavaScript/createElements_add_delete_template_literal_add_assigment.html)

    </details>

- WebAPIs
  - Element: [nextElementSibling](#nextelementsibling)

<hr>

&nbsp;

&nbsp;

&nbsp;

## DOM - Events

- HTML DOM Events Attribute: `on + event_name` [DOM - Attributes](https://www.w3schools.com/tags/ref_eventattributes.asp)
- JS Event: `addEventListener("event", function(e){...})` - [DOM - Events](https://www.w3schools.com/jsref/dom_obj_event.asp)

> > mais comuns

- click | onclick
- change | onchange
- mousemove | onmousemove
- mouseover | onmouseover
- mouseleave | onmouseleave
- keypress | onkeypress
- input | oninput
- error | on..

  - ### onclick

```js
;<form name="credito">credito</form>

document.credito.onclick = function (event) {
  console.log(event)
}

//onclick Event and target
document.credito.onclick = function (event) {
  console.log(event.target) // <form name="credito">credito</form>
}
// call fun with addEvent...
input.addEventListener('click', handler)

// call fun with on[event]...
input.onclick = handler

// call fun and get Obj event[e]
btn.onclick = headerx

function headerx() {
  console.log(`click`, event)
}
function headerx(e) {
  console.log(`click`, e)
}
```

- get PointerEvent e.g simples, outros consultar a page README
- formas de chamar uma function com `onclick`

```js
<button onclick="btn()">btn1</button>
<button id="btn2">btn2</button>
<button name="btn3">btn3</button>

//onclick in html
function btn(){
  alert("hello");
}

//direct
const btn2 = document.getElementById("btn2").onclick = function (){
  alert("hello");
}

//button name
const btn3 = document.querySelector("button[name='btn3']");
btn3.onclick = function (){
  alert("hello");
}

//inline
<button onclick="console.log(`gge`)">gge</button>
//chama o javascript sem reload page
<a href="javascript:console.log('javascript')">Link</a>
<a    id="color"
      href="javascript:void(document.getElementById('color').style.backgroundColor = `green`)">Color</a>

  <button onclick="document.getElementById(`res`).textContent = `okay`">
      Okay
    </button>
```

- ### addEventListener

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

- ### addEventListener with event.target

```js
;<p id="bar">TypeScript</p>

//👉addEventListener: click -  target
document.getElementById('bar').addEventListener('click', function (event) {
  console.log(event.target) //  <p id="bar">TypeScript</p>
})

//👉addEventListener: input - captura o input em realtime
document.querySelector('input').addEventListener('input', function (e) {
  console.log(e)
})
//👉addEventListener: change
document
  .querySelector("input[type='checkbox']")
  .addEventListener('change', function (e) {
    console.log(e)
  })

console.log(event.target.id) //bar
console.log(event.target.getAttribute('data')) //eu
console.log(event.target.value) //only for input radio/checkbox
```

## [DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event)

A documentação diz que o event `fires` when o HTML foi completamente loaded and parsed "carregado e analisado" sem esperar por stylesheets, images ou subframes.

- Basic usage

```js
window.addEventListener('DOMContentLoaded', function () {
  console.log(this)
})

document.addEventListener('DOMContentLoaded', function () {
  console.log(this)
})
```

- Então usando DOMContentLoaded podemos add um conteúdo na DOM que sem defer retornaria um erro. [live example](https://gmapdev.netlify.app/docs_demo/DOMContentLoaded/eg1/ContentLoaded.html)

- Partindo desse princípio eu fiz 2 scripts, um _*main.js*_ com attr `defer` que cria 2 elementos HTML com id usando _`createElement`_ em fim... O segundo script _`content.js`_ deve alterar os valores criados pelo primeiro script.
  [live example](https://gmapdev.netlify.app/docs_demo/DOMContentLoaded/eg2/ContentLoaded.html)

Ordem de declaração:

```js
<script src="main.js" defer></script>
<script src="content.js"></script>
```

content não precisa de defer pq estamos usando `document.addEventListener("DOMContentLoaded"` que vai chamar a func que vai sobreescrever os valores do primeiro script.

- Considerações se o content.js não tivese o DOMContentLoaded e fosse atribuído o defer, matendo a ordem dos scripts, obviamente o resultado seria o mesmo.

# onload vs onreadystatechange vs DOMContentLoaded

```js
//who is faster ?

//3
window.onload = function () {
  console.warn('window loaded')
}

//2
document.onreadystatechange = function (e) {
  console.warn('document.onready', document.readyState)
  console.log(document.readyState == 'complete')
}

//1
document.addEventListener('DOMContentLoaded', () => {
  console.warn('DOM Loaded')
})
```

# PointerEvents

```js
;<p id="bar">TypeScript</p>

document.getElementById('bar').addEventListener('click', function (event) {
  console.log(event) //check output on console
})

//👉PointerEvent usando `var` não precisa do event(e).target pode chamar a const direto
;<p id="bar">TypeScript</p>
const p = document.getElementById('bar')
p.addEventListener('click', function (e) {
  console.log(p.id) //bar
})
```

- Target custom Attr
  <a id="target-custom-attr-data"></a>

  [Data](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

  - [data] and [itemtype]

```js
//👉 Target "data";
;<p id="bar" data="eu">
  TypeScript
</p>

//js
const p = document.querySelector('p')

console.log(p.getAttribute('data')) //eu
console.log(e.target.getAttribute('data')) //eu
console.log(e.target.attributes.data.value) //get value of Attr data

//👉 e.Target "itemtype";
;<li class="menu" itemtype="tip">
  Steak
</li>
console.log(e.target.attributes.itemtype.value) //tip
```

- Target vs currentTarget
  <a id="target-vs-currenttarget"></a>

```js
;<ul>
  <li>A</li>
  <li>B</li>
  <li>C</li>
  <li>Z</li>
</ul>

const el = document.querySelector('ul')
el.addEventListener('click', function (e) {
  console.log(e.currentTarget) // <ul>
  console.log(e.target) // <li>
})
```

- Contains
  <a id="contains"></a>

  - <a href="https://codepen.io/geraldopcf/pen/yLKZROJ" target="_blank">CodePen</a>

  - [contains-e-target.html](./contains-e-target.html)
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
  var mydiv = document.getElementById('mydiv')

  document.addEventListener('click', function (e) {
    var inside = mydiv.contains(e.target)
    if (inside) {
      alert('click inside')
    } else {
      alert('click outsite')
    }
  })
  ```

# Learn DOM Manipulation

- [MORE in Learn-DOM-Manipulation](https://github.com/geraldotech/DevMap/blob/main/JavaScript/assets/thread/Learn-DOM-Manipulation/main.js)

- ### Get a Element by ID direct way:

Todo ID declarado no document é elevado ao scopo global, então é possível chamar diretamente:

```js
;<div id="fibra">Speed</div>

console.log(window.fibra) // div#fibra
console.log(fibra) // div#fibra - todos os outros objetos acessíveis pelo espaço global
```

apesar de funcionar prefira a boa pratica na page README em <ins>getElements and querySelector</ins>

//👉 Get html content

```js
;<p id="foo">JavaScript</p>
const p = document.getElementById('foo')
console.log(p) //check output on console
```

- ### createElement, createTextNode, textContent, append vs appendChild

  <a id="domcreateel"></a>

```js
https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment
// const fragment = new DocumentFragment()

// fragment
const ul = document.getElementById("ul"); // assuming ul exists

const fragment = document.createDocumentFragment();
const browsers = ["Firefox", "Chrome", "Opera", "Safari"];

browsers.forEach((val) => {
    const li = document.createElement('li')
    li.textContent = val
    fragment.appendChild(li)
})

ul.appendChild(fragment)

// [createElement] - create div and img

const div = document.createElement('div')
const img = document.createElement('img')
img.setAttribute(
'src',
'http://smartdicastutorial.appspot.com/images/6d88733c461.jpg'
)
img.setAttribute('alt', 'img test')
// [appendChild]
div.appendChild(img)

// appendChild body
document.body.append(div)

// Images 2 Template Alternative click to create
const btn = document.querySelector('button')
btn.onclick = function () {
root.innerHTML += `<img src="http://smartdicastutorial.appspot.com/images/6d88733c461.jpg"/>`
}

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
                'Google Logo');">Add Google Logo</button>
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


// Using cloneNode
const parent = document.createElement('div')

const p = document.createElement('p')
p.textContent = 'one'
const p2 = p.cloneNode(true)
const p3 = p.cloneNode(true)
const p4 = p.cloneNode(true).textContent = 'Four'

p2.textContent = 'Hey soul'
p3.textContent = 'Hey soul 2'

parent.append(p, p2, p3, p4)
document.body.appendChild(parent)


// function to append
// https://dev.to/kiumad/can-you-appendchild-same-element-multiple-times-in-js-probably-not-4j
const parent = document.createElement('div')
const txt = '<p></p>'

function appendChildMultiple(parent){
    const ptag2 = document.createElement('p')
    ptag2.innerText = 'Adicionado'
    return parent.appendChild(ptag2)
}

function appendChildMultiple2(parent){
    const ptag = document.createElement('p')
    ptag.textContent = parent.textContent
    return parent.appendChild(ptag)
}

appendChildMultiple(parent)
appendChildMultiple2(parent)
document.body.append(parent)

```

# nextElementSibling

- [Example using nextElementSibling](https://codepen.io/gmapdev/pen/wvRNLeL)

```html
<div>
  <h1>Hello</h1>
  <p>lorem</p>
</div>
<p>Its me</p>

<ul>
  <li>1</li>
  <li class="target">2</li>
  <li>Anti Hero</li>
  <li>4</li>
</ul>
```

```js
const div = document.querySelector('div')
console.log(div.nextElementSibling) // <p>Its me</p>

const target = document.querySelector('ul .target') // <p>This me</p>
console.log(target.nextElementSibling) // <li>Anti Hero</li>
```
