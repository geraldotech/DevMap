/*
JavaScript String and Array Methods

Table of JavaScript String and Array Methods => 
https://medium.com/jsunderthescope/table-of-javascript-string-and-array-methods-fdba7c5289f1
*/

// 1 - 2
const x = ['BMW','GOL','LATAM','AMERICAN','BRAZIL','RAPPI'];

//display #length of Array direct
console.log(x.length);

//ou declando varivel
let tamanho = x.length;
console.log(tamanho);

//size if a array string
size = x[0].length;
console.log('Array 0 tem '+size);

// 3 - display all content using for
for(i = 0; i < x.length; i++){
    console.log(x[i]);
}


// 4 - #sort
 const myarr = ['Penha',' Gramacho',' Caxias',' Central',' Bonsucesso'];
 console.log(myarr);
 var ord = myarr.sort();
 //console.log(myarr.sort());
 console.log(ord);

// 5 - The #shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
const x = ['A', ' B', ' C',' D',' E'];
const first = x.shift();
console.log(x); //output (4) [' B', ' C', ' D', ' E']

// 6 - The #unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
const cell = ['Nokia',' Apple',' Microsoft',' Samsung'];
//unshift alone mostra somente N itens do array
console.log(cell.unshift('Xiaomi','Lenovo'));
console.log(cell);

// 7 - The #pop() method removes the last element from an array and returns that element. This method changes the length of the array.
const mercado = ['carnes',' bebidas', 'frios', 'frutas'];
//get only ultimo
console.log(mercado.pop());
//show array modificado
console.log(mercado);

// 8 The #push() method adds one or more elements to the end of an array and returns the new length of the array.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
const n = [1,2,3,4,5];
const push = n.push(6,7,8,9,10);
console.log(n);

// 9 - #reverse
//inverter array
 fruits.reverse();


 // 10 - #includes - boolean returning true or false as appropriate - require entire "name"
const cars = ['BMW','GOL','FIAT','FERRARI','MERCEDES','PAJERO'];

var x = cars.includes('BMW'); //true because exists
console.log(x);
var y = cars.includes('Ford')
console.log(y); 

//includes e.g:2
const cars = ['BMW','GOL','FIAT','FERRARI','MERCEDES','PAJERO'];
let item = 'FIAT'; //item a ser procura


//includes e.g:3
var x = cars.includes(item); 
console.log(x)//true because exists

if(x === true){
  console.log(cars.indexOf(item)); //if true so get index of item
} else{ //if false
  console.log('nao existe')
}


//11 - #indexOf e.g: 1

//demo => https://gmapdev.netlify.app/demo/indexof-preventdefault

function getx(){
  let n = document.getElementById("n").value
  const cars = ['BMW','GOL','FIAT','FERRARI','MERCEDES','PAJERO'];
  const index = cars.indexOf(n); //get index of element
  if(index == 1){  //case
    console.log('encontrado gol')
  } else if (index == 2){ //case
    console.log('encontrado fiat')
  } else { //case not found
    console.log("not found!")
  }
} 
//indexOf e.g: 2
const array = [1,2,3,4,5];
getindex = array.indexOf(5);
getindex > -1 ? console.log('item existe') : console.log('item nao existe') 

//indexof e.g: 3
const arr = ['lactose','feijao','agua','queijo'];
arr.push('Suco light');


  index = arr.indexOf('agua'); //get agua index
  console.log(index);
  if(index !== -1){ //if index agua dif -1 
  arr.splice(index,1); //so remove this index value
  }
console.log(arr); 

/*
[=============================================================================]
12 - #findIndex method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned. 
*/


const person = [
  {nome:"Geraldo",idade:29},{nome:"Felipe",idade: 28},{nome:"Isabella",idade: 5,},{nome:"Isab",idade:10},
];
const menor = person.findIndex((value)=> value.idade < 18); // retorno o index do item < 18
console.log(menor) // [2]

