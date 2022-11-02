# Tipos de funções:

Um função recebe parâmetros e uma chamada para função envia argumentos.

- Declaration

```js
function functionName(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

- Expressions

```js
// function expression https://pbs.twimg.com/media/FN6bFDRX0AsshRB?format=jpg
const costa = function (a) {
  console.log(a);
};
costa("Boeing");
```


- Arrow functions 

```js
const surname = (el) => {
  console.log(el); // não precisa usar `return` quando se tem um console.
};
surname("Filho");
```

- Hosting  

```js
if(5 > 4){
  show();
}

function show(){
  console.log("verdade");
}
```

- Self-Invoking Functions
    - anonymous self-invoking function (function without name) - protect variables

```js
(function (){  
  var eu = 5;
  alert("Hello " +eu);
})();

```


[https://www.w3schools.com/js/js_function_definition.asp](https://www.w3schools.com/js/js_function_definition.asp)  
[https://ilovecoding.org/lessons/self-invoking-anonymous-function](https://ilovecoding.org/lessons/self-invoking-anonymous-function-what-is-it-why-and-how-to-use-it)

# Closures
é a forma de fazer com que as variáveis dentro de uma função sejam privadas e persistentes

- Antes de entender o que são Closures observe o code: 

```js
let cont = 0; //inicio
function soma(){
  cont+= 1; //incrementa
  return console.log(cont); //retorno
}

soma();
soma();
// There is a problem with the solution above: Any code on the page can change the counter, without calling add().

cont = 5; // << alterando a var global facilmente
soma(); // então o retorno será 5 + 1 = 6

/*
blz e se remover o cont global e adicionar apenas na function ?
Vai quebrar o código pq a var sempre vai ser resetada toda vez que a funcao for chamada:
*/

function somaa(){
  let contt = 0; //inicio
  contt+= 1; //incrementa
  return console.log(contt); //retorno sempre 1, 1
}

console.log(window.contt); // undefined
somaa();
somaa();


```

## soluções 

```js
function calc(){
  let x = 1;
  function add(){
    console.log(x +1); // 2
  }
  function mul(){
    console.log(x * 5); // 5
  }
  return {
    add: add,
    mul: mul
  };
};

console.log(window.x); // undefined
calc().add(); 
calc().mul();

/* 
===================================================
outro exemplo Self-Invoking Functions
*/
const idade = (function (){
  let a = 2000;
  return function(){
    return a+= 1
  }
})();

console.log(idade()); // 2001
console.log(idade()); // 2002
console.log(idade()); // 2003

```


Bom exemplos
-  [https://www.w3schools.com/js/js_function_closures.asp](https://www.w3schools.com/js/js_function_closures.asp)

- [https://medium.com/@stephanowallace/javascript-mas-afinal-o-que-s%C3%A3o-closures-4d67863ca9fc](https://medium.com/@stephanowallace/javascript-mas-afinal-o-que-s%C3%A3o-closures-4d67863ca9fc)