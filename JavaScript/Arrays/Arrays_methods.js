/*
JavaScript String and Array Methods

Table of JavaScript String and Array Methods => 
https://medium.com/jsunderthescope/table-of-javascript-string-and-array-methods-fdba7c5289f1
*/

// 1 - 2
const x = ['BMW','GOL','LATAM','AMERICAN','BRAZIL','RAPPI'];

//display length of Array direct
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


// 4
 //sort
 const myarr = ['Penha',' Gramacho',' Caxias',' Central',' Bonsucesso'];
 console.log(myarr);
 var ord = myarr.sort();
 //console.log(myarr.sort());
 console.log(ord);

// 5
 //The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
const x = ['A', ' B', ' C',' D',' E'];
const first = x.shift();
console.log(x); //output (4) [' B', ' C', ' D', ' E']

// 6
//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
const cell = ['Nokia',' Apple',' Microsoft',' Samsung'];
//unshift alone mostra somente N itens do array
console.log(cell.unshift('Xiaomi','Lenovo'));
console.log(cell);

// 7
//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
const mercado = ['carnes',' bebidas', 'frios', 'frutas'];
//get only ultimo
console.log(mercado.pop());
//show array modificado
console.log(mercado);

// 8
//The push() method adds one or more elements to the end of an array and returns the new length of the array.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
const n = [1,2,3,4,5];
const push = n.push(6,7,8,9,10);
console.log(n);

// 9
//inverter array
 fruits.reverse();


 // 10
//includes e.g:1 returning true or false as appropriate
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

//filter with includes
const petshop = [
  "cao: 10",
  "gato: 20",
  "cao: 20"
]

dog = petshop.filter(el => el.includes("cao"));
console.log(`results ${dog}`)

//11 - indexOf e.g: 1

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
arr = ['lactose','feijao','agua','queijo'];
arr.push('Suco light');


  index = arr.indexOf('agua'); //get agua index
  console.log(index);
  if(index !== -1){ //if index agua dif -1 
  arr.splice(index,1); //so remove this index value
  }
console.log(arr); 


// 12 splice  index ? + delete ? + add elements?
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

//https://gmapdev.netlify.app/demo/indexof_and_splice


//e.g 1
const cars = ['BMW','GOL','FIAT','FERRARI','MERCEDES','PAJERO'];
cars.splice(0,0,'new') // add 'new' to index 0 e removes nothing
console.log(cars);

//e.g 2
const cars2 = ['BMW','GOL','FIAT','FERRARI','MERCEDES','PAJERO'];
cars2.splice(0,1,'new') // add 'new' to index 0 e remove index 1
console.log(cars2)


/*
13 - Filter
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Como o nome já diz é um filtro e assim se faz, filtrando todos os elementos.
*/

arr = ['Al', 'Bra', 'Char', 'Delta', 'Echoss', 'Foxtrot']
x = arr.filter(word => word.length > 5 ) // works
f = arr.filter((item) => (item.length > 5 ));
console.log(f);

//filtra idade >= 21
ages = [15,17,20,21,24,25,30]

console.log(ages.filter(verage))
function verage(idade){
  return idade >= 21;
}

//arrow function
//c = num.filter((value) => { return value >=8}); //with {} e return

f = arr.filter((value) => value.startsWith("F"));


//filtro de category
nomes = ['DisplayPort', 'Notebook', 'RAM', 'HDMI', 'SSD'];

opt = 'SSD';
console.log(nomes.filter(filtra));

function filtra(category){
 return category == opt;
}


//filter startsWith
['Zulu','Alpha','Bravo','Charlie','Delta','Echo','Foxtrot'];
c = arr.filter((value) =>{
 return value.startsWith("C");   
});

console.log(c); //['Charlie']


//works with filter or find Array OBJ
var obj = {
  'students': [{
    "name:":"Geraldo",
    "child": "true",
    "Age": "29"
  },{
  "name":"Isabella",
    "child": "false",
    "Age":"5"
}
]
};

busca = obj.students.find(function (el){
  return el.Age >= 29;
});
console.log(busca);