//pega o resultado e add +2 anos
person[menor].idade += 2;
console.log(person) //index number 2 +2 anos = 2: {nome: 'Isabella', idade: 7

// //who first item is larger > 5 ?
const num = [1,30,40,5,10,15];
const Maior = (ele) => ele > 5; 
console.log(num.findIndex(Maior)); // 1

/*
indexOf and FindIndex
*/

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

console.log(fruits.indexOf("blueberries"));// 3

// first ele startWith: b
console.log(fruits.findIndex(el => el.startsWith("b"))); //1

// ele includes "pe"
console.log(fruits.findIndex(bb)); // 2
function bb(val){
    return val.includes("pe");
}



/*
[=============================================================================]
13 - #filter
Doesn’t change the original array. Faz uma shallow copy do que é encontrado
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Como o nome já diz é um filtro e assim se faz, filtrando todos os elementos, requer  função
*/
const arr = ['Al', 'Bra', 'Char', 'Delta', 'Echoss', 'Foxtrot']
const arr2 = ['Al', 'Bra', 'Char', 'Delta', 'Echoss', 'Foxtrot'];
const ages = [15,17,20,21,24,25,30];
var obj = {
  'students': [{
    "name:":"Geraldo",
    "child": true,
    "Age": 29
  },{
  "name":"Isabella",
    "child": false,
    "Age":5
}
]
};

// declaration function direct
const busca5 = arr2.filter(function(val){
  return val.startsWith("F");
});
console.log(busca5);

// call function
const fil = obj.students.filter(filhos);
console.log(fil);


function filhos(tem){
  return tem.child; // return false add !tem.child
}

console.log(ages.filter(verage));
function verage(idade){
  return idade >= 21;
}

// inside console
console.log(arr2.filter(function(a){
  return a.startsWith("C")
}));

// arrow functions
console.log(arr2.filter(val => val.endsWith("s")));
console.log(arr.filter(l => l.length > 5));

const maiorIdade = obj.students.filter(ida => ida.Age > 18);
console.log(maiorIdade);

// find aqui também works
const busca = obj.students.find(function (el){
  return el.Age >= 29;
});
console.log(busca);


// ternary 
const words = arr.filter((word) => word.startsWith('F'));
words == '' ? console.log('nao') : console.log(words); // Foxtrot

//ou alternative
words != '' ? console.log(words) : console.log('not'); // Foxtrot
words.length != 0 ? console.log(words) : console.log('not'); // Foxtrot

// best ?
!words ? console.log("not found") : console.log(words); // Foxtrot

const brazil = arr2.filter(pa => pa == "Bra");
!brazil ? console.log("nao") : console.log(brazil);


// the index, what iteration we are on https://debbie.codes/blog/js-array-filter-method/
const callNom = ['Felipe', 'Char', 'Delta', 'Echoss', 'Foxtrot', ]
console.log(callNom.filter(function(val, index){
    //decide who should be returned
    if(index > 1){ //vao buscar nos index acima de 1
      return val.startsWith("F"); // Foxtrot
    }
}));

//forma negativa
const ages = [15,17,20,21,24,25,30];
const chaves = [15];
console.log(ages.filter(val => !chaves.includes(val))); // mostra todos exceto o 15 !means "not"

// check aqui tbm https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_filter2


/* 
juntando o filter com includes

* filter argumento específicos - show 
* includes agumento exato - boolean
* passa por todos os nomes verificando quem tem "F" e filtra
Fiat, Ferrari, OPALFA
*/
console.log(["PAPA","FELIPE","GERALDO"].filter(a => a.includes("E")));

//e.g 2
const petshop = ["cao: 10","gato: 20","cao: 20"];

dog = petshop.filter(el => el.includes("cao"));
console.log(`results ${dog}`);


// como buscar varios termos
const array = ["12","zuz","dev","Element","cam"];
const keys0 = ["zuz", "dev"];


