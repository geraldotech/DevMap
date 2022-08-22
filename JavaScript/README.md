# Javascript

console.log('Focus in Javascript');

### O que é JavaScript? by Geraldo Filho

[onclick.open"JavaScript-DOM.md"](./JavaScript-DOM.md)


Projects and Demos
 - [https://gmapdev.netlify.app/](https://gmapdev.netlify.app/)


### write:

```js
console.log("aspas single");
console.log("aspas dupla");
console.log(`grace accent`);
```


### syntax / sintaxe

```js
semicolon ;
comma ,
parentheses()
braces {} - chaves
square brackets [] - colchetes
```

### Estrutura de dados

- [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures)

var não é usa mais! pq tem problema de scopo, use let ou const

## Extra Fast Code Cheats and Examples

<details>
<summary>how call string</summary>

```js
let name = "Geraldo";
console.log("Eu sou", name);
console.log("Eu sou " +name);
console.log(`Eu sou ${name}`)
console.log('Eu sou ' +name);]
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
```
</details>


<details>
<summary>Extras. Math. padStart, setTimeout, replace...</summary>

```js
Math.round = arredonda para cima ou para baixo

Math.ceil = arredonda sempre para cima

Math.floor = para baixo

Math.pow(2,16)

 function po(a,b){
         return console.log(Math.pow(a,b));
     }

Math.random()

Math.PI

Math.max() //returns the number with the highest value:
const a = [1,2,3,4];
console.log(Math.max(...a));

Math.max(1,2,3,4,5);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

//define o tamanho minimo, e adiciona um complemento caso não tenha o mínimo
padStart()

//
("Ola") apenas no console.log show infos
//
//
insertAdjacentHTML(position, text)
//
function exp(number){
	console.log(2** number);
}
exp(5,2);

//length
    function check(){
        let a = 10;
         if(a.length > 8) {
            console.log("maior que 8");
            return
         }
         console.log("menor que 8")
     }


//auto refresh
//5000 = milesegundos = 5seconds
window.setTimeout( function() {
  window.location.reload();
}, 5000);

//set zoom
document.body.style.zoom = "100%";

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
  }

//replace

let name = "gg";

let rpl = name.replace("gg","Felipe");
console.log(rpl)



//JSON.stringify change output
let a = '[[{"nome":"ISA"}]]';
console.log(a.replace(/["}{}[]|(])/g,"")); //nome:ISA

/*
https://www.w3schools.com/jsref/jsref_replace.asp
https://stackoverflow.com/questions/16576983/replace-multiple-characters-in-one-replace-call
*/

//CPF formatado
//https://stackoverflow.com/questions/18510845/maxlength-ignored-for-input-type-number-in-chrome
  <input type="number" id="test" onInput="this.value = this.value.slice(0, 11)"/>  

     document.querySelector("#cpf").addEventListener("input", show);
    function show (e){   
      const str = this.value.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4")
      console.log(str);
    }

  ```

</details>

<details>
<summary>Extras 2 - CSS and shorhand</summary>

```js
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

// Write css inside JavaScript

//1

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

//2
const style = document.createElement("style");
style.textContent = "h1 { background-color: red; }";
document.head.appendChild(style);

//3 - external
document.head.insertAdjacentHTML(
  "beforeend",
  "<link rel=stylesheet href=/foo.css>"
);
```

</details>

<details>
<summary>document.forms</summary>

```js
/*     
<form name="login">
<input type="text" name="username">
<input name="email" type="email">
<input type="button" value="Enviar" id="checkingUserName" />
</form> 
*/
//https://developer.mozilla.org/en-US/docs/Web/API/Document/forms
const forms = document.forms["login"];
forms.elements.email.placeholder = "test@example.com";
forms.elements.username.placeholder = "your login";

//getting data
document.getElementById("checkingUserName").onclick = function (event) {
event.preventDefault();
var name = document.forms["login"].username.value;
alert(name);
};
```
</details>
<details>
<summary>Pointer Events, target, documentElement</summary>

```js
#simple

   <p id="foo">JavaScript</p>
const p = document.getElementById("foo");
console.log(p)

#PointerEvent
 <p id="bar">TypeScript</p>

const t = document.getElementById("bar").addEventListener("click", function(event){
    console.log(event);
})

#target

const t = document.getElementById("bar").addEventListener("click", function(event){
    console.log(event.target); //  <p id="bar">TypeScript</p>
})

#documentElement
document.documentElement.addEventListener("mousemove", function(e){
    console.log(e);
})

#documentElement
const rootElement = document.documentElement;
console.log(rootElement);
```
</details>

<details>
<summary>createElement</summary>

```js
# Basic texts

//createElements
div = document.createElement("div");
h1 = document.createElement("h1");
p = document.createElement("p");


h1.textContent = 'Hello ';
txt = document.createTextNode("JavaScript");

//append
p.appendChild(txt)
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

# Images2

//createElements
div = document.createElement("div");
img = document.createElement("img");
img.setAttribute("src", "http://smartdicastutorial.appspot.com/images/6d88733c461.jpg");
img.setAttribute("alt", "img test");

//append
div.appendChild(img);

//append body
document.body.appendChild(div);

//onclick classList
document.addEventListener('click', function(){
img.classList.add('meuimg');
});
```

</details>

<details>
<summary>contains event target</summary>
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
        alert("click inside")
    } else {
        alert("click outsite")
    }
});
```
</details>

<details>
<summary>toString_ArrayFrom</summary>
<a href="https://codepen.io/geraldopcf/pen/PoRVXQB" target="_blank">CodePen</a>

```html
<h2>toString converter</h2>
   <form>
     <label for="number">Number:</label>
        <input type="number">
    </form>
    <div>Binary: <span id="res"></span></div>
    <div>Hex: <span id="hex"></span></div>

