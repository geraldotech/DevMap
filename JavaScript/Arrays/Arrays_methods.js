/*
JavaScript String and Array Methods

Table of JavaScript String and Array Methods
https://www.notion.so/geraldodev/Arrays-Strings-Methods-21cd45a06d6a4b1e83478c01d590ad26
*/

//🟢 1 - #Strings #Arrays #Length 
const x = ['BMW','GOL','LATAM','AMERICAN','BRAZIL','RAPPI'];

//📌display #length of Array direct
console.log(x.length);

//📌ou declando varivel
let tamanho = x.length;
console.log(tamanho);

//📌 func check number
function check(){
  let a = 10;
   if(a.length > 8) {
      console.log("maior que 8");
      return
   }
   console.log("menor que 8");
  }
//👉 Ternary
    console.log(["12345678"].length > 8 ? 'maior que 8' : 'menor que 8');

//📌size if a Array string
    console.log('Array 0 tem ', x[0].length);

//📌mostrando index de um determinado value
const arr = ["A","B","A","C","B","Z"];
for(let i = 0; i < arr.length; i++){
  if(arr[i] == "A"){
    console.log(arr[i], i); // A0, A2
  }
}


//🔰Strings in JavaScript is that we can access the characters in a string using its index
// https://www.freecodecamp.org/news/javascript-split-how-to-split-a-string-into-an-array-in-js/
let str = "Yes, You Can Do It!";

console.log(str[0]); // Y
console.log(str[1]); // e
console.log(str[2]); // s
console.log(str[3]); // ,
console.log(str[10]); // a

//📌 use -1 para pegar o último caractere da string
let str = "Geraldo";
console.log(str[str.length -1]);


//📂process-each-letter-of-text

var text = 'uololooo';

//📌With ES6 - Destructing
[...text].forEach((c) => {
  console.log(c)
});

//📌With of operator
for(const d of text){
  console.log(d);
}

//📌With ES5
for (var x = 0, c=''; c = text.charAt(x); x++) { 
  console.log(c); 
}
// https://stackoverflow.com/questions/1966476/how-can-i-process-each-letter-of-text-using-javascript

/* [=============================================================================]
🟢 2 - #substring  extrair uma sequência de caracteres de uma string. returns the substring.

substring(indexStart, indexEnd);
*/

//📌e.g usando o indexOf para auxiliar no parametro do substring

let str = "finding substring in string";
let ind = str.indexOf("sub");
console.log(ind); //8
console.log(str.substring(8)) //  substring in string

//📌e.g usando o lastIndexOf para auxiliar no parametro do substring

const mystr = "Did you hear my covert";
console.log(mystr.lastIndexOf("Li")); //34

//📌já notando as direnças entre substring e substr começando em 0 mesmo resultado
console.log(mystr.substring(0, 15)); // Did you hear my 
console.log(mystr.substr(0, 15)); // Did you hear my 

/*
The difference is in the second argument

📌 substring - second argument is the index to stop at (but not include),  
aceita apenas o end negativo contudo definindo 0 start positivo

📌 substr - second argument  is the maximum length to return.  accepts a negative starting position
🚩 MDN considers substr legacy. This feature is no longer recommended.
https://tinyurl.com/mzp65jky
*/

console.log("Geraldo".substring(1, 5)); //eral
console.log("Geraldo".substr(1, 5)); //erald
console.log("Geraldo".substring(0, 5)); //eral
console.log("Geraldo".substr(-4)); //Geraldo -4 letras da direita para esquerda => aldo
console.log("JavaScript".substr(-6)); // Script
console.log("Feriado".substr(-2)); // /do
console.log("JavaScript".substr(-5, 1)); // c
console.log("JavaScript".substr(-3, 2)); // ip
console.log("JavaScript".substring(2 ,-1)); // Ja

//🟢 3 - Display all array using for
for(i = 0; i < x.length; i++){
    console.log(x[i]);
}


// 4 - #sort
 const myarr = ['Penha',' Gramacho',' Caxias',' Central',' Bonsucesso'];
 console.log(myarr);
 var ord = myarr.sort();
 //console.log(myarr.sort());
 console.log(ord);


//🟢 5 - The #shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
const x = ['A', ' B', ' C',' D',' E'];
const first = x.shift();
console.log(x); //output (4) [' B', ' C', ' D', ' E']