const fil4 = keys0.filter(val => array.includes(val));
console.log(fil4);
//direct
console.log(["dev","cam"].filter(ba => array.includes(ba)));


// outro e.g com includes
let busca3 =  ["20","12","zuz","dev","Element","cam", "56","Deltra","Delly"].filter(a => a.includes("D")); 
console.log(busca3); // (2) ['Deltra', 'Delly']


const keys = ["1","e"];
const busca = array.filter(a => keys.some(e => a.includes(e)))
console.log(busca);  // ['12', 'dev', 'Element'];

/*
[=============================================================================]
como buscar varios termos com piece de informações adicionando o some o
*/

// toda as strings que incluir esse dados serão mostradas
const keys2 = ["z","d"];

let filbusca = array.filter(a => keys2.some(e => a.includes(e)));
console.log(filbusca); // ['12', 'dev', 'Element'];

/*
some / includes - requer full name
Sem filter o retorno será boolean, verificando se algum item na lista está incluido no arr
*/
let getfl = ["dev"].some(a => array.includes(a));
console.log(getfl);

/*
prática desnecessária!!!, podemos usar apenas o filter endsWith, filter pode o começo, tamanho e fim.
*/

// not that
const 
get = ["o"], 
files = ['Geraldo', 'Algo', 'Felipe'],
res = files.filter(al => get.some(b => al.endsWith(b)));
console.log(res); // (2) ['Geraldo', 'Algo']


// code this 
console.log(files.filter(o => o.endsWith("o")));

// filter odd with loop
const num = [];
for(let i = 0; i <= 10; i++){
  num.push(i);
}

console.log(num.filter((num) => num %2 == 1));

/* 
[=============================================================================]
14 - #find - requer função
*/

const persons = [{name:"Geraldo",city:"Maceio",age:"29"}, {name:"Felipe",city:"Palmeira",age:"28"}];
const arrname = ["Alpha","Bravo", "Charlie", "Deltra", "Echo", "Foxtrot", "Golf"];

// e.g: 1
const buscar = persons.find(function(el){
  return el.age == 28;
});
console.log(buscar);

// e.g: 2 - arrow
let x = persons.find(esse => esse.name == "Felipe");
console.log(x);
//document.write(Object.values(x));  OBS se aqui fosse "filter" deveriamos usar o stringify para o html

// e.g: 3 - arrow
const search = 'Maceio';
console.log(persons.find(thisValue => thisValue.city == search));

// e.g: 4 ternario response
let f = arrname.find(val => val === "Echo");
!f ? console.log("not found") : console.log(f);

const personsz = [
  { nome: "GERALDO", idade: 29, Estado: "RJ" },
  { nome: "FELIPE", idade: 25, Estado: "AL" },
];

const find = personsz.find(el => el.nome === "GERALDOs");
console.log(find);
!find ? console.log("not found") : console.log(find); // not found
find != undefined ? console.log(find) : console.log('not found'); // not found


/*
Difference between filter and find

filter - returns all the elements of the array that satisfy the condition specified in the callback function.  iterates over all elements of the array and then returns a filtered array which satisfy the condition specified.

find -  returns first element of the array that satisfies the condition specified in the callback function.

recomendo ler:https://www.freecodecamp.org/news/find-vs-filter-javascript/
*/

const cartao = {
  'bancos': [{name:"SS", limite :5000}, {name:"BB", limite: 5500,}, {name:"ZZ", limite: 5300}],
};

// vai mostrar todos os elementos
console.log(cartao.bancos.filter(li => li.limite > 5000));
// vai mostrar o primeiro elemento encontrado
console.log(cartao.bancos.find(li => li.limite > 5000));


const lista = [
  {name:"Geraldo",age: 30},
  {name:"Isabella",age: 6},
  {name:"Felipe",age: 30},
];

