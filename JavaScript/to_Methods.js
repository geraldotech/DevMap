//toFixed depois da virgula
console.log(Math.PI.toFixed(2)); // 3.14

//toPrecision
console.log(Math.PI.toPrecision(2)); //3.1


//toUpperCase and toLowerCase
let firtName = "Geraldo";
console.log(firtName.toUpperCase()); //GERALDO

console.log(firtName.toLowerCase()); //geraldo

//toString
//https://linuxhint.com/javascript-tostring-method/
let age = 29;
console.log(typeof age) //number

let aget = age.toString();
console.log(typeof aget) //now is a string

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