//🟢 6 - The #unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
const cell = ['Nokia',' Apple',' Microsoft',' Samsung'];
//unshift alone mostra somente N itens do array
console.log(cell.unshift('Xiaomi','Lenovo'));
console.log(cell);

//🟢 7 - The #pop() method removes the last element from an array and returns that element. This method changes the length of the array.
const mercado = ['carnes',' bebidas', 'frios', 'frutas'];
//get only ultimo
console.log(mercado.pop());
//show array modificado
console.log(mercado);


//🟢 8 The #push() method adds one or more elements to the end of an array and returns the new length of the array.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
const n = [1,2,3,4,5];
const push = n.push(6,7,8,9,10);
console.log(n);

//🟢 9 - #reverse
//inverter array
 fruits.reverse();
 
/* [=============================================================================]
 10🟢 - #includes - boolean returning true or false as appropriate - Case-sensitivity

 - funciona com arrays syntax: includes(searchElement, fromIndex)

 - funciona com strings syntax: includes(searchString, position)
 
 - buscar na MDN...
 */
 const cars = ['BMW','GOL','FIAT','FERRARI','MERCEDES','PAJERO'];

 var y = cars.includes('BMW'); //true
 console.log(y);
 
 let item = 'FIAT'; //item a ser procurado
 let x = cars.includes(item);
 console.log(x); 
 
 if(x === true){
   console.log(cars.indexOf(item)); //if true so get index of item
 } else{ //if false
   console.log('nao existe');
 };

console.log(cars.includes("GOL", 2)); // inc after index 2 ? false

// usando LowerCase, includes, map e filter
const busca = cars.map(el => el.toLowerCase().includes('pajero'));
console.log(busca); // 5 false e 1 true
// para filtra apenas os true
console.log(busca.filter(Boolean)); // true


//OBS usar o index do includes com map != = só retorna false

//for Strings shortnames works

console.log("Geraldo".includes("Geraldo")); //true
console.log("Geraldo".includes("Ge")); //true
console.log("Geraldo".includes("ldo")); //true
console.log("Geraldo".includes("Geldo")); // false - precisa ser exato
console.log("PAJERO".toLowerCase().includes("pajero")); // true 

/*
POSITION
* String cada letra e espaço contam como position, iniciando em: zero
* Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.
*/
console.log("Browser compatibility".length); // 21
console.log("".length); // 0
console.log("Browser compatibility".includes("B",0)); // tem B na posicao 0 ? // true
console.log("Browser compatibility".includes("B",1)); // tem B na posicao 1 ? // false

console.log("Browser compatibility".includes("w",3)); //true
//encontrando index de um valor: 14
console.log("Browser compatibility".indexOf("ibi")); 
//apos index/position 17 tem i ? true pegou do ity
console.log("Browser compatibility".includes("i", 17)); 

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
*/

//🟢 11 - #indexOf e.g: 1

//demo => https://gmapdev.netlify.app/demo/indexof-preventdefault

function getx(){
  let n = document.getElementById("n").value
  const cars = ['BMW','GOL','FIAT','FERRARI','MERCEDES','PAJERO'];
  const index = cars.indexOf(n); //get index of element
  if(index == 1){  //case
    console.log('encontrado gol');
  } else if (index == 2){ //case
    console.log('encontrado fiat');
  } else { //case not found
    console.log("not found!");
  }
} 
//📌indexOf e.g: 2
const array = [1,2,3,4,5];
getindex = array.indexOf(5);
getindex > -1 ? console.log('item existe') : console.log('item nao existe') 

//📌indexof e.g: 3
const arr = ['lactose','feijao','agua','queijo'];
arr.push('Suco light');

const index = arr.indexOf('agua'); //get agua index
console.log(index);
if(index !== -1){ //if index agua dif -1 
arr.splice(index,1); //so remove this index value
}
console.log(arr); 
//📌Strings

console.log("Geraldo".indexOf("G")); // 0
console.log("Geraldo".indexOf("e")); // 1
console.log("Geraldo".indexOf("r")); // 2


//📌contando o numero de ocorrências
let msn = "You do not know what you do not know until you know";
let cont = 0;
let index = msn.indexOf("know");

while(index !== -1){
  cont++;
  index = msn.indexOf("know", index + 1)
}
console.log(cont);// 3