//filtrando letras de um array com ternario response

words = arr.filter((word) => word.startsWith('F'));
words == '' ? console.log('nao') : console.log(words);
//ou alternative
filtra != '' ? console.log(filtra) : console.log('not');
filtra.length != 0 ? console.log(filtra) : console.log('not');

// filter, some, includes

const array = ["12","zuz","dev","Element","cam"];

// o que o filtro deve encontrar
const keys = ["1","e"];

let filbusca = array.filter(a => keys.some(e => a.includes(e)));
console.log(filbusca); // ['12', 'dev', 'Element'];


// Neste exemplo como não tem o "some" então precisamos informar o entire name
let filv4 = ["1","dev"].filter(val => array.includes(val));
console.log(filv4); // ['dev']
console.log(array.filter((val) => val.length > 5)); // ['Element']


// examplo com includes
let busca =  ["20","12","zuz","dev","Element","cam", "56","Deltra","Delly"].filter(a => a.includes("D")); 
console.log(busca); // (2) ['Deltra', 'Delly']

// Como não usamos o filter, requer entire name:
let getfil3 = ["E"].some(a => array.includes(a));
console.log(getfil3); // false

const 
get = ["o"], 
files = ['Geraldo', 'Algo', 'Felipe'],
res = files.filter(al => get.some(b => al.endsWith(b)));
console.log(res); // (2) ['Geraldo', 'Algo']





// 14 find

//find obj array
//e.g: 1
person = [{name:"Geraldo",city:"Maceio",age:"29"}, {name:"Felipe",city:"Palmeira",age:"28"}];

x = (person.find(esse => esse.name == 'Felipe'));
document.write(Object.values(x));


//find ternario response
f = arr.find((value) => value === 'Zulu');
f = f ? console.log(f) : console.log('nao encontrado');

//e.g: 2
 persons = [{name:"Geraldo",city:"Maceio",age:"29"}, {name:"Felipe",city:"Palmeira",age:"28"}];
search = 'Maceio';
console.log(persons.find(thisValue => thisValue.city == search));

//e.g: 3
persons = [{name:"Geraldo",city:"Maceio",age:"29"}, {name:"Felipe",city:"Palmeira",age:"28"}];

var buscar = persons.find(function (el){
  return el.age == 28;
})
console.log(buscar);

//e.g: 4
const persons = [
  { nome: "GERALDO", idade: 29, Estado: "RJ" },
  { nome: "FELIPE", idade: 25, Estado: "AL" },
];

find = persons.find(el => el.nome === "GERALDO");
find != undefined ? console.log(find) : console.log('not found');



// 15 join - method create e returns concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string
arr = ['fire', 'water', 'airplane', 'car']

console.log(arr.join()); // fire,water,airplane,car

console.log(arr.join('.')) // fire.water.airplane.car

console.log(arr.join('')) // firewaterairplanecar


// 16 concat - merge arrays
arr = [1,2,3,4,5]
arr2 = [6,7,8,9,10]
arr_all = arr.concat(arr2);
console.log(arr_all);

//17 - map - percorrer um vetor e obter um novo vetor cujo itens são resultados de uma função de callback
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

//way 3 filter
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
}]

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

//18 - findIndex return first element that passes a test

const person = [
  {nome:"Geraldo",idade:29},{nome:"Felipe",idade: 28},{nome:"Isabella",idade: 5,},{nome:"Isab",idade:10},
];
const menor = person.findIndex((value)=> value.idade < 18);
console.log(menor) //2

person[menor].idade += 2;
console.log(person) //index number 2 +2 anos = 2: {nome: 'Isabella', idade: 7

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


//20 - some - The Array.some() method checks if any of the elements in an array pass a test (provided as a function).
const ages = [3,10,18,20];

// function alone check maiores de 18
function check(age){
  return age > 18;
}
console.log(ages.some(check)); //maior de 18? true

//arrow function direct inline 
console.log(ages.some(el => el < 18)); //tem alguém menor de idade na lista? true 

