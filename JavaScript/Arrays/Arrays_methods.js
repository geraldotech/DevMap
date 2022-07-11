//JavaScript String and Array Methods

/*
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

//11
//indexOf e.g: 1
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


//e.g 1
const cars = ['BMW','GOL','FIAT','FERRARI','MERCEDES','PAJERO'];
cars.splice(0,0,'new') // add 'new' to index 0 e removes nothing
console.log(cars);

//e.g 2
const cars2 = ['BMW','GOL','FIAT','FERRARI','MERCEDES','PAJERO'];
cars2.splice(0,1,'new') // add 'new' to index 0 e remove index 1
console.log(cars2)


//13
  //filter
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

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
console.log(busca)


//filtrando letras de um array com ternario response
words = arr.filter((word) => word.startsWith('F'));
words == '' ? console.log('nao') : console.log(words);

// 14
//find obj array
//e.g: 1
person = [{name:"Geraldo",city:"Maceio",age:"29"}, {name:"Felipe",city:"Palmeira",age:"28"}];

x = (person.find(esse => esse.name == 'Felipe'));
document.write(Object.values(x));


//find ternario response
f = arr.find((value) => value === 'Zulu');
f = f ? console.log(f) : console.log('nao encontrado')


//e.g: 2
 persons = [{name:"Geraldo",city:"Maceio",age:"29"}, {name:"Felipe",city:"Palmeira",age:"28"}];
search = 'Maceio';
console.log(persons.find(thisValue => thisValue.city == search));

//e.g: 3
persons = [{name:"Geraldo",city:"Maceio",age:"29"}, {name:"Felipe",city:"Palmeira",age:"28"}];

var buscar = persons.find(function (el){
  return el.age == 28;
})
console.log(buscar)


// 15 join - method create e returns concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string
arr = ['fire', 'water', 'airplane', 'car']

console.log(arr.join()) // fire,water,airplane,car

console.log(arr.join('.')) // fire.water.airplane.car

console.log(arr.join('')) // firewaterairplanecar


// 16 concat - merge arrays
arr = [1,2,3,4,5]
arr2 = [6,7,8,9,10]

arr_all = arr.concat(arr2);

console.log(arr_all)


//17 - map - percorrer um vetor e obter um novo vetor cujo itens são resultados de uma função de callback
//way 1
const arr = [1,2,3,4,5];

arrn = arr.map(x => 2** x);
console.log(arrn) //(5) [2, 4, 8, 16, 32]
//way 2

const arr2 = [1,2,3,4,5];
arr2n = arr2.map((item) => {
  return item ** 2;
})
console.log(arr2n) //(5) [1, 4, 9, 16, 25]

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
const ages = [3,10,18,20]

console.log(ages.some(check));
function check(age){
  return age > 18;
}

//21 - every
const numbers = [4, 12, 16, 20];

function maior(value){
  return value > 10;
}
console.log(numbers.some(maior))