/* [=============================================================================]
🟢12 - #findIndex method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned. 
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
exemplos mesmo resultado, primeiro compara value ou index ou index e value
*/
let ranks = [1, 5, 7, 8, 10, 7];
let index = ranks.findIndex(
    (rank, index) => rank === 7 && index > 2
);

console.log(index);

console.log(ranks.findIndex((val, ind) => {
    if(ind > 2) return val === 7
    // > ou != if(ind != 2) return val === 7
}));

// shorthand 
console.log(ranks.findIndex((val, ind) => ind > 2 && val === 7)); //5


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

/*[=============================================================================]
🟢13 - #filter
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

//📌declaration function direct
const busca5 = arr2.filter(function(val){
  return val.startsWith("F");
});
console.log(busca5);

//📌 call function
const fil = obj.students.filter(filhos);
console.log(fil);

function filhos(tem){
  return tem.child; // return false add !tem.child
}

console.log(ages.filter(verage));
function verage(idade){
  return idade >= 21;
}

//📌 inside console
console.log(arr2.filter(function(a){
  return a.startsWith("C")
}));

//📌 arrow functions
console.log(arr2.filter(val => val.endsWith("s")));
console.log(arr.filter(l => l.length > 5));

const maiorIdade = obj.students.filter(ida => ida.Age > 18);
console.log(maiorIdade);

//📌 find aqui também works
const busca = obj.students.find(function (el){
  return el.Age >= 29;
});
console.log(busca);


//📌 ternary 
const words = arr.filter((word) => word.startsWith('F'));
words == '' ? console.log('nao') : console.log(words); // Foxtrot

//📌ou alternative
words != '' ? console.log(words) : console.log('not'); // Foxtrot
words.length != 0 ? console.log(words) : console.log('not'); // Foxtrot

//📌 best ?
!words ? console.log("not found") : console.log(words); // Foxtrot

const brazil = arr2.filter(pa => pa == "Bra");
!brazil ? console.log("nao") : console.log(brazil);


//📌 the index, what iteration we are on https://debbie.codes/blog/js-array-filter-method/
const callNom = ['Felipe', 'Char', 'Delta', 'Echoss', 'Foxtrot', ]
console.log(callNom.filter(function(val, index){
    //decide who should be returned
    if(index > 1){ //vao buscar nos index acima de 1
      return val.startsWith("F"); // Foxtrot
    }
}));

//📌forma negativa
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

//📌e.g 2
const petshop = ["cao: 10","gato: 20","cao: 20"];

dog = petshop.filter(el => el.includes("cao"));
console.log(`results ${dog}`);


//📌como buscar varios termos
const array = ["12","zuz","dev","Element","cam"];
const keys0 = ["zuz", "dev"];


const fil4 = keys0.filter(val => array.includes(val));
console.log(fil4);
//📌direct
console.log(["dev","cam"].filter(ba => array.includes(ba)));


//📌outro e.g com includes
let busca3 =  ["20","12","zuz","dev","Element","cam", "56","Deltra","Delly"].filter(a => a.includes("D")); 
console.log(busca3); // (2) ['Deltra', 'Delly']


const keys = ["1","e"];
const busca = array.filter(a => keys.some(e => a.includes(e)))
console.log(busca);  // ['12', 'dev', 'Element'];


//📌filtrando typeof
console.log([12,3,"2"].filter(val => {
  return typeof val === 'number';
}))

/* [=============================================================================]
como buscar varios termos com piece de informações adicionando o some o
*/

//📌toda as strings que incluir esse dados serão mostradas
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

//📌not that
const 
get = ["o"], 
files = ['Geraldo', 'Algo', 'Felipe'],
res = files.filter(al => get.some(b => al.endsWith(b)));
console.log(res); // (2) ['Geraldo', 'Algo']

//📌code this 
console.log(files.filter(o => o.endsWith("o")));

//📌filter odd with loop
const num = [];
for(let i = 0; i <= 10; i++){
  num.push(i);
}
console.log(num.filter((num) => num %2 == 1));

//To find the duplicate values, you just need to reverse the condition: !== ind
//see question 19
/*
📍https://www.figma.com/file/OhSMZ8e7SJlOQWD2iBuenv/how-filter-works?node-id=0%3A1&t=tqWIXLfIHMPrHqhF-0

📍https://dev.to/nomishah/remove-duplicates-from-an-array-using-indexof-and-filter-methods-2jeh
*/

