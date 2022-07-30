# Javascript
console.log('Focus in Javascript');

### write:
```js
console.log('aspas single');
console.log("aspas dupla");
console.log(`grace accent`);
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

### Extras fast code cheats
<details>
<summary>Extras. Math. padStart...</summary>

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

Math.max(1,2,3,4,5)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

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
```
</details>


<details>
<summary>Extras 2</summary>

```js
// Shorhand for getElementById

//function
const get = function(id){ return document.getElementById(id) };
get("root").textContent = 'Hello World!';

//arrow function
const get2 = (a) => {return document.getElementById(a)};
get2("root");

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
    `


//2
  const style = document.createElement("style")
style.textContent = "h1 { background-color: red; }"
document.head.appendChild(style)

//3 - external
  document.head.insertAdjacentHTML( 'beforeend', '<link rel=stylesheet href=/foo.css>' );
```
</details>