// encontra todos > 18
console.log(lista.filter(per => per.age > 18));
// o primeiro > 18
console.log(lista.find(per => per.age > 18));

/* 
[=============================================================================]
15 - #some - The Array.some() method checks if any of the elements in an array pass a test (provided as a function).
*/
const ages = [3,10,18,20];

// function alone check maiores de 18
function check(age){
  return age > 18;
}
console.log(ages.some(check)); //maior de 18? true

//arrow function direct inline 
console.log(ages.some(el => el < 18)); //tem alguém menor de idade na lista? true 

//e.g
const person = [
  { nome: "ISA", idade: 28, Estado: "SP" },
  { nome: "gmap", idade: 25, Estado: "AL" },
];
console.log(person.some(el => el.nome === "ISA")); // true - tem algum nome igual
console.log(person.some(el => el.Estado === "RJ")); // false - tem alguém do estado

// maiores que 7 arrow function alone
const ages = [3,10,18,20];
const check = (el) => (el > 7);
console.log(array.some(check)); //true

/*
e.g: para passar vários elementos: some com includes
*/

//passando valores para vê se existe na lista
const array = ["12","zuz","dev"];
const check2 = ["dev","12"].some(el => array.includes(el));
console.log(check2); //true


//caso passe apenas uma string talvez não seja a melhor opção, poderiamos usar apenas o some ou includes
let search3 = ["zuz"].some(a => array.includes(a));
console.log(search3); // true

console.log(array.some(el => el == "dev")); // true
console.log(array.includes("dev")); // true


/* 
[=============================================================================] 
16 - #every
 true if the function returns true for all elements.
 false if the function returns false for one element.
Parameters:

currentValue	Required, 
index	Optional
arr	Optional.
*/

const numbers = [4, 12, 16, 20];
function maior(value){
  return value > 3; // todos >3 : true
}
console.log(numbers.every(maior));


const arr = ["Hero", "CSS", "TS", "JS", "ring"];
const keys = ["Hero","CSS","dsd"];

const busca = keys.every(a => arr.includes(a));
console.log(busca); // every - todas as keys estão incluidas? false

//example
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_every3


//Some vs Every
const numbers = [4, 12, 16, 20];
function maior(value){  
  return value > 10;
}

console.log(numbers.every(maior)); // false pq nem todos são >10
console.log(numbers.some(maior)); //true pq existe valores > 10


/*
[=============================================================================]
17 - #map - percorrer um array e obter um novo vetor cujo itens são resultados de uma função de callback
*/
//way 1
const arr = [1,2,3,4,5];

arrn = arr.map(x => 2** x);
console.log(arrn); //(5) [2, 4, 8, 16, 32]
//way 2

const arr2 = [1,2,3,4,5];
arr2n = arr2.map((item) => {
  return item ** 2;
})
console.log(arr2n); //(5) [1, 4, 9, 16, 25]

//way 3 - get
var mercado = new Map();
mercado.set('Bebidas','cerveja, refrigerates, vinhos');
mercado.set('higiene','papel toalha, sabonete');

console.log(mercado.get('Bebidas'));
console.log(mercado.get('higiene'));
console.log(mercado.keys);

//https://stackoverflow.com/questions/1144705/best-way-to-store-a-key-value-array-in-javascript

//MAP add values in obj
pessoa = [{
  name:"Geraldo",
  cidade:"Palmeira",
}];

x = pessoa.map((value) => {
  return {
    value, "Active":true,
  }
})

///replace  
let txt = "Visit Microsoft";
let newtxt = txt.replace("Microsoft", "Google");
console.log(newtxt)
  
//map and replace and transformar string em number
  const n = ["a 199","a 200","a 300"];
  const num = n.map(function(int){
      return +int.replace("a ",""); // ou  return Number(int.replace("a ",""));
  });
  console.log(num);

// Map.set https://stackoverflow.com/questions/63595841/find-element-in-map-by-its-property-value