//some in Object Array "com every também return boolean results"
const person = [
  { nome: "ISA", idade: 28, Estado: "SP" },
  { nome: "gmap", idade: 25, Estado: "AL" },
];
console.log(person.some(el => el.nome === "ISA")); // true
console.log(person.some(el => el.Estado === "RJ")); // false



// maiores que 7 arrow function alone
const ages = [3,10,18,20];
const check = (el) => (el > 7);
console.log(array.some(check)); //true

/*
e.g: some com includes
*/

//passando valores para vê se existe na lista
const array = ["12","zuz","dev"];
const check2 = ["dev","12"].some(el => array.includes(el));
console.log(check2); //true


// usando some com includes, talvez não seja a melhor opção, poderiamos usar apenas some ou includes
let search3 = ["zuz"].some(a => array.includes(a));
console.log(search3); // true

console.log(array.some(el => el == "dev")); // true
console.log(array.includes("dev")); // true


//21 - every
/*

* true if the function returns true for all elements.
* false if the function returns false for one element.
Parameters:

currentValue	Required, 
index	Optional
arr	Optional.
*/
const numbers = [4, 12, 16, 20];

function maior(value){
  return value > 10;
}
console.log(numbers.some(maior));

//example
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_every3


//Some vs Every
const numbers = [4, 12, 16, 20];
function maior(value){  
  return value > 10;
}

console.log(numbers.every(maior)); // false pq nem todos são >10
console.log(numbers.some(maior)); //true pq existe valores > 10


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


// 24 - findIndex - method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned. 
// retorna o primeiro elemento encontrado que sadisfazer o teste


const num = [1,30,40,5,10,15];
const Maior = (ele) => ele > 5; //who is large > 5 ?
console.log(num.findIndex(Maior)); // 1

/*
indexOf and FindIndex
*/

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

console.log(fruits.indexOf("blueberries")); //3

const pegaIndex = (val) => val === "blueberries";
console.log(fruits.findIndex(pegaIndex)); //3

/*________________________________________________________________*/
//filter, includes, some, every, indexOf, find, forEach

const person = [
  { nome: "GERALDO", idade: 29, Estado: "RJ" },
  { nome: "FELIPE", idade: 25, Estado: "AL" },
  { nome: "ISABELLA", idade: 5, Estado: "RJ" },
  { nome: "CAMILLY", idade: 10, Estado: "SP" },
  { nome: "ISA", idade: 28, Estado: "RS" },
];

console.log('includes',person.some(el => el.nome == "GERALDO")); // existe alguém chamado GERALDO? true

console.log('some',person.some(el => el.Estado === "SP")); // existe/alguém de SP? true

console.log('filter',person.filter(el => el.Estado === "RJ")); //(2) [{…}, {…}]

console.log('find', person.find(value => value.Estado === "RJ")); // get only 1 results even tiver mais

console.log('every',person.every(el => el.Estado === "SP")); // todos são de SP? false

person.forEach((el, ind) => console.log(ind)); // 1,2,3,4

const arr = [
  "CREDITO",
  "R$ 100",
  "DEBITO",
  "R$ 200"
]


console.log('some arr',arr.some(el => el === "CREDITO")); //true

console.log('includes', arr.includes("DEBITO")); //true

//filter with includes in object array do not work, use only includes!;
console.log('filter,includes',arr.filter(value => value.includes("R$"))); //(2) ['R$ 100', 'R$ 200']

/* check number even or odd */
const array = [1,2,3,4,5];

//keys para ser passadas como busca
const keys = [1,2,3,4,5];


//keys
console.log(keys.every(el => array.includes(el))); // existe todas as keys? //true
console.log(keys.filter(el => array.includes(el))); //filtra todos ele que includes na key

//keys
const filVal = ["5","10"];
const keys = ["5","10",5];

console.log('every',keys.every(el => filVal.includes(el))); //false
console.log('some',keys.some(el => filVal.includes(el))); //true
console.log([1,2,3].some(el => array.includes(el))); // tem algum elemento assim no array? true

console.log([].filter(el => array.includes(el))); // se true filtra e display ou vazio se for false

//functions
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
console.log(["A","B","C"].some(val => val == "B")); // existe B ? // true