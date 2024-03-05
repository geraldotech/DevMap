# JavaScript

:rocket: :zap: Let's Code :zap: :rocket:

> Memorize is a bad ideia, instead focus on concepts

## Threads

- [JavaScript-DOM.md](./assets/thread/JavaScript-DOM.md)
- [JavaScript-DOM2.md](./assets/thread/JavaScript-DOM-2.md)

## Cheats and examples

- [render_table.html](./assets/thread/render_table_json.html) - <a href="https://geraldotech.github.io/DevMap/JavaScript/assets/thread/render_table_json.html" target="_blank">Demo</a>
- [Menu All Pages by `gmap`](./assets/thread/Menu_All_pages.md)
- [childNodes.html](./assets/thread/childNodes.html)
- [List Directories](./assets/thread/List_directories)

<details>
<summary>Quick Tips</summary>

```js
parseInt('1') + // 1
  '1' // 1

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

console.log(isNumber('213'))
console.log(isNumber('whatever'))
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

### syntax / sintaxe

```js
semicolon - ;
comma - ,
parentheses - ()
curly braces {} - chaves
square brackets [] - colchetes
backtick - `
ampersand - &
```

### multiple var/let/const

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

## Links:

### Diferença entre alguns operadores lógicos (Logical Operators)

| SINAL |         TIPO         |
| :---: | :------------------: |
|   =   |      atribuição      |
|  ==   |    compara valor     |
|  ===  | compara valor e tipo |

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

## Videos

- [Stop Trying To Memorize Code - Do This Instead](https://www.youtube.com/watch?v=vP2MNhC_Igw&list=PL_VP_qub8HfIva3X7o4FbRqoqg9K-s8z4&index=1)
- [Learning Functional Programming with JavaScript](https://www.youtube.com/watch?v=e-5obm1G_FY)