/*
[=============================================================================]
18 #splice  index ? + delete ? + add elements?
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
- https://gmapdev.netlify.app/demo/indexof_and_splice
*/

//e.g 1
const cars = ['BMW','GOL','FIAT','FERRARI','MERCEDES','PAJERO'];
cars.splice(0,0,'new') // add 'new' to index 0 e removes nothing
console.log(cars);

//e.g 2
const cars2 = ['BMW','GOL','FIAT','FERRARI','MERCEDES','PAJERO'];
cars2.splice(0,1,'new') // add 'new' to index 0 e remove index 1
console.log(cars2);


//19 - 
//split - gera string de substrings

let a = "Rio de Janeiro";
const myarr = a.split(" ");
console.log(myarr) //3) ['Rio', 'de', 'Janeiro']

//get arrays
console.log(myarr[2]) //Janeiro

//limitando output and no spance ""
const myarr2 = a.split("",2);
console.log(myarr2)  //['R', 'i']


/* [=============================================================================]
20 #join - method create e returns concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string */
arr = ['fire', 'water', 'airplane', 'car']

console.log(arr.join()); // fire,water,airplane,car
console.log(arr.join('.')) // fire.water.airplane.car
console.log(arr.join('')) // firewaterairplanecar


// 21 concat - merge arrays
arr = [1,2,3,4,5]
arr2 = [6,7,8,9,10]
arr_all = arr.concat(arr2);
console.log(arr_all);

//22 - slice 
//retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O Array original não é modificado.
/*
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
*/
arr2 = [0,1,2,3,4,5];
let b = arr2.slice(1,3); //get itens between
console.log(b);



//23 - split - create array of substrings
//only for strings
arr3 = ("Geraldo");
let c = arr3.split("")
console.log(c) // ['G', 'e', 'r', 'a', 'l', 'd', 'o']


//split("") espaço = cada word , no space = every letter
let a = "Rio de Janeiro";
const myarr = a.split(" ");
console.log(myarr); // (3) ['Rio', 'de', 'Janeiro']


//get second word
console.log(myarr[2]) //Janeiro
document.getElementById("res").innerHTML = myarr;

//limiter
const a = "DEVMAP.code";
const myarr2 = a.split("", 2)
console.log(myarr2); // (2) ['D', 'E']

//24
const lt = "Geraldo";
console.log("hello", lt.repeat(10));



/*______________________________["RESUMO"]__________________________________*/
// #filter, #includes, #some, #every, #indexOf, #find, #forEach

const person = [
  { nome: "GERALDO", idade: 29, Estado: "RJ" },
  { nome: "FELIPE", idade: 25, Estado: "AL" },
  { nome: "ISABELLA", idade: 5, Estado: "RJ" },
  { nome: "CAMILLY", idade: 10, Estado: "SP" },
  { nome: "ISA", idade: 28, Estado: "RS" },
  { nome: "Philips", idade: 28, Estado: "RS" },
];

console.log('some',person.some(el => el.nome == "GERALDO"));// existe alguém chamado GERALDO? true
console.log('some',person.some(el => el.Estado === "SP")); // existe/alguém de SP? true
console.log('filter',person.filter(el => el.Estado === "RJ")); //(2) [{…}, {…}]
console.log('find', person.find(value => value.Estado === "RJ")); // get only 1 results even tiver mais
console.log('every',person.every(el => el.Estado === "SP")); // todos são de SP? false
const busca = person.filter(val => val.idade == 28);
console.log(busca); // ISA , Philips
person.forEach((el, ind) => console.log(ind)); // 1,2,3,4

/*-*[=============================================================================]*-*/


const arr = ["CREDITO", "R$ 100", "DEBITO", "R$ 200"];
// includes e some alone looks no difference
console.log('some arr',arr.some(el => el === "CREDITO")); //true
console.log('includes', arr.includes("DEBITO")); //true