//📌objetos duplicados from https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects

const arr = [{id: 1, name: 'one'}, {id: 2, name: 'two'}, {id: 1, name: 'one'}]

const ids = arr.map(o => o.id)
const filtered = arr.filter(({id}, index) => !ids.includes(id, index + 1))

console.log(filtered);



//📌visualizando o shallow copy do filter
const arrz = ['Z', 'B', 'Z', 'C', 'B',];
const busca = arrz.filter((val,ind) => val);

console.log(busca[0]); // Z
//📌até podemos modificar
busca[0] = "H"; 
console.log(busca[4]); // B

/* [=============================================================================]
🟢 14 - #find -  method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
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

/* [=============================================================================]
🟢 15 - #some - The Array.some() method checks if any of the elements in an array pass a test (provided as a function).
*/
const ages = [3,10,18,20];

// function alone check maiores de 18
function check(age){
  return age > 18;
}
console.log(ages.some(check)); //maior de 18? true

//arrow function direct shorthand 
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


/* [=============================================================================] 
🟢 16 - #every
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

/* [=============================================================================]
🟢 17 - #map - percorrer um array e obter um novo vetor cujo itens são resultados de uma função de callback
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

//get first letters
console.log(['BMW','GOL','LATAM','AMERICAN','BRAZIL','RAPPI'].map(el => el[0]));

//Getting index
console.log(arr.map((val, index) => [index,val]));

//https://stackoverflow.com/questions/1144705/best-way-to-store-a-key-value-array-in-javascript

//MAP add values in obj
const pessoa = [{
  name:"Geraldo",
  cidade:"Palmeira",
}];

let x = pessoa.map((value) => {
  return {
    value, "Active":true,
  }
})

/*
Contextualizando #map vs #flapMap
*/

let arr = [1, 3, 5, 7];

console.log(arr.map(val => val + 1)); //2,4,6,8
//Nested subArrways
console.log(arr.map(val => [val, val + 1])); // [[1, 2], [3, 4], [5, 6], [7, 8]] ❌

console.log(arr.map(val => [val, val + 1]).reduce((acc,curr) => acc.concat(curr))); // // [1, 2, 3, 4, 5, 6, 7, 8] ✅

console.log(arr.flatMap(val => [val, val + 1])); //1,2,3,4,5,6,7,8
//ou seja contém os valures do oldvalue concatenados
//https://blog.travismclarke.com/post/flatmap-vs-map/

/* [=============================================================================]
🟢 17.1 #replace  
*/
let txt = "Visit Microsoft";
let newtxt = txt.replace("Microsoft", "Google");
console.log(newtxt);

console.log("Geraldo Filho".replace(" ", "-")); // Geraldo-Filho
  
//map and replace and transformar string em number
  const n = ["a 199","a 200","a 300"];
  const num = n.map(function(int){
      return +int.replace("a ",""); // ou  return Number(int.replace("a ",""));
  });
  console.log(num);

// Map.set https://stackoverflow.com/questions/63595841/find-element-in-map-by-its-property-value


//📌replace
let name = "gg";
let rpl = name.replace("gg","Felipe");
console.log(rpl);

