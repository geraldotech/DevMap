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

console.log(window.eu); // undefined

```


[https://www.w3schools.com/js/js_function_definition.asp](https://www.w3schools.com/js/js_function_definition.asp)  
[https://ilovecoding.org/lessons/self-invoking-anonymous-function](https://ilovecoding.org/lessons/self-invoking-anonymous-function-what-is-it-why-and-how-to-use-it)

# Closures

```js
function calc(){
  let x = 1;
  function add(){
    console.log(x +1);
  }
  function mul(){
    console.log(x * 2);
  }
  return {
    add: add,
    mul: mul
  };
};
 
console.log(window.x); // undefined
calc().mul();
calc().add();

// ou podemos atribuir a parent fun to var
const test = calc();
test.mul();
test.add();

// outro exemplo Self-Invoking Functions
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