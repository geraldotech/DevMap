<span id="res"></span>;

// 👉while statemet
let txt = "";
let n = 0; // start n 0
while (n < 10) {
  console.log("hello"); // print 10x
  txt += `hello <br>`;
  n++; //
}
document.getElementById("res").innerHTML = `${txt}`;

/*
recursividade = function que chama ela mesma
*/
function printfrase(frase, n) {
  while (n > 0) {
    console.log(frase);
    n--;
  }
}
printfrase("Hello", 5);

function printRecursividade(frase, n) {
  if (n < 0) return;
  console.log(frase);
  printRecursividade(frase, n - 1);
}

printRecursividade("2023", 4);

// 👉Recursion
function soma(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return arr.pop() + soma(arr);
  }
}

console.log(soma([10, 5, 3])); //18

function add(num) {
  if (num <= 0) {
    return 0;
  } else {
    return num + add(num - 1);
  }
}

console.log(add(3)); //6

//👉do whie

let z = 1;
do {
  console.log("Bloody Hell");
  z++; // do not forget to increase the variable, otherwise the loop will never end!
} while (z <= 10);

//👉for
//saida de numero no HTML
var cont = "";
for (i = 1; i <= 10; i++) {
  cont += i;
}
document.getElementById("a").innerHTML = cont;

//ou podemos simplesmente usar o document... dentro do loop incremetando o proprio `i`
document.getElementById("a").innerHTML += i;

//somando
var total = 0;
var num = [1, 2, 3];

for (i = 0; i < num.length; i++) {
  total += num[i];
}
console.log(total); // 6

//👉chamar a fun passabdo um argumento de `loop`
for (let i = 0; i <= 5; i++) {
  ola(i, "Geraldo");
}
function ola(n, val) {
  console.log(val);
}
