# JavaScript
:rocket: :zap: Let's Code :zap: :rocket:
>> Memorize is a bad ideia, instead focus on concepts

Projects and Demos: [https://gmapdev.netlify.app/](https://gmapdev.netlify.app/)

### O que é JavaScript?    
- **From Scratch by _Geraldo Filho_** 
[onclick.open"JavaScript-DOM.md"](./assets/JavaScript-DOM.md)  
### Estrutura de dados  
- [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures)

## Extra Fast Code Cheats and examples

<details>
<summary>Display vars, strings and syntax</summary>

```js
let name = "Geraldo";
console.log("Eu sou", name);
console.log("Eu sou " +name);
console.log(`grace accent ${name}`);
console.log('Eu sou ' +name);

("Ola") apenas no console.log show infos F12

```
### syntax / sintaxe

```js
semicolon ;
comma ,
parentheses()
braces {} - chaves
square brackets [] - colchetes
```


### multiple var/let/const

```js
//ES6
let [cont,start] = [0, 10];

let a,b;
a = 4;
b = 3;
console.log(a + b)

const 
rua = "a",
cidade = "b",
sim = "sd"

// old
var eu = "Ge"
, filho = "a"
, agr = "now"
console.log(eu, filho, agr);

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
}

//short by gmap recuperando o valor da var diretamente no DOM succinct way

const add = () => {   
let num = document.getElementById("num");
num.innerHTML = +num.innerHTML + 1;
//num.innerHTML = parseInt(num.innerHTML) +1;
}
```
</details>

<details>
<summary>Immutability</summary>

[immutability.html](https://geraldotech.github.io/DevMap/JavaScript/assets/immutability.html)  
[immutability.js](./assets/string_immutability.js)
</details>

<details>
<summary>Math. padStart, padEnd</summary>

```js
Math //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
//recomendo ler http://devfuria.com.br/javascript/numeros-aleatorios/
Math.round = arredonda para cima ou para baixo
Math.ceil = arredonda sempre para cima
Math.floor = arredonda para baixo
Math.pow(2,16)
 function po(a,b){
         return console.log(Math.pow(a,b));
     }

//gerar números randômicos
Math.random();
Math.floor(Math.random() * 10); // 0 - 10
Math.floor(Math.random() * 5 +1); // 0 - 5

Math.PI

//📌Math.max() returns the number with the highest value:
const a = [1,2,3,4];
console.log(Math.max(...a));

const ages = [12, 3234, 54, 34];
console.log(Math.max(1, 2, 3, 4)); //4
console.log(Math.max(ages)); // NaN
console.log(Math.max(...ages)); //3234

//📌usando apply:null
const num = [1,2,3,4];
console.log(Math.max.apply(null, num));


/*
padStart - define o tamanho minimo, e adiciona um complemento caso não tenha o mínimo
padStart or end se baseia em dois parâmetros:

- padLength 
- padString - opcional , suporta string/number
*/

let str = "1234".padStart(10,"*");
console.log(str);

let cpf = "083".padStart(11,0);
console.log(cpf);


// padEnd() e.g string truncada
let str2 = "1234567".padEnd(10,"Hello");
console.log(str2);

//show-loop-img-button-click
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
      img.alt = alt;
  
      // This next line will just add it to the <body> tag
      document.body.appendChild(img);
  };

  ```
</details>

<details>
<summary>JS Shorhand</summary>

```js

 //shorhand
  const get = function (id) { return document.getElementById(id) };
  const query = function (id) { return document.querySelector(id) };
  const log = function (id) { return console.log(id) };

input = query("input");
  input.addEventListener("input", function () {
    const str = +this.value;
    console.log(str.toString(16));
    get("res").innerText = str.toString(2);
    get("hex").innerText = str.toString(16);
  });


// Shorhand for getElementById

//function
const get = function (id) {
  return document.getElementById(id);
};
get("root").textContent = "Hello World!";

//arrow function
const get2 = (a) => {
  return document.getElementById(a);
};
get2("root");

const log = (x)=> {console.log(x)};
```
</details>

<details>
<summary>document.forms - preventDefault</summary>
<a href="./assets/forms.md">forms.md</a>

</details>
<details>
<summary>addEventListener, Pointer Events, e.target, documentElement</summary>

```js
#simple
<p id="foo">JavaScript</p>
const p = document.getElementById("foo");
console.log(p); //check output on console

#PointerEvent direct
<p id="bar">TypeScript</p>
document.getElementById("bar").addEventListener("click", function(event){
    console.log(event); //check output on console
});

#PointerEvent const direct não precisa do event(e).target pode chamar a const direto

 <p id="bar">TypeScript</p>
const p = document.getElementById("bar");
p.addEventListener("click", function(e){
     console.log(p.id);  //bar
});

#caso o target tenha um custom Attr like "data";
 <p id="bar" data="eu">TypeScript</p>
console.log(p.getAttribute("data")); //eu
console.log(e.target.getAttribute("data")); //eu
console.log(e.target.attributes.data.value); //get value of Attr data

#caso o target tenha um custom Attr like "itemtype";
 <li class="menu" itemtype="tip">Steak</li>
 console.log(e.target.attributes.itemtype.value); //tip

#addEventListener: click -  target
document.getElementById("bar").addEventListener("click", function(event){
    console.log(event.target); //  <p id="bar">TypeScript</p>
});

#addEventListener: input - captura o input em realtime
 document.querySelector("input").addEventListener("input", function(e){
   console.log(e);
 });
#addEventListener: change
 document.querySelector("input[type='checkbox']").addEventListener("change", function(e){
   console.log(e);
 });

console.log(event.target.id); //bar
console.log(event.target.getAttribute("data")); //eu
console.log(event.target.value); //only for input radio/checkbox
 

#documentElement
document.documentElement.addEventListener("mousemove", function(e){
    console.log(e);
});

#documentElement
const rootElement = document.documentElement;
console.log(rootElement);

#eventListener_mouseMove
//html
<div id="OutDataX"></div>
<div id="OutDataY"></div>

//js
const get = (el) => {return document.getElementById(el)};
#addEventListener: mousemove

document.addEventListener("mousemove", function(event){
    console.log(event);
    get("OutDataX").innerHTML = `X: ${event.clientX}`;
    if(event.clientX === 50) alert('50!');
    get("OutDataY").innerHTML = `Y: ${event.clientY}`;
});

#target vs currentTarget

<ul>
      <li>A</li>
      <li>B</li>
      <li>C</li>
      <li>Z</li>
</ul>

const el = document.querySelector("ul");
    el.addEventListener("click", function(e){
      console.log(e.currentTarget);  // <ul> 
      console.log(e.target); // <li>
    });

```
</details>

<details>
<summary>createElement, createTextNode, appendChild</summary>

```js
# Basic texts

//createElements
div = document.createElement("div");
h1 = document.createElement("h1");
p = document.createElement("p");


h1.textContent = 'Hello ';
txt = document.createTextNode("JavaScript");

//append
p.appendChild(txt);
div.appendChild(h1);

//append body
document.body.appendChild(div);


# Images

//createElements
div = document.createElement("div");
img = document.createElement("img");
img.setAttribute("src", "http://smartdicastutorial.appspot.com/images/6d88733c461.jpg");
img.setAttribute("alt", "img test");

//append
div.appendChild(img);

//append body
document.body.appendChild(div);

# Images2 Template Alternative

   const btn = document.querySelector("button");
   btn.onclick = function(){
    re.innerHTML += `<img src="http://smartdicastutorial.appspot.com/images/6d88733c461.jpg"/>`
   }

//onclick classList
document.addEventListener('click', function(){
img.classList.add('meuimg');
});
```

</details>

<details>
<summary>Contains target</summary>
<a href="https://codepen.io/geraldopcf/pen/yLKZROJ" target="_blank">CodePen</a>

```html and css
<div id="mydiv" style="width: 100px;height: 100px;background-color: blue;"></div>

  div {
  margin: auto;
  padding: 1em;
  max-width: 6em;
  background: rgba(0, 0, 0, .2);
  text-align: center;
}

```

```js

var mydiv = document.getElementById("mydiv");

document.addEventListener("click", function(e){
    var inside = mydiv.contains(e.target);
    if(inside){
        alert("click inside");
    } else {
        alert("click outsite");
    }
});
```

```js
<section id="a">
   <div data="one">one</div>
      <br>
      <div data="two">two</div>
</section>

    <script>
   const section = document.getElementById("a");
   section.onclick = function(e){
     const getAttr = e.target.getAttribute("data");
     console.log(getAttr);  
    if(section.contains(e.target)) alert("Sou a section");
    //todo click dentrro da section vai ser alertado
   }
 </script>
```

</details>

<details>
<summary>toString, toFixed, toPrecision, toUpperCase, toLowerCase, parseInt, toLocaleString</summary>
<a href="https://codepen.io/geraldopcf/pen/PoRVXQB" target="_blank">CodePen</a>

```html
<h2>toString converter</h2>
   <form>
     <label for="number">Number:</label>
        <input type="number">
    </form>
    <div>Binary: <span id="res"></span></div>
    <div>Hex: <span id="hex"></span></div>
```

```js
//toFixed depois da virgula
console.log(Math.PI.toFixed(2)); // 3.14

//toPrecision
console.log(Math.PI.toPrecision(2)); //3.1

//toUpperCase and toLowerCase
let firtName = "Geraldo";
console.log(firtName.toUpperCase()); //GERALDO
console.log(firtName.toLocaleUpperCase()); //GERALDO

/*
The locale is based on the language settings of the browser.

Generally, this method returns the same result as the toLowerCase() method. However, for some locales, where language conflict with the regular Unicode case mappings occurs (such as Turkish), the results may vary.
*/

console.log(firtName.toLowerCase()); //geraldo
console.log(firtName.toLocaleLowerCase()); //geraldo

//toString
//https://linuxhint.com/javascript-tostring-method/
let age = 29;
console.log(typeof age); //number

let aget = age.toString();
console.log(typeof aget); //now is a string

// decimal to binary
(2022).toString(2); // '11111100110'

//parseInt binary to decimal
parseInt(1111, 2); // 15

//convert to base(2) binary
const ipnumber = [192,168,100,200];
let binary = ipnumber.map((value)=> value.toString(2));
console.log(binary) //[ '11000000', '10101000', '1100100', '11001000' ]

//Also support base(8) octal , base(16) hexadecimal

//Moedas
//https://franciscochaves.com.br/blog/formatacao-de-moedas-em-javascript
var atual = 600.00;
var saldo = 2000;

var f = atual.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
var g = saldo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
console.log(f); //R$ 600,00
console.log(g); //R$ 2.000,00

```
</details>

<details>
<summary>getAttributes,createElement ,set ,has ,remove...classList.add</summary>

- 1 [create_get_remove_Attribute](./assets/create_get_remove_Attribute.md) 
- 2 [hasAttribute_setAttribute](./assets/hasAttribute_setAttribute.md) 
- 3 [setAttribute_vs_classList_classToggle](./assets/setAttribute_vs_classList.md) 
- 4 [createElements_add_delete.html](./assets/createElements_add_delete.html)
- 5 [createElements_add_delete_template_literal_add_assigment](./assets/createElements_add_delete_template_literal_add_assigment.html)

</details>

<details>
<summary>JS/CSS zoom</summary>

```js
document.body.style.zoom="150%";

//css
body{    
  zoom:150%;
  }
```
</details>

<details>
<summary>Hoisting</summary>
<a href="https://github.com/geraldotech/DevMap/tree/main/TypeScript#hoisting" target="_blank">checkout this thread</a>

</details>

<details>
<summary>insertAdjacent, insertCSS</summary>

```html
 <h1 id="foo">hello</h1>
    <hr>
    <h1 id="el">Element</h1>
    <hr>
    <footer id="vue" style="color:red">
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

const foo = document.getElementById("foo");
foo.insertAdjacentHTML("beforebegin","<b>Hiii</b>");
foo.insertAdjacentHTML("beforeend","<b>Hiii</b>");

/*
insertAdjacentElement() is used to insert an element which is already in the DOM. You can get this element with getElementById() for example.
*/
//move footer to

function moveel(){
const vue = document.getElementById("vue");
document.getElementById("el").insertAdjacentElement("afterbegin", vue);
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
    `;

//2.0
const style = document.createElement("style");
style.textContent = "h1 { background-color: red; }";
document.head.appendChild(style);

//3.0 - external
document.head.insertAdjacentHTML(
  "beforeend",
  "<link rel=stylesheet href=/foo.css>"
);


```

</details>

<details>
<summary>getElement and querySelector</summary>
<br>
<a href="https://www.w3schools.com/js/js_htmldom_nodelist.asp" target="_blank">HTML Collection vs NodeList</a>

```js
<a href="#">link 1</a>
<a href="#">link 2</a>
<a href="#">link 3</a>
<a href="#">link 4</a>

<ul>
    <li class="menu">A</li>
    <li class="menu">B</li>
    <li class="menu" id="c">C</li>
    <span class="oi"></span>
    <span id="hello">New York</span>
</ul>


/* Array.from(document.getElementsByTagName("a")).forEach((el,ind) =>{
    console.log(ind,el.textContent)
}) */


//GetElementById:
document.getElementById("test"); //return only the id

//getElementsByTagName - 
console.log(document.getElementsByTagName("a")); //returns a HTML Collection[x] required a Array.from

//getElementsByClassName
const menu = document.getElementsByClassName("menu"); 
console.log(menu); //return a HTML Collection[x]  e.g menu[0].innerHTML = "Hello World!";

//Ainda temos o byName() https://www.w3schools.com/jsref/met_doc_getelementsbyname.asp
/*
Dica: Array.from convert HTML Collection to Array, manupulando todos os itens com forEach
*/

// querySelector
console.log(document.querySelector(".oi")); //return class
console.log(document.querySelector("#hello").innerHTML); //return id


// querySelector - selecionando input by name
<input type="text" name="one" placeholder="ola"/>
<input type="text" name="two" placeholder="hello"/>

const input = document.querySelector("input[name='one']");
console.log(input.placeholder); // ola

// querySelector selecionando button inside tags
<section>
  <button>btn inside section</button>
  <button data="btn2">btn number 2 inside section</button>
</section>

const btnSection = document.querySelector("section button");
console.log(btnSection.innerHTML); //"btn inside section"

// querySelector selecionando um segundo button inside tags, adicionar um "name" ou "data"
const sbtn = document.querySelector("section button[data='btn2']");
console.log(sbtn);
// querySelector selecionando class e tag dentro dessa classe
const el = document.querySelector(".secao span"); 
el.textContent = "novo";


// querySelectorAll - support forEach
console.log(document.querySelectorAll(".menu")); //return a NodeList()

const link = document.querySelectorAll("a"); //return all tags
console.log(link); //return a NodeList()

link.forEach(el => {
    el.classList.add("linkr");
  el.href = "http://technotesbr.blogspot.com";  
  el.setAttribute("target","_blank");
  el.setAttribute("title","open new tab");
});

// querySelectorAll - selecionando by index
<section>
  <span>[0]</span>
</section>

<section>
  <span>[1]</span>
</section>

document.querySelectorAll("section span")[1];

```
</details>

### Operadores Lógicos (Logical Operators 
| SINAL     | TIPO          |
| :---:       |   :---:         |
|   =       |   atribuição  |
|   ==      | compara valor |
|   ===      | compara valor e tipo |

- <a href="https://www.alura.com.br/artigos/operadores-matematicos-em-javascript" target="_blank">[read_more]_artigos/operadores-matematicos-em-javascript</a>
- <a href="https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_clonenode2" target="_blank">_cloneNode(true)</a>
- <a href="https://devhints.io/es6" target="_blank">_devhints.io/es6</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment" target="_blank">_ Addition assignment (+=)</a>

## Videos

- [Stop Trying To Memorize Code - Do This Instead](https://www.youtube.com/watch?v=vP2MNhC_Igw&list=PL_VP_qub8HfIva3X7o4FbRqoqg9K-s8z4&index=1)
- [Learning Functional Programming with JavaScript](https://www.youtube.com/watch?v=e-5obm1G_FY)