<h2>Array From</h2>
  <ul>
    <li class="item" itemtype="arroz">Arroz</li>
    <li class="item" itemtype="feijao">Feijão</li>
    <li class="item" itemtype="batata">Batata</li>
  </ul>
```


```js

 //shorhand
   const get = function (id) { return document.getElementById(id) };
  const query = function (id) { return document.querySelector(id) };
  const log = function (id) { return console.log(id) };

const itens = Array.from(document.getElementsByClassName("item"));
log(itens);

itens.forEach(item=>{
  item.addEventListener("click", onItemClick)
});

function onItemClick(event){
  log('clickk', event.target.attributes.itemtype.value);
  const value = event.target.attributes.itemtype.value;
  if(value == 'feijao') log('tropeiro?');
  if(value == 'arroz') log('arroz');
  
}

input = query("input");
  input.addEventListener("input", function () {
    const str = +this.value;
    console.log(str.toString(16));
    get("res").innerText = str.toString(2);
    get("hex").innerText = str.toString(16);
  });
```
</details>


<details>
<summary>event.preventDefault</summary>
<a href="https://codepen.io/geraldopcf/pen/VwXgqgQ" target="_blank">CodePen</a>

```html
<h2>action="#" vs preventDefault()</h2>
<p>action="#" - require a first click to get #get in browser</p>
<hr>
<p>preventDefault() - "boa pratica" prevenir o comportamento padrão, exemplificando no form requer detalhes e.g:</p>
<p>case html button.onclick="mybtn()" add <u>event</u> in <b>"mybtn(event)"</b> to call in <b>function(event)</b>
<p>case html <b>button id="btn"</b> and ...<b>getElementById("btn").onclick = function(event)</b></p>

<pre>
<code>
 function btn(event){
       event.preventDefault()
</code>
</pre>

<br>
<form>
    <fieldset>
    <legend>Calculadora</legend>
      <label for="n1">Digite número: </label>
      <input type="number" id="n1" required />
    <label for="max">Max: </label>
      <input type="number" id="max" required>
      <button onclick="btn(event)">Calcular</button>  
      <button onclick="reseta()">Reload and reset</button>
      </fieldset>
    
    </form>

  <fieldset>
        <legend>Resultado:</legend>
        <p id="myres"></p>
      </fieldset>

```

```js

 console.log('test')
      function btn(event){
       event.preventDefault()
    n1 = document.getElementById("n1").value;
    max = document.getElementById("max").value;
    myres = document.getElementById("myres");
    res = '';
  for(i = 1; i<=max; i++){
    res += n1+' x '+i+'='+i*n1+'<br>';
  }
  myres.innerHTML = res;
  }
  function reseta(){
    document.querySelector("form").reset();
    location.reload();
  }

```
</details>