//JSON.stringify change output
let a = '[[{"nome":"ISA"}]]';
console.log(a.replace(/["}{}[]|(])/g,"")); //nome:ISA

/*
https://www.w3schools.com/jsref/jsref_replace.asp
https://stackoverflow.com/questions/16576983/replace-multiple-characters-in-one-replace-call

CPF formatado
https://stackoverflow.com/questions/18510845/maxlength-ignored-for-input-type-number-in-chrome
*/
  <input type="number" id="test" onInput="this.value = this.value.slice(0, 11)"/>  

     document.querySelector("#cpf").addEventListener("input", show);
    function show (e){   
      const str = this.value.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4")
      console.log(str);
    }


/* [=============================================================================]
🟢 18 - #splice  index ? + delete ? + add elements? | emendar
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

/* [=============================================================================]
🟢 19 -  #split - The split() method splits (divides) a string into two or more substrings depending on a splitter (or divider), split the string based on the space ('  ') character
🔰 sempre retorna: An Array of strings, split at each point where the separator occurs in the given string.
🔰split - dividir | split second - fração de segundos / dividir

*/

//📌 return a new arr each char
console.log("Geraldo".split(""));  //['G', 'e', 'r', 'a', 'l', 'd', 'o']
let a = "Rio de Janeiro";

//📌 return a new arr between the spaces
//If the separator parameter is omitted, an array with the original string is returned:
const myarr2 = "Rio de Janeiro".split(' ');
console.log(myarr2); // ['Rio', 'de', 'Janeiro']
//📌 acesso por index
console.log(myarr2[0]) // Rio
console.log(myarr2[1]) // de
console.log(myarr2[2]); //Janeiro

//📌 get arrays index
console.log(myarr[2]) //Janeiro

//📌 limitando output and no space divite todos os caracteres
const myarr2 = a.split("",2);
console.log(myarr2)  //['R', 'i']

//📌 When you invoke the split() method on a string without a splitter, it returns an array containing the entire string.
let a = "Rio de Janeiro";
const myarr = a.split();
console.log(myarr); // ['Rio de Janeiro']

//📌 com array
console.log(["Geraldo","filho","na"].map(val => val.split("")));

//📌 Pequena comparação com o slice
const ts = "Tale as old Time";
console.log(ts.split("", 2)); // ["T". "a"]
console.log(ts.slice(0, 2)); // Ta

//📌 usando com join
const tag = "Geraldo Filho";
let sub = tag.split("");
console.log(sub);
console.log(sub.join("-")); // G-e-r-a-l-d-o -F-i-l-h-o

//📌limit
const myarr4 = "DEVMAP.code".split("", 2)
console.log(myarr4); // (2) ['D', 'E']

//📌Interate usando array map()
console.log(["Geraldo","filho","na"].map(val => val.split("")));


//📌Interate usando forEach()
["Geraldo","filho","na"].forEach(el => {
  console.log(el.split(""));
});

// 📌 ES6: How to Split with Array Destructuring
let name = "Geraldo Filho";
let [nome, surname] = name.split(" "); //array e destructuring
console.log(nome, surname);


//📌 Split with Spread
//checkout Rest_Parameters_and_Spread_Parameters.js


// 📌 truque convert and filter
const txt = "method extracts a section of a string and returns";
const me = txt.split(" ", ); // each word in a array index
console.log(me.filter(val => val.startsWith("s"))); // section, string 


//❗ using an empty string as the splitter returns an empty array.
console.log("".split(""));
//❗ method on an empty string('') without a splitter will return an array with an empty string. It doesn't return an empty array.
console.log("".split()); // [ '' ]

// 🌐usar regex e Destructuring? https://www.freecodecamp.org/news/javascript-split-how-to-split-a-string-into-an-array-in-js/



/* [=============================================================================]
🟢 20 - #slice  - slice(start, end not included);
🔰 fatiar - extracts a section returns it as a new string
🔰 retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. 
🔰 O Array original não é modificado.

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
*/

//📌Arrays
const arr2 = [0,1,2,3,4,5];
let b = arr2.slice(1,3); //get itens between 1 e 2
console.log(b);

//📌pegar o ultimo item
console.log(["A","Geraldo","Z"].slice(-1));


//📌Strings
console.log("Geraldo".slice(0,3)); // Ger 0,1,2 > die não inclui o ultimo

const txt = "method extracts a section of a string and returns";
console.log(txt.slice(6, 25))// extracts a section
console.log(txt.length, txt.slice(-7))// 49.lenght - 7 = returns
console.log(txt.length, txt.slice(18, -24));


// entre 18 até 25 => 49.lenght -24 = 25 
// 18, -24 é o mesmo que passar 18, 25 e no como podemos ver abaixo[25] é vazio
//from scratch usando os proprios index de strings
console.log(txt[18]); //s
console.log(txt[19]); //e
console.log(txt[20]); //c
console.log(txt[21]); //t
console.log(txt[22]); //i
console.log(txt[23]); //o
console.log(txt[24]); //n
console.log(txt[25]); // vazio
console.log(txt[26]); // o

// ou jogue esse forEach no console e vai ver o mesmo resultado
[...txt].forEach((val, ind) => {
  console.log(ind,val)
});



/* [=============================================================================]
🟢 21 - #join - method create e returns concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string */
const arr = ['fire', 'water', 'airplane', 'car']

console.log(arr.join()); // fire,water,airplane,car
console.log(arr.join('.')) // fire.water.airplane.car
console.log(arr.join('')) // firewaterairplanecar


//🟢 22 - #concat - merge arrays
arr = [1,2,3,4,5]
arr2 = [6,7,8,9,10]
arr_all = arr.concat(arr2);
console.log(arr_all);

/* [=============================================================================]
🟢 //23 - #search()

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search


/* [=============================================================================]
🟢 24 - #repeat
*/ 
const lt = "Geraldo";
console.log("hello", lt.repeat(10));

/* [=============================================================================]
🟢 25 - #startsWith() #endsWith() - for Strings
*/ 
console.log("Geraldo".startsWith("G")); //true
console.log("Geraldo".endsWith("G")); //false
//📌não apenas 1 letra
console.log("Geraldo".startsWith("Ger")); //true
console.log("Geraldo".endsWith("aldo")); //true

//📌todas as letras
console.log("Geraldo".startsWith("Geraldo")); //true
console.log("Geraldo".endsWith("Geraldo")); //true

/* [=============================================================================]
🟢 26 - #forEach
*/ 
//checkout in https://github.com/geraldotech/DevMap/blob/main/JavaScript/forEach.js

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

/*-*[=============================================================================]
🟢 27 #toString, toFixed, toPrecision, toUpperCase, toLowerCase 

📌checkout README https://github.com/geraldotech/DevMap/tree/main/JavaScript
*-*/

/* [=============================================================================]
🟢 28 - #lastIndexOf
 returns the index of the last occurrence of the specified substring
*/ 

console.log("Geraldo".lastIndexOf(""));
const arr = ["Geraldo", "Costa"];
console.log(arr.map(val => val.lastIndexOf(""))); // 7 , 5


const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

console.log(paragraph.lastIndexOf("lazy?")); // 78
//nesse caso indexOf retornou o mesmo resultado
console.log(paragraph.indexOf("lazy?")); // 78

/* [=============================================================================]
🟢 29 - match() https://ricardo-reis.medium.com/o-tipo-string-no-javascript-e3fb621856d1
*/
/* [=============================================================================]
🟢 30 - trim() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
*/
/* [=============================================================================]
🟢 31 - String.prototype.#search() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
*/



/*-*[===========================MIX EXAMPLES======================================]*-*/
const arr = ["CREDITO", "R$ 100", "DEBITO", "R$ 200"];
// includes e some alone looks no difference
console.log('some arr',arr.some(el => el === "CREDITO")); //true
console.log('includes', arr.includes("DEBITO")); //true


// console.log(arr.includes("R$")); < isso não funciona, includes requer fullname, usar flter
console.log('filter,includes',arr.filter(value => value.includes("R$")));  //(2) ['R$ 100', 'R$ 200']

/*-*[===========================🟢MIX EXAMPLES====================================]*-*/

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
//convert string to array use map to get number and sum with reduce
console.log("2+3+2".split("+").map(el => +el).reduce((val, ind) => val+= ind)); // 7


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
Depende do objetivo! no caso de every/some quando vai verificar se aquela lista de keys existe no Array, então chamar primeiro as keys.

* caso que whatever
console.log(["Geraldo", "Barra", "Georgeo"].filter(el => api.includes(el))); // Geraldo, Georgeo
console.log(api.filter(val => ["Geraldo", "Barra", "Georgeo"].includes(val))); // Geraldo, Georgeo

* outro e.g
//todos da key tem no arr ? // true
console.log(["Geraldo", "CostAo"].every(val => api.includes(val)));

//todos do arr tem na key ? // false
console.log(api.every(val => ["Geraldo", "CostAo"].includes(val)));

*/
console.log(notas.some(a => keyz.includes(a))); // true

const name = ["Geraldo", "Costa", "Barra", "George", "Aome"];
const letter = name.filter(val => ["G","C"].some(b => val.startsWith(b)));
console.log(letter); // Geraldo, George

/*-*[=============================================================================]*-*/
//🟢Remove duplicate itens usando new Set ES6

//Arrays
const arr = ["A","B","A","C","B","Z"];
console.log(Array.from(new Set (arr))); //A, B, C, Z
console.log([...new Set(arr)]);  //A, B, C, Z

//@WebDevSimplified https://www.youtube.com/shorts/V81Fb6Yh-UQ
const arr = ["Z", "B", "Z", "C", "B"];
const unique = new Set(arr);
console.log(unique);

const unique2 = new Set(arr);
unique2.add("Me");
console.log(unique2.has("Z"));
console.log(unique2);

// it will not work with objects objects are compared they are compared by reference and not by value. 
//via https://medium.com/@rbkannan1/filter-an-array-for-unique-values-in-javascript-27dd3dfbe7a8


// Objects
const pessoas = [
  {nome:"Fel", value: '45'},
  {nome:"Geraldo", value: '99'},
  {nome:"Geraldo", value: '99'},
  {nome:"Costa", value: '14'},
]

console.log(pessoas.filter((ele, ind) => pessoas.findIndex(obj => obj.value == ele.value) == ind));


// Reduce and includes
const chars = ["A","B","A","C","B","Z"];
console.log(chars.reduce((acc, char) => acc.includes(char) ? acc : [...acc, char], []));

const estados = ["GO","AL","AL","ES", "RJ","SP","RJ"];
console.log(estados.reduce((val, ind) => val.includes(ind) ? val: [...val, ind], []));



/*
_______________________🟢EXERCICIOS🟢_____________________________
https://www.notion.so/geraldodev/Exercicios-1-2a427cfc7d5b4e989ac1da54a3f7e21a
*/
const api = ["Geraldo", "CostAo", "Barrao", "Georgeo", "Aomeo","asoa","oplz"];

// 1 - quero saber se todos terminam com a vogal "o":
const o = api.every(el => el.endsWith("o"));
console.log(o); 

// 2 - filter todos terminam com a vogal "o";
console.log(api.filter(val => val.endsWith("o")));;

// 3 - filter todos que começam com a letra G e B
console.log(api.filter(val => ["G","B"].some(sum => val.startsWith(sum))));

// 4 - filtrar a letra maiuscula A e l
console.log(api.filter(val => ["A","l"].some(b => val.includes(b))));

// 5 - todos inclui "o"?
console.log(api.every(el => el.includes("o")));

// 6 - filter maior ou igual a 7
console.log(api.filter(el => el.length >= 7));

// 7 - filter quem inclui "m"
console.log(api.filter(val => ["m"].some(a => val.includes(a))));
// poderia usar apenas includes!! api.filter(el => el.includes("m"))

// 8 - filter quem inclui "al"
console.log(api.filter(val => ["al"].some(e => val.includes(e))));
//poderia usar apenas includes!

// 9 - inclui "Aomeo"
console.log(api.includes("Aomeo"));

// 10 - encontrar o primeiro com a letra "G"
console.log(api.find(val => val.startsWith("G")));
//alternative
console.log(api.find(el => el.includes("G")));

// 11 - filtrar todos que terminam com "o", não incluir o primeiro item, neste caso o index[0]:
console.log(api.filter(function(val, index){
    if(index > 0){
      return val.endsWith("o")
    }
}));

// 🔰alternative arrow
console.log(api.filter((el, ind) => { if(ind > 0 ) return el.endsWith("o")}));

// 🔰alternative &&
console.log(api.filter((val,index) => index > 0 && val.endsWith("o")))
/*-*[=============================================================================]*-*/
// 👉SUPER DICA: alternative indicando o proprio value
console.log(api.filter(val => {
  if(val != "Geraldo") return val.endsWith("o");
}));

// 🔰 arrow shorthand filter exceto sem index usando value
console.log(api.filter(val => val != "Geraldo" && val.endsWith("o")));


/*-*[=============================================================================]*-*/
/* getting auto index 

**duas alternativas** neste caso onde é passado uma condição 
*/
const pegain = api.findIndex(val => val.endsWith("o"));
// e o quando sabemos o nome exato
//const pegain = api.indexOf("Geraldo");
console.log(pegain);
console.log(api.filter((val, ind) => {
  if(ind != pegain) return val.endsWith("o");
}));

//mesmo resultado arrow shorthand
console.log(api.filter((val, ind) => val.endsWith("o") && ind != pegain));
//mesmo resultado condicoes invertidas
console.log(api.filter((val,index) => index != pegaInde && val.endsWith("o")))

// 12 - Todos esses itens existe no array ? ["Geraldo", "CostAo"]
console.log(["Geraldo", "CostAo"].every(val => api.includes(val))); // true

// 13 - Alguns desses itens tem no array ? ["Geraldo","CostAoo"]
console.log(api.some(al => ["Geraldo","CostAoo"].includes(al)));

// 14 - filter todos que termimam com a e z
console.warn("novo",api.filter(val => ["a","z"].some(al => val.endsWith(al))));
//alternative
function vogais(el){
  return ["a","z"].some(val => el.endsWith(val))
 }

// 15 - filter a letra "A"
console.log(api.filter(val => val.includes("A")));

// 16 - Get all names.length
api.forEach((el, ind)=> {
  console.log(el.length)
});

// 17 - find primeiro ele == 6
console.log(api.find(el => el.length == 6)); //CostAo

// 18 - encontrar o element == 6 - pulando o primeiro que foi encontrado
console.log(api.find((el, ind) => { // em vez de: "CostAo", pega: "Barrao"
  if(ind > 1){
    return el.length = 6
  }
}));

//encontra o index do primeiro.length automaticamente
function primeiro(el){
  return api.findIndex(val => val.length == 6);
}

console.log(primeiro()); // 1
console.log(api.find((val, ind) => { //Barrao
 if(ind > primeiro()) return val.length == 6
}));

//alternative shorthand
console.log(api.find((val, ind) => val.length == 6 && ind != primeiro()));

//alternative declarando string
console.log(api.find((item) => item != "CostAo" && item.length == 6));

//tudo em uma linha
console.log(api.filter((val,index, ArrAtual) => {
  if(index > ArrAtual.findIndex(val => val.length == 6)){
    return val.length == 6
  }
}));

//19 - Dado o Array abaixo remover os valores duplicados

const arr = ['Z', 'B', 'Z', 'C', 'B',];
console.log(arr.filter((val, ind) => {
    console.log(val);
    console.log(ind);
  return arr.indexOf(val) === ind; 
}));

//alternativa podemos usar 3 parametros no filter, value, index, ArrayAtual, então o indexOf chama esse parametros ao inves do Array original diretamente
console.log(arr.filter((val, ind, arrAtual) => {
  return arrAtual.indexOf(val) == ind
}));


// 20 👉pegar multiple Index de um Array multiple ways to do it
//https://stackoverflow.com/questions/52154331/how-to-get-multiple-indexes-of-array-by-a-value-in-pure-javascript-value-exact

//🔰criar um array vazio
let index = [];
let filtro = api.filter((val,ind) => {
  index.push(ind);
});
console.log(index);

//🔰pegar multiple Index de um Array 2
//filtra os valores e salva os index em um array vazio
let index2 = [];
let filtro2 = api.filter((val,ind, atual) => {
  if(val.startsWith("G")){
    return index2.push(ind);
  }
});

console.log(filtro2); //Geraldo, Georgeo
console.log(index2); // 0,3

//🔰 forEach if push
let index3 = [];
api.forEach((val,ind) => {
  if(val.startsWith("G")){
    index3.push(ind, val); //adiciona o index e value da condição
    
  }
})

console.log(index3); // 0 Geraldo, 3 Georgeo

//🔰 reduce if push

let index4 = [];
const res = ["Ger", "Mi", "Goo"].reduce((acc, currElement, index) => {
  if(currElement.startsWith("G"))
  index4.push(index);
  return index4;
}, [])

console.log(index4); // 0,3


//visite for of / forEach para simples if statement


/*
_______________________EXERCICIOS 2_____________________________
*/

const itens = ["home.html","downloads.html","index.html","main.js","index.js"];
console.log(itens.filter(val => val.includes("html"))); //home, downloads, index

//filtre todos com .html exceto o index.html, quando você sabe o determinado index
console.log(itens.filter((val, ind) => { //home e downloads
  if(ind != 2) return val.includes("html"); // qual index não deve filtrar, no caso o index.html
}));

/*
Mais e se não soubermos o determinado index e quando o mesmo pode mudar a qualquer momento?
👉 usar o findIndex
*/

function achaInd(val){
  return val == "index.html";
}
const indItem = itens.findIndex(achaInd);
console.log(indItem); // 2


// retorna todos que inclui html exceto o index do indItem
console.log(itens.filter((val, ind) => {
  if(ind != indItem) return val.includes("html")
}));  
  
// retorna todos que inclui html exceto o index do indItem - shorthand
 console.log(itens.filter((val, ind) => val.includes("html") && ind != indItem));