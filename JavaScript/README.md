# JavaScript

:rocket: :zap: Let's Code :zap: :rocket:

> Memorize is a bad ideia, instead focus on concepts

# Threads
### Starter JavaScript? **From Scratch by _Geraldo Filho_**

- [O que é JS](#what-is-javascript)
- [console.log](#consolelog)
- [syntax](#syntax)
- [multiplevar/let/const](#multiple-var-let-const)
- [Immutability](#Immutability)
- [Operadores lógicos (Logical Operators)](#operadores)
- [window-and-document](#window-and-document)
  - [window](#window)
    - [onbeforeunload.html](./onbeforeunload.html)
  - [document](#document)
- [Script location - Boolean Attrs](#local-do-script)
- [javascript:void(0)](#javascriptvoid0)
- <a href="./Operadores-Atribuicao.md" target="_blank">Operadores Atribuicao</a>
- [CSS Object Model](./CSSOM/README.md)
- <a href="https://geraldotech.github.io/DevMap/JavaScript/assets/thread/Addition_assignment.html" target="_blank">Addition assignment (+=)</a>
- [useful-links](#useful-links)

<hr>

## Advanced

- [Input - Forms](./input/forms.md)
- [DOM events](#dom---events)
  - [onclick](#onclick)
  - [onload](./assets/thread/onload_goTop.js)
  - [addEventListener](#addeventlistener)
  - [addEventListener and event.target](#addeventlistener-with-target)
  - [DOMContentLoaded](#domcontentloaded)
  - [onload vs onreadystatechange vs domcontentloaded](#onload-vs-onreadystatechange-vs-domcontentloaded)

- [Pointer Events](#pointerevents)
  - [this](./assets/thread/this.md)
  - [target custom attribute data](#target-custom-attr-data)
  - [target vs currenttarget](#target-vs-currenttarget)
  - [Contains (e.target)](#contains 'e.target')
  - [currentTarget_background_SVG.html](https://geraldotech.github.io/DevMap/JavaScript/assets/thread/currentTarget_background_SVG.html)
  - [visibilityState](./assets/thread/visibilityState/index.html)
  - [e.currentTarget.parentElement.querySelector('code')... and firstChild](https://github.com/geraldotech/DevMap/blob/main/JavaScript/Clipboard/copy-snippet/src/main.js)
- <a href="https://github.com/geraldotech/DevMap/tree/main/TypeScript#hoisting" target="_blank">Hoisting</a>

- [Web Components](./assets/thread/Web-Components)
- [Regex - Expressões Regulares](./assets/thread/Regex/README.md)

  - [getElementById {direct way}](#get-a-element-by-id-direct-way)
  - [createElement, createTextNode, textContent, append vs appendChild](#domcreateel)
  - [getElement[id,class,tagName,byName] and QuerySelector](./assets/thread/getElements_idClasstagNameQuerySelector.md)

    <details>
    <summary>getAttributes, createElement, set, has, remove...classList.add.contains, Template Strings</summary>

    - 1 [createAttribute, getAttribute, removeAttribute](./assets/thread/create_get_remove_Attribute.html) - [Demo](https://geraldotech.github.io/DevMap/JavaScript/assets/thread/create_get_remove_Attribute.html)
    - 2 [hasAttribute / setAttribute](./assets/thread/hasAttribute_setAttribute.html) - [Demo](https://geraldotech.github.io/DevMap/JavaScript/assets/thread/hasAttribute_setAttribute.html)
    - 3 [setAttribute_vs_classList and toggle()](./assets/thread/setAttribute_vs_classList.html) - [Demo](https://geraldotech.github.io/DevMap/JavaScript/assets/thread/setAttribute_vs_classList.html)
    - 4 [createElements_add_delete-App - TodoList](./assets/thread/createElements_add_delete.html) - [Demo](https://geraldotech.github.io/DevMap/JavaScript/assets/thread/createElements_add_delete.html)
    - 5 [createElements add delete, template literal add assigment](./assets/thread/createElements_add_delete_template_literal_add_assigment.html) - [Demo](https://geraldotech.github.io/DevMap/JavaScript/assets/thread/createElements_add_delete_template_literal_add_assigment.html)
    - 6 [Template Strings vs createElement](./assets/thread/TemplateStrings_vs_createEl.html) - [Demo](https://geraldotech.github.io/DevMap/JavaScript/assets/thread/TemplateStrings_vs_createEl.html)

    </details>
- [Learn-DOM-Manipulation](./assets/thread/Learn-DOM-Manipulation/)
- WebAPIs
  - Element: [nextElementSibling](#nextelementsibling)
  - parentElement: [parentElement](#parentElement)
  - eventtargetclosestclass: [eventtargetclosestclass](#eventtargetclosestclass)

### Cheats and examples

- [render_table.html](./assets/thread/render_table_json.html) - <a href="https://geraldotech.github.io/DevMap/JavaScript/assets/thread/render_table_json.html" target="_blank">Demo</a>
- [Menu All Pages by `gmap`](./assets/thread/Menu_All_pages.md)
- [childNodes.html](./assets/thread/childNodes.html)
- [List Directories](./assets/thread/List_directories)


<hr>

&nbsp;
&nbsp;
&nbsp;
&nbsp;

### What is JavaScript?

<details>
<summary>open content</summary>

É uma linguagem de programação de alto nível que manipula o DOM - Document Object Model do HTML.

<div align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1200px-DOM-model.svg.png" style="width: 40%">
</div>

</details>

## console.log

Permite executar `snippets of code` no navegador, muito usado para testar a saída de códigos, o mais usado é o .log porém existem outros.

e.g básico

```js
const person = [{ nome: 'Geraldo', age: 30 }]

console.warn(person) //warning
console.log(person) //log
console.dir(person) //disclosure direto ao ponto, melhor para leitura
console.table(person) // beautiful way to render tables
```

- <a href="https://developer.mozilla.org/en-US/docs/Web/API/console" target="_blank">Todos os tipos de consoles</a>
- <a href="./Consoles">Consoles by GP</a> - [Demo](https://geraldotech.github.io/DevMap/JavaScript/assets/thread/Consoles/index.html)
- <a href="./Consoles">CSS no console.log</a> - [DevTO](https://dev.to/annlin/consolelog-with-css-style-1mmp) | [MDN](https://developer.mozilla.org/en-US/docs/Web/API/console)


## window and document

<div align="center">
<img src="./img/BkAjU.jpg" alt="example" style="width:50%">
<img src="http://www.cs.ucc.ie/~gavin/javascript/05_img01.gif" alt="" style="width:70%"/>

[fonte img](http://www.cs.ucc.ie/~gavin/javascript/05_JS4.html)

</div>

<hr>
- <a href="https://codepen.io/geraldopcf/pen/jOKNwyM" target="_blank">_representação que fiz no CodePen</a>

## window

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window)

- window = interface global que contém o #document "DOM", BOM "Browser Object Model" window e o JavaScript e seus objetos, Arrays, functions... Primeira coisa que começa a ser carregada, a função alert() originalmente pode ser chamada por como window.alert()

  👉[img eg](https://javascript.info/article/browser-environment/windowObjects.svg)

- É incomum chamar o window, basta chamar o nome do object ou função, exemplos são apenas para contextualizar o conceito do window e suas propriedades.

```js
window;
console.log(window.document) // #document
console.log(window.window); //same input
console.log("height",window.innerHeight, "Width",window.innerWidth);
console.log(window) - display all objects in window | digite `window` diretamente no console do browser
console.log(fetch === window.fetch) // true
window.onclick === onclick // true
window.localStorage;
window.console.log same | console.log
window.screen.height
window.innerHeight
window.innerWidth
window.open(); // abre nova janela - 3 params opcionais
              - syntax //👉 https://developer.mozilla.org/en-US/docs/Web/API/Window/open#syntax
              -  open("https://developer.mozilla.org/", "_blank", "width=500, height=300");
              //open window + write text
              - open("", "", "width=500, height=300").document.write("JS");
              - open("js.html", "", "width=500, height=300");
window.prompt() // get prompt text
window.print();
window.confirm();
window.location - vai retornar uma lista de objetos, algums são:
                - .pathname
                - .href 👉 "new url to redirect"
                - .reload() 👉 "reload page"
window.onload = function (){...}
window.onresize = function(){...}
//tudo que acompanhar nome + parênteses() são funções nativas, você também pode criar as suas.
```

<hr>

> > e.g Using window.location to get current url

```js
;<a id="link"></a>

/* using attr */
link.href = `${window.location}/img/2022/#/file.zip`
link.innerHTML = `${window.location}/img/2022/download-now`
```

## document

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document) => [MDN - DOM tree](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core)

- document - contains the DOM represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.

```js
console.dir(document) //#document Why .dir ? https://developer.mozilla.org/en-US/docs/Web/API/console/dir
console.log(document) //#document
```

- Para manipular o DOM, precisamos "falar" com os elementos, pegando o valor atual ou definindo um novo valor começamos por:

`window.document.<something>` ou apenas `document.<something here>` ou

- From scratch vamos falar com object global ROOT do DOM:
  **rootElement**:

```js
 //  HTML objects
- document; // #document
- document.documentElement // #rootElement
- document.querySelector(':root') // #rootElement
- document.head;
- document.body;
- document.body.style.zoom="150%"
- document.URL;
- document.lastModified;
- document.title; // currently value
- document.title = "new title"; // set new value for title
- document.write("gmap"); // write text in DOM
- document.domain
- document.URL
- document.all
- document.styleSheets //return a list of stylesheets
- document.querySelector === window.document.querySelector // true

- ❌document.onload 👉 document.body.onload ✔ {with defer}
```

Mais propriedades e a versão do DOM em que foram adicionadas:

- [properties and JS events methods | js_htmldom_document.asp](https://www.w3schools.com/js/js_htmldom_document.asp)

Aqui o uso de da palavra <span style="color:red">document é required</span>, exemplo usando uma função do `window` com `document`, vai abrir nova janela e escrever o texto.

```js
function abrenovaJanela() {
  open().document.write('oi')
}
```

<hr>

# Local do script

- Na header será carregado antes do DOM o que pode causar erros, a menos que defina o `defer`
- Final do body vai carregar quando praticamente todo DOM tiver siado loaded e parsed
- Boolean [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)

  - defer

  Attribute set para o browser que o script vai ser executado depois que o document foor parsed "analisado", ou seja o script é carregado em background.

  ```js
  <script
    src="main.js"
    defer></script>
  ```

  - async

  ```js
  <script
    src="content.js"
    async></script>
  ```

  - normal [=== parse going on DOM ===] => "fetch script" => "executa script" => [=== continua parse DOM ===]
  - async [=== parse going on DOM ===] => "fetch script" => [=== "executa script" em sincronia com o parse DOM que ainda acontece ===] => [=== continua parse DOM ===]
    the async não garante a ordem de executação do script
  - defer [=== parse going on DOM ===] "fetch script" => [continua *parsing DOM" => "completou parse DOM]"] => executa script
    [video ajuda](https://www.youtube.com/watch?v=IrHmpdORLu8)

<hr>

# javascript:void(0)

[\_javascript-void-0-em-javascript](https://www.freecodecamp.org/portuguese/news/o-que-significa-o-javascript-void-0-em-javascript/)

Evita o reload da página e chama uma function caso houver

```js
;<a
  href="javascript:void(0)"
  onclick="openInNewTab(`http://google.com`)">
  Google
</a>

function openInNewTab(url) {
  open(url, '', 'width=500, height=300')
}

//by geraldoX null works too
;<a
  href="javascript:null"
  onclick="openInNewTab()">
  Link
</a>
//works but add a hash on url This is bad!
;<a
  href="#"
  onclick="openInNewTab(`http://google.com`)">
  G
</a>
```

<details>
<summary>Quick Tips</summary>

```js
//👉 parseInt
console.log(parseInt('1')) // 1

//👉 +
console.log(+'1') // 1

//👉 Number
let x = '60'
let xconverted = Number(x)
console.log(typeof xconverted)

//👉 is NaN
isNaN('ge') // true
isNaN(5) // false

// Make a FN

function isNumber(n) {
  const toNumber = parseInt(n)
  if (!isNaN(toNumber)) {
    return 'Its a number'
  }
  return 'Not a number'
}

console.log(isNumber('213')) // 'Its a number'
console.log(isNumber('whatever')) // 'Not a number'

//👉 repeat
let repeatedString = 'hello '.repeat(3)
console.log(repeatedString) // Output: 'hello hello hello '

//👉  hipotenusa
console.log(Math.hypot(3, 4))
```

</details>

<details>
<summary>Concatenação, Interpolação, Template-literals and syntax</summary>
From scratch aspas 'simples' ou "dupla" tanto faz, contudo dependendo do cenário há algunas peculiaridades

```js
console.log("I'm Geraldo")
console.log("I'm Geraldo") // precisa usar a barra invertida \

//📌descatar palavra
console.log('TypeScript é uma "linguagem" de programação')
console.log('TypeScript é uma "linguagem" de programação')

console.log("It's a new game")
//📌usando barra
console.log("It's a new game")
console.log("TypeScript é uma 'linguagem' de programação")

//alguns e.g via https://blog.matheuscastiglioni.com.br/string-em-javascript-com-aspas-simples-ou-duplas/
```

```js
let name = "Geraldo";
console.log("Eu sou", name);

// Concatenando - operador +
console.log('Eu sou ' +name);
console.log("Eu sou " +name);
console.log("Eu sou " +name + 'e tenho ' + age + ' anos');

// ES6 template string - [Template-literals](https://css-tricks.com/template-literals/)
console.log(`grace accent ${name} and ${age}`);  // interpolation sem concatenação

("Ola") apenas no console.log show infos F12

//converter valores em string - consulte toString() nesse README ou String(n) em https://ricardo-reis.medium.com/strings-dd656f371ff3

/*
Comparando strings e numbers
Para comparar duas strings, use os operadores > , >= , < , <= e ==.
*/
console.log("a" < "A"); //false
5 * 5 == 25 // true
5 * 5 < 30 // true
```

### syntax

```js
semicolon - ;
comma - ,
parentheses - ()
curly braces {} - chaves
square brackets [] - colchetes
backtick - `
ampersand - &
```

### multiple var let const

```js
//ES6
let [cont, start] = [0, 10]
let = [name, age] = ['Geraldo', 30]

let a, b
a = 4
b = 3
console.log(a + b)

const rua = 'a',
  cidade = 'b',
  sim = 'sd'

// old
var eu = 'Ge',
  filho = 'a',
  agr = 'now'
console.log(eu, filho, agr)
```

</details>

<details>
<summary>onclick update variable</summary>

```js
//html
  <button onclick="add()">Add</button>
  <span id="num"></span>

//js
let sum = 0;
let num = document.getElementById("num");
function add(){
  sum = sum +1;
  num.innerHTML = sum; //update variable
}

//short by gmap
let start = 0;
function add(){
document.getElementById("num").innerHTML = start = start +1;
// ou usar++ document.getElementById("num").innerHTML = start++;
}

//short by gmap recuperando o valor da var diretamente no DOM succinct way

const add = () => {
let num = document.getElementById("num");
num.innerHTML = +num.innerHTML + 1;
//num.innerHTML = parseInt(num.innerHTML) +1;
}

// this
  <p style="cursor: pointer">0</p>
document.querySelector("p").onclick = function () {
  this.innerHTML = +this.innerHTML + 1;
};

// eg2
<button onclick="UpOrDown(false)">Down</button>
<button onclick="UpOrDown(true)">Up</button>
<div id="res"></div>

const res = document.querySelector('#res')
let counter = 0

function UpOrDown(val) {
  if (counter > 9) {
    return false
  }
  val ? counter++ : counter--
  res.textContent = counter
}

// start showing var numer
res.textContent = counter

```

</details>

<details>

### Immutability

<summary>Immutability</summary>

[immutability.html](https://geraldotech.github.io/DevMap/JavaScript/assets/immutability.html)  
[immutability.js](./assets/string_immutability.js)

</details>

<details>
<summary>JS Shorhand</summary>

```js
//shorhand
const get = function (id) {
  return document.getElementById(id)
}
const query = function (id) {
  return document.querySelector(id)
}

//
const log = function (...id) {
  console.log(id)
}
//
const l = (...a) => console.log(a)
//
const log = console.log.bind(document)
log(5 + 5, 'hello')

input = query('input')
input.addEventListener('input', function () {
  const str = +this.value
  console.log(str.toString(16))
  get('res').innerText = str.toString(2)
  get('hex').innerText = str.toString(16)
})

// Shorhand for getElementById

//function
const get = function (id) {
  return document.getElementById(id)
}
get('root').textContent = 'Hello World!'

//arrow function
const get2 = (a) => {
  return document.getElementById(a)
}
get2('root')

const log = (x) => {
  console.log(x)
}
```

</details>

</details>

<details>
<summary>insertAdjacent, insertCSS</summary>

```html
<h1 id="foo">hello</h1>
<hr />
<h1 id="el">Element</h1>
<hr />
<footer
  id="vue"
  style="color:red">
  <p>footer</p>
</footer>
<button onclick="document.getElementById('el').insertAdjacentElement('afterbegin', document.getElementById('vue'))">Move</button>
<!--inline hardcore-->
```

```js
/*
insertAdjacentHtml() is used to insert html code.
https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
dependendo da posição pode herdar os attributes!

<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/

const foo = document.getElementById('foo')
foo.insertAdjacentHTML('beforebegin', '<b>Hiii</b>')
foo.insertAdjacentHTML('beforeend', '<b>Hiii</b>')

/*
insertAdjacentElement() is used to insert an element which is already in the DOM. You can get this element with getElementById() for example.
*/
//move footer to

function moveel() {
  const vue = document.getElementById('vue')
  document.getElementById('el').insertAdjacentElement('afterbegin', vue)
}
```

```js
// Write css inside JavaScript 1.0
document.head.innerHTML += `
    <style>
      img{ 
        width: 20%;
      }
      div{
       display: flex;
       height: 100vh;
       justify-content: center;
       align-items: center;
       flex-direction: column;
      }
    </style>
    `

//2.0
const style = document.createElement('style')
style.textContent = 'h1 { background-color: red; }'
document.head.appendChild(style)

//3.0 - external
document.head.insertAdjacentHTML('beforeend', '<link rel=stylesheet href=/foo.css>')
```

</details>

### Operadores lógicos (Logical Operators)

### operadores

| SINAL |         TIPO         |
| :---: | :------------------: |
|   =   |      atribuição      |
|  ==   |    compara valor     |
|  ===  | compara valor e tipo |


<hr>

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


// html
<div id="instance1" data-code="x">A</div>
<div id="instance2" data-code="y" data-test='1212'>B</div>

// js


// chave de ids
const instacens = [1,2,3]
instacens.forEach((id) => { 
const div = document.querySelector(`#instance${id}`)
// Check if the element exists
if(div){
div.addEventListener('click', function(){

  if(event.target.dataset.test){
  console.log(event.target.dataset.test)
  }
  //console.log(event.target.attributes.data.value)
  })
}
})
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
document.querySelector("input[type='checkbox']").addEventListener('change', function (e) {
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

`content` não precisa de <ins>defer</ins> porque está definido com `document.addEventListener("DOMContentLoaded"` que vai chamar a func que vai sobreescrever os valores do `main.js`

- Considerações se o `content.js` não tivese o <ins>DOMContentLoaded</ins> e fosse atribuído o defer, matendo a ordem dos scripts, obviamente o resultado seria o mesmo.

# onload vs onreadystatechange vs DOMContentLoaded

> who is faster ?

```js
//1
document.addEventListener('DOMContentLoaded', () => {
  console.warn('DOM Loaded')
})
//2
document.onreadystatechange = function (e) {
  console.warn('document.onready', document.readyState)
  console.log(document.readyState == 'complete')
}
//3
window.onload = function () {
  console.warn('window loaded')
}
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
  - [DOMStringMap o `dataset` ](./Learn-DOM-Manipulation/DOMStringMap/)
  - [Use_data_attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

  - using [data] and [itemtype]

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

  //👉 attributes
  <div>normal div</div>
  <div include='valor'>div attribute</div>


  const div = document.querySelectorAll('div')
  console.log(div[0].attributes.length) // 0
  console.log(div[1].attributes.include.value) // valor

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
    style="width: 100px;height: 100px;background-color: blue;"></div>

  div { margin: auto; padding: 1em; max-width: 6em; background: rgba(0, 0, 0, .2); text-align: center; }
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

Todo ID declarado no <ins>document</ins> é elevado ao scopo global, então é possível chamar diretamente:

```js
;<div id="fibra">Speed</div>

console.log(window.fibra) // div#fibra
console.log(fibra) // div#fibra - todos os outros objetos acessíveis pelo espaço global
```

apesar de funcionar prefira a boa pratica na page README em <ins>getElements and querySelector</ins>

- 👉 Get html content

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

## nextElementSibling

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

- ## parentElement

```js
<div>
  <h1>Hello</h1>

  <button>button one</button>
  <p>foo</p>
</div>
<div>
  <h1>Hello 2</h1>

  <button>button two</button>
  <p>foo</p>
</div>


<label for="">
  <input type="checkbox" id="mycheck">
</label>



const btn = document.querySelectorAll('div') 

btn.forEach((val) =>
val.addEventListener('click', function (e) { 
  
console.log(e.target.parentElement)

const btn = e.target.parentElement.querySelector('button') // <div> </div>
console.log(btn.nextElementSibling) // <p>foo</p>

console.warn(event.target.closest('div') // <div> </div>
)
}) )

// closest and parentElement
const mycheck = document.querySelector('#mycheck')
mycheck.onchange = function(){
  console.warn(event.target.closest('label')) // <label></label>
  console.warn(event.target.parentElement) // <label></label>
}
```
- ##  event.target.closest('class')

https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
- quizItem has example



## Videos

- [Stop Trying To Memorize Code - Do This Instead](https://www.youtube.com/watch?v=vP2MNhC_Igw&list=PL_VP_qub8HfIva3X7o4FbRqoqg9K-s8z4&index=1)
- [Learning Functional Programming with JavaScript](https://www.youtube.com/watch?v=e-5obm1G_FY)

### Useful links:

- [HTML Objects | dom_obj_document.asp](https://www.w3schools.com/jsref/dom_obj_document.asp)
- [stackoverflow - windows vs document](https://stackoverflow.com/questions/9895202/what-is-the-difference-between-window-screen-and-document-in-javascript)
- [Evitando poluir o objeto-global](http://devfuria.com.br/javascript/objeto-global/)
- [https://en.wikipedia.org/wiki/DOM_events](https://en.wikipedia.org/wiki/DOM_events)

- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures">Data Structures</a>
- [table operadores comparação/lógicos] <a href="https://www.alura.com.br/artigos/operadores-matematicos-em-javascript" target="_blank">Alura </a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators">MDN</a>

- <a href="https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_clonenode2" target="_blank">\_cloneNode(true)</a>
- <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math#arithmetic_operators" target="_blank">Arithmetic operators - Operadores matemáticos</a>
- <a href="https://devhints.io/es6" target="_blank">\_devhints.io/es6</a>
- <a href="https://ricardo-reis.medium.com/try-catch-tratando-erros-no-javascript-91bcce0b93ae" target="_blank">Try catch - nice article</a>
- <a href="https://www.base64encode.org/">base64encode.org</a>
- <a href="https://twitter.com/ATechAjay/status/1606115109842976768">XOX operator</a>
- [Nice articles: https://bobbyhadz.com/blog/](https://bobbyhadz.com/blog/)
- [Sobre map](https://www.freecodecamp.org/portuguese/news/como-usar-colecoes-em-javascript-map-e-set/)
