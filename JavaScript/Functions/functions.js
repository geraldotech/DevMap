// https://www.w3schools.com/js/js_functions.asp

//call funcao diretamente custom name value
function minhafuncao(valorfuncao) {
  console.log("Welcome " + valorfuncao);
}
minhafuncao("Geraldo, Filho");
minhafuncao("Felipe");

//////call funcao diretamente //2
function nome() {
  console.log("geraldo");
}
nome();

function images() {
  document.write(
    '<img src="https://www.w3schools.com/jsref/klematis.jpg" style="max-width:60%"/>'
  );
}
images();

//// multiple custom values
function ola(nome, sobrenome) {
  console.log(nome + " " + sobrenome);
}

ola("Geraldo", "Filho");
//Felipe será undefined
ola("Felipe");

///outros exemplo
function brazil(cidade, estado) {
  document.write(cidade + " " + estado);
}
brazil("Maceio", "Alagoas");

///exemplo numero digite é multiplicado por 2
const n = prompt("Valor: ");
function brazil(n1) {
  document.write(n1 * 2);
}
brazil(n);

//calculando um valor por si mesmo
function mult(x) {
  return x * x;
}
console.log(mult(3));

//calculando dois valores com function custom value
function mult(x, y) {
  return x * y;
}
//inside console
console.log(mult(5, 5));
//or can use let to variable
let x = mult(5);
console.log(x);

// Arrow function
const surname = (el) => {
  console.log(el); // não precisa usar `return` quando se tem um console.
};
surname("Filho");

// function expression https://pbs.twimg.com/media/FN6bFDRX0AsshRB?format=jpg
const costa = function peganomes(a) {
  console.log(a);
};
costa("Boeing");
