// 👉for of
//📍Para uso de for of in Object visite: https://github.com/geraldotech/DevMap/blob/main/JavaScript/Objects/README.md

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
  /*
               G
               E
               R
               A
               L
               D
               O
               */
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

//for of adicionando parameters entre []

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
//usando uma function
para(["Geraldo", "Filho"]);
