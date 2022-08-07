/*
Como reduzir a quantidade de números de um Array?
reduce()
reduce means? => reduzir, diminuir, cortar
arr = [1,5,9] = 15
reduce by default get sum
*/

    //e.g great
    //https://raullesteves.medium.com/javascript-entendendo-o-reduce-de-uma-vez-por-todas-c4cbaa16e380
    var numeros = [1, 1, 2, 3, 4, 5, 6];
var total = numeros.reduce((acumulador, numero, indice, original) => {
console.info(`${acumulador} total_acumulado até o momento`);
console.log(`${numero} valor atual`);
console.log(`${indice} indice atual`);
console.log(`${original} array original`);
return acumulador += numero;
}, 0) //0 para aparecer o total e value do primeiro elemento no console.log
console.warn('acaboooou');
console.log(total)


///
const n = [3,2,3,5];
var total = n.reduce((total, value, ind,arr)=>{
    console.log(`index: ${ind} total: ${total} value: ${value}`);
    return total+= value;
},0)

console.log("sum: "+total) //13


//inline
var total = n.reduce((total, value, ind,arr)=> total+= value ,0)
console.log("sum: "+total) //13


//sum arrays
const n = [1,2,3,4,5], m = [6,7,8,9,10];

var ab = n.reduce((total, value)=> total+= value, m.reduce((total,value)=> total+= value));
console.log(ab)

//media notas
const notas = [7.5,8,9,1.5];

var x = notas.reduce((total,value) => total+= value);
console.log(x /4)


//call by item id
const lista = [
    {id:1, nome:"Gol"},
    {id:2, nome:"Ferrari"},
    {id:3, nome:"camaro"}
]

const callback = (total,valor)=>{
    total[valor.id] = valor.nome
    return total
};
const valor_inicial = {};

const carrosIndex_id = lista.reduce(callback, valor_inicial);
console.log(carrosIndex_id)



//ENTENDENDO reduce


var n = [2,3,6].reduce((total,value,ind,arr)=>{
   return total += value;
})
console.log(n)

// > esquerda para direita
//1 Como reduzir de maneira classica com for

var total = 0;
var num = [2,4,6];
for(var i =0; i < num.length; i++){
    total+= num[i];
}
console.log(total) //12

//1 com Reduce function(expression)
n = [2,4,6];
x = n.reduce(function(a,b){
    return a+b;
})
console.log(x);

//2 somando valores com reduce (arrow) function
num2 = [1,2,3];
const somathis = num2.reduce((somathis, element)=> somathis + element);
console.log(somathis);


//3 function for of soma
function somarf(arr){
    let somaa = 0;
    for(val of arr){
        somaa += val;
    }
    return somaa;
}
console.log(somarf([5,6,6])); //17

//3 reduce with call a function
//call a function" instead of "invoke a function"
function lsum(arr){
    const reducer = (sum, val) => sum + val;
    const inicialvalue = 0;
    return arr.reduce(reducer, inicialvalue);
}

console.log(lsum([5,6,6])); //17


//get directi
const somar2r = [1,2,3,4,9].reduce(function(acumu,valueatual,index,arr){
    return acumu + valueatual;
})
console.log(somar2r)


//4sub
//esquerda para direita 15 -5 = 10 -2 = 8
lista = [15,5,2].reduce((a,b) => a-b);
console.log(lista); //8

//letras
letras = ['a','b','c','d'].reduce((x,y) => x+y);
console.log(letras); //abcd

//saldo

let clients = [
    { person:"Gel", saldo:200},
    { person:"Fel", saldo:400},
    { person:"Is", saldo:40},
  ];
  
  let soma = clients.reduce((total,value)=>{
    return total + value.saldo;
  }, 0);
  
  console.log(soma)


//refs
//https://blog.betrybe.com/javascript/javascript-reduce/
//https://raullesteves.medium.com/javascript-entendendo-o-reduce-de-uma-vez-por-todas-c4cbaa16e380

