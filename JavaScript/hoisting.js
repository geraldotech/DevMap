//function Hoisting 
host() //function chamada antes de ser declarada

function host(){
  console.log('my function')
}

//Variables Hoisting

console.log(n)
n = 6;
console.log(n)
var n;


//console.log(mylet);
let mylet = "Geraldo";

console.log(myvar);
var myvar = "Geraldo"; //work
