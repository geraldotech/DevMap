# Javascript


Projects and Demos
 - [https://gmapdev.netlify.app/](https://gmapdev.netlify.app/)

console.log('Focus in Javascript');

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
### call var:

<details>
<summary>see code</summary>

```js
let name = "Geraldo";
console.log("Eu sou", name);
console.log("Eu sou " +name);
console.log(`Eu sou ${name}`)
console.log('Eu sou ' +name);]
```

</details>

### Estrutura de dados

- [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures)

var não é usa mais! pq tem problema de scopo, use let ou const

## Extra Fast Code Cheats and Examples


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