// console.log(arr.includes("R$")); < isso não funciona, includes requer fullname, usar flter
console.log('filter,includes',arr.filter(value => value.includes("R$")));  //(2) ['R$ 100', 'R$ 200']

/*-*[=============================================================================]*-*/

const array = [1,2,3,4,5];

 /* functions para filter, some, includes | check number even or odd */
const even = (el) => el %2 == 0; 
const odd = (val) => val %2 != 0;

console.log(array.some(even)); // existe par true
console.log(array.filter(even)); // existe par e display todos [2,4]
console.log(array.find(even)); // mostra o primeiro even 2
console.log(array.every(even)); // todos são par? false
console.log(array.every(odd)); // todos são impar? false
console.log(array.includes(6)) // includes 6? false
console.log(array.join('.|.')) // join formata a saída 1.|2.|.3.|.4.|.5.
console.log(array.fill(0,2)) // (value, start, end) [1 ,2 , 0, 0, 0] 
console.log("tem B",["A","B","C"].some(val => val == "B")); // tem B ? // true
console.log("vazio",array.filter(el => [].includes(el))); // se true filtra e display ou vazio se for false
console.log([1,2,3].some(el => array.includes(el))); // tem algum elemento assim no array? true


//keys
const keys = [1,2,3,4,5];

console.log(keys.every(el => array.includes(el))); // existe todas as keys? //true
console.log(keys.filter(el => array.includes(el))); //filtra todos ele que includes na key
console.log(keys.some(el => array.includes(el))); // true - se tem todos com every, tem alguns

const notas = [2008,1992,2003,2022];
const keyz = [2008,1992,"2003"];

console.log(notas.every(el => keyz.includes(el))); //false
console.log(notas.some(el => keyz.includes(el))); // true
/*
Devo chamar primeiro o array ou keys?
o resultado foi o mesmo, porém chamar o array original primeiro é o mais indicado depois chamar os keys no includes. Contudo no caso de every/some quando vai verificar se aquela lista de keys existe no Array, então chamar primeiro as keys
*/
console.log(notas.some(a => keyz.includes(a))); // true

const name = ["Geraldo", "Costa", "Barra", "George", "Aome"];
const letter = name.filter(val => ["G","C"].some(b => val.startsWith(b)));
console.log(letter); // Geraldo, George



/*
_______________________EXERCICIOS_____________________________
*/
const name = ["Geraldo", "CostAo", "Barrao", "Georgeo", "Aomeo"];

// 1 - quero saber se todos terminam com a vogal "o":
const o = name.every(el => el.endsWith("o"));
console.log(o); // todos terminam com o // true

// 2 - filter todos terminam com a vogal "o";
console.log(name.filter(val => val.endsWith("o")));;

// 3 - filter todos que começam com a letra G e B
console.log(name.filter(val => ["G","B"].some(sum => val.startsWith(sum))));

// 4 - filtrar a letra maiuscula A
console.log(name.filter(val => ["A"].some(b => val.includes(b))));

// 5 - todos inclui "o"?
console.log(name.every(el => el.includes("o")));

// 6 - filter maior ou igual a 7
console.log(name.filter(el => el.length >= 7));

// 7 - filter a letra m
console.log(name.filter(val => ["m"].some(a => val.includes(a))));

// 8 - filter quem inclui "al"
console.log(name.filter(val => ["al"].some(e => val.includes(e))))

// 9 - inclu "Aomeo"
console.log(name.includes("Aomeo"));

// 10 - encontrar alguem com a letra "G"
console.log(name.find(val => val.startsWith("G")));

// 11 - filtrar todos que terminam com "o", não incluir o primeiro item;
console.log(name.filter(function(val, index){
    if(index > 0){
      return val.endsWith("o")
    }
}));

// 12 - "Geraldo", "CostAo" existe na lista?
console.log(["Geraldo", "CostAo"].every(val => name.includes(val)));