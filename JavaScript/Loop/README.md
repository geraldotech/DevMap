# Loops

### 👉for

> saida de numero no HTML

```js
var cont = ''
for (i = 1; i <= 10; i++) {
  cont += i
}
document.getElementById('a').innerHTML = cont

//ou podemos simplesmente usar o document... dentro do loop incremetando o proprio `i`
document.getElementById('a').innerHTML += i

//somando
var total = 0
var num = [1, 2, 3]

for (i = 0; i < num.length; i++) {
  total += num[i]
}
console.log(total) // 6

//👉chamar a fun passabdo um argumento de `loop`
for (let i = 0; i <= 5; i++) {
  ola(i, 'Geraldo')
}
function ola(n, val) {
  console.log(val)
}

// iterate Array List

const shoppingList = ['Alpha', 'Bravo', 'Bravo 2', 'Charlie', 'Delta']

// listWords = ul tag
for (let i = 0; i < shoppingList.length; i++) {
  const item = document.createElement('li')
  item.innerHTML = shoppingList[i]
  listWords.appendChild(item)
}
```

### 👉while statemet

```js
let txt = ''
let n = 0 // start n 0
while (n < 10) {
  console.log('hello') // print 10x
  txt += `hello <br>`
  n++ //
}
document.getElementById('res').innerHTML = `${txt}`

let y = 10
while (y > 1) {
  // y > 10 ? false // y < 10 true infinity()... sempre sera menor, qual condicao de saida???

  console.log(y)
  y--
}
```

### recursividade = function que chama ela mesma

```js
function printfrase(frase, n) {
  while (n > 0) {
    console.log(frase)
    n--
  }
}
printfrase('Hello', 5)

function printRecursividade(frase, n) {
  if (n < 0) return
  console.log(frase)
  printRecursividade(frase, n - 1)
}

printRecursividade('2023', 4)
```

### 👉Recursion

```js
function soma(arr) {
  if (arr.length === 1) {
    return arr[0]
  } else {
    return arr.pop() + soma(arr)
  }
}

console.log(soma([10, 5, 3])) //18

function add(num) {
  if (num <= 0) {
    return 0
  } else {
    return num + add(num - 1)
  }
}

console.log(add(3)) //6
```

### do whie

```js
let z = 1
do {
  console.log('Bloody Hell')
  z++ // do not forget to increase the variable, otherwise the loop will never end!
} while (z <= 10)
```

### for of

// 👉for of
//📍Para uso de for of in Object visite: https://github.com/geraldotech/DevMap/blob/main/JavaScript/Objects/README.md

```js
function somar(...n) {
let z = 0;
for (let num of n) {
z += num;
}
return console.log(z);
}
somar(1, 2, 3, 4);

// 👉for of sum Array
const arr = [1, 2, 3];
let ab = 0;
for (let el of arr) {
ab += el;
}
console.log(ab); //6

// 👉for of

const interable = [10, 20, 30];
for (let value of interable) {
value += 1;
console.log(value); // 11, 21 ,31
}

const name = "GERALDO";
for (const vall of name) {
console.log(vall);
/_
G
E
R
A
L
D
O
_/
}

//👉for of even
const arr = [1, 2, 3, 4, 5, 6];
for (val of arr) {
if (val % 2 == 0) {
console.log(val); // 2,4,6
}
}

//for of em NodeList, consultar input>radio em https://github.com/geraldotech/DevMap/tree/main/JavaScript/input

//👉create elements
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator
const arr = ["a", "b", "c"];
for (const letter of arr) {
const li = document.createElement("li");
li.textContent = letter;
document.querySelector("ol").appendChild(li);
}
//👉 if condition
const arr = [10, 20, 30, 40, 50];
const api = ["Geraldo", "CostAo", "Barrao", "Georgeo", "Aomeo", "asoa", "oplz"];

for (let i of arr) {
if (i > 20) {
console.log(i); //30,40,50
}
}

for (const busca of api) {
if (busca.length == 6) {
console.log(busca); //CostAo, Barrao
}
}

for (const busca of api) {
if (busca.startsWith("G")) {
console.log(busca); //Geraldo, Georgeo
}
}

// 👉 for of adicionando parameters entre []

for (const [key, busca] of ["Geraldo", "Filho"]) {
console.log(key); //primeiras letras
console.log(busca); // segundo letra
}

function para(el) {
for (const [key, busca] of el) {
console.log(key); //primeiras letras
console.log(busca); // segundo letra
}
}
// 👉 usando uma function
para(["Geraldo", "Filho"]);


// Iterate Array List

// listWords = ul tag
const api = ["Geraldo", "CostAo", "Barrao", "Georgeo", "Aomeo", "asoa", "oplz"];
for(const i of api){
  listWords.innerHTML += `<li>${i}</li>`
}

// appendChild
for(const i of shoppingList){
  const li = document.createElement('li')
  console.log(i)
  li.innerHTML += i
  listWords.appendChild(li)
}

```
