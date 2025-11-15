## Objects vs. Arrays

Both objects and arrays are considered “special” in JavaScript. Objects represent a special data type that is mutable and can be used to store a collection of data (rather than just a single value). Arrays are a special type of variable that is also mutable and can also be used to store a list of values.

## When to Use Objects

Objects are used to represent a “thing” in your code. That could be a person, a car, a building, a book, a character in a game — basically anything that is made up or can be defined by a set of characteristics. In objects, these characteristics are called properties that consist of a key and a value.

- [Access](#access)
- [add](#add)
- [change](#change)
- [New property](#property)
- [remove](#remove)
- [Concatenar](#concatenar)
- [Object.Values, keys, entries](#allitens)
- [Object.fromEntries](#objectfromentries)
- [Constructor](#constructor)
- [Object.create](#objectcreate)
- [ObjectMethods](#object-methods)
- [Object.Freeze](#objectfreeze)
  - [Object.isFrozen](#objectisFrozen)
  - [Object.is()](#objectis)
- [objecthasown - hasownproperty ](#objecthasown-e-hasownproperty)
- [For in and in](#for-in)

### add

```js
// Basic object syntax
const object = {
  keys: 'values',
}

// my example
const geraldo = {
  name: 'Geraldo Filho',
  age: 30,
  Developer: true,
}
```

### access

```js
console.log(geraldo.age)
console.log(geraldo['age'])

const mykey = 'age'
console.log(geraldo[mykey])

const techContent = {
  node: 'Node content',
  js: 'JavaScript content',
  html: 'HTML content',
}

let myvar = 'js'

console.log(techContent[myvar])
console.log(techContent['js'])
console.log(techContent.js)

const checkvalues = (value) => {
  return techContent[value] || '404 not found'
}

console.log(checkvalues('js'))
console.log(checkvalues('jsx'))
```

### change

- Dot notation

```js
geraldo.age = 20
```

- Bracket notation

```js
geraldo['age'] = 20
```

### property

- Adicionando novas propriedades

```js
geraldo.travel = ['Maceio', 'Rio']
```

### remove

```js
delete geraldo.name
```

### concatenar

```js
const person = {
  name: 'Geraldo',
  age: 29,
  city: 'Maceio',
}
console.log(person)

// concatenar
document.write(person.name + ' mora na cidade de ' + person.city)

// concatenar
document.getElementById('objeto2').innerHTML = person.name + ' idade atual: ' + person.age

// multiple variables in one line
const persons = {
  nome: 'Geraldo',
  surname: 'Filho',
}

console.log(persons.nome)
console.log(persons.surname)

// shorthand atribuir a uma const
const { nome, surname } = persons
console.log(nome)
console.log(surname)
```

### Object.keys(), Objects.values(), Object.entries()

<a name="allitens"></a>

```js
const obj = {
  nameKey: 'pessoaVal',
  ageKey: 30,
  systemKey: 'WindowsVal',
}

Object.keys(person)
//✨ display the `keys` string-keyed property names: (also called a “property name”)
//(3) ['nameKey', 'ageKey', 'systemKey']

Object.values(person)
//✨ display `values` (3) ['pessoaVal', 30, 'WindowsVal']

Object.entries(person)
//✨ returns an Array of a given object's own enumerable string-keyed property [key, value]

// (3) [Array(2), Array(2), Array(2)]
// 0: (2) ['nameKey', 'pessoaVal']
// 1: (2) ['ageKey', 30]
// 2: (2) ['systemKey', 'WindowsVal']

//✨ JS Objects try:

console.log(Object.keys(window)) // document
console.log(Object.values(window)[2]) //#document
```

### Object.fromEntries()

```js
// ES2019 introduced the Object.fromEntries() method that allows you to easily convert a list of key-value pairs into an object.

let arr2 = [
  ['color', 'red'],
  ['borderWidth', '1px'],
]
console.log(Object.fromEntries(arr2)) // {color: 'red', borderWidth: '1px'

/*
✔ The Object.fromEntries() performs the reverse of Object.entries().
✔ transform an iterable into an object.
*/
```

### Object Methods

```js
const smart = {
  open: function () {
    console.log('open conexao')
  },
  close: function () {
    console.log('fechar conexao')
  },
}
smart.open()
smart.close()

//eg2
const numero = {
  par: function (v) {
    console.log(v % 2 === 0)
  },
  impar: (v) => console.log(v % 2 != 0),
  potencia: (v) => {
    console.log(2 ** v)
  },
}

numero.par(2)
numero.impar(2)
numero.potencia(2)

//Simulate a JavaScript Object
const windowx = {
  document: {
    getElemenyById: function (id) {
      console.log(`getElemenyById:`, id)
    },
    querySelector: (val) => {
      console.log(`querySelector:`, val)
    },
  },
}

windowx.document.getElemenyById('ElementId')
windowx.document.querySelector('#id')
```

### Object.Freeze

```js
const obj = {
  prop() {},
  foo: 'footer',
}

Object.freeze(obj)
obj.foo = '<rodape/>'
obj.article = '<article/>'
delete obj.prop

console.log(obj)
```

### Object.isFrozen()

`console.log(Object.isFrozen(obj));`

### Object.is()

```js
const geraldo = {
  name: 'Geraldo Filho',
  age: 30,
  idade: 30,
  Developer: true,
}

console.log(Object.is(geraldo.age, geraldo.idade))
//same
console.log(geraldo.age == geraldo.idade)
```

### Object.create()

```js
// Using this for undeclared keys eg: `this.name` and `this.valor`[corresponde a um valor para uma function nesse obj]
const register = {
  humano: false,
  age: 10,
  Estado: 'RJ',
  info: function () {
    //arrow function here returns "undefined" in this.name
    console.log(`My name is ${this.name}, tenho ${this.age} e moro no ${this.Estado}`)
    console.log(this.gnn(this.valor))
  },
  gnn: function (val) {
    return 2 ** val
  },
}

const eu = Object.create(register)
eu.name = 'Geraldo'
eu.age = 31
eu.Estado = 'Maceio'
eu.humano = true
eu.valor = 7
eu.info()
```

### Object.assign

```js
const o = { name: 'Geraldo' }
const o2 = { age: 30 }
const o3 = { city: 'Duque de Caxias - RJ' }

const obj = Object.assign(o, o2, o3)
console.log(obj)
```

### Object.hasOwn e hasOwnProperty

- Ambos verificam se a propriedade é própria do objeto, e não herdada do prototype.
- Object.hasOwn() foi introduzido no ECMAScript 2022 para substituir o antigo hasOwnProperty

```js

const obj = { a: 1 }
obj.b = // add diretamente ao objeto

console.log(Object.hasOwn(obj, 'a')) // true
console.log(Object.hasOwn(obj, 'b')) // true herdade
console.log(obj.hasOwnProperty('a')) // true

/* 
Segurança
hasOwnProperty pode ser sobrescrito no objeto, quebrando o código:
*/
const obj2 = {
  hasOwnProperty: () => false,
  a: 1,
}

console.log(obj2.hasOwnProperty('a')) // false

// Object.hasOwn() nunca quebra, porque não depende do objeto:

console.log(Object.hasOwn(obj2, 'a')) // true

// Object.hasOwn() é a forma recomendada hoje.
const myobj = {
  name: 'Geraldo Filho',
  age: 30,
  idade: 30,
  Developer: true,
}
myobj.city = 'Maceio' // inherited

console.log(Object.hasOwn(myobj, 'city')) // false
console.log(Object.hasOwn(myobj, 'aged')) // true

/* exemplo de herdada */

const pai = { x: 10 }
const filho = Object.create(pai)

console.log(Object.hasOwn(filho, 'x')) // false -> herdada do pai
filho.y = 20
console.log(Object.hasOwn(filho, 'y')) // true -> própria

console.log(pai)
console.log(filho)
```

### for in

The in operator returns true

### in

```js
console.log('city' in geraldo) // true
```

for in - work in Array but não deve ser usado [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in#itera%C3%A7%C3%A3o_em_arrays_e_for...in)

```js
// for in is a method for iterating over "enumerable" properties of an object.

const pessoas = {
  01: 'Geraldo',
  02: 'Felipe',
  03: 'Bella',
  04: 'Milly',
}

// Scratch: getting the keys
for (let key in pessoas) {
  console.log(key)
}

// If perform `pessoas` vai retonar todos os values duplicados, por isso devemos chamar junto com a chave

for (const key in pessoas) {
  console.log(pessoas) //👉 ❌
}

//👉 o que fazer passar a key na chamada👍
for (let key in pessoas) {
  console.log(pessoas[key])
}

//🔰 key+key simples só chamar a key de forma independente.
for (let key in pessoas) {
  console.log(key, pessoas[key])
}

//👉 print no HTML:
for (const key in pessoas) {
  p.innerHTML += key + ': ' + pessoas[key]
}

//👉👉 beautiful string literal:
p.innerHTML += `${key} - ${pessoas[key]} `

// for in key:value + document.createElement...

// ol ficar dentro do for-in vai repetir várias vezes sem necessidade.
let ol = document.createElement('ol')

for (let [keys] in pessoas) {
  let li = document.createElement('li')

  li.innerHTML += pessoas[keys] + '<br>'
  ol.appendChild(li)
  document.body.appendChild(ol)

  //  <ol id="a"></ol>
  // a.innerHTML += "<li>" + keys + "/li>";
}

//👉 render HTML Array[Objects] using `for in` and `for of` checkout Arrays > Blog_Settings2
//github.com/geraldotech/DevMap/blob/main/JavaScript/Arrays/Blog_Settings2/main.js

//👉 iterating over Array to get Index
function getIndex(arr) {
  for (const tem in arr) {
    console.log(tem)
  }
}

getIndex(['A', 'B', 'C'])

//# contex for in and for of
const arr = ['a', 'b', 'c']

//
for (let i in arr) {
  console.log(i) // 0,1,2
}

for (let i of arr) {
  console.log(i) // a,b,c
}

for (let [i, v] of arr.entries()) {
  console.log(i) // 0,1,2
}

//
for (let i in arr) {
  if (arr[i].includes('a')) {
    console.log(arr[i]) // a
  }
}

for (let i of arr) {
  if (i.includes('a')) {
    console.log(i) // a
  }
}

//
for (let i in arr) {
  if (i == 2) {
    console.log(arr[i]) // c
  }
}

for (let [i, v] of arr.entries()) {
  if (i == 2) {
    console.log(v) // c
  }
}

//#
const obj = [
  { id: 1, name: 'Geraldo' },
  { id: 2, name: 'Costa' },
]

// remove zeros from
const pessoas = {
  1: 'Geraldo',
  2: 'Felipe',
  3: 'Bella',
  4: 'Milly',
}

// get obj has id
for (let i in obj) {
  if (Object.hasOwn(obj[i], 'id')) {
    console.log(obj[i]) // {id: 1, name: "Geraldo"}, {id: 2, name: "Filho"},
  }
}
```

### iterate object with: forEach / of of

```js
const pessoas = {
  01: 'Geraldo',
  02: 'Felipe',
  03: 'Bella',
  04: 'Milly',
}

Object.keys(pessoas).forEach((item) => {
  console.log(item + ' - ' + pessoas[item])
})

// HTML não esquecer do +=

Object.keys(pessoas).forEach((val) => {
  res.innerHTML += val + ':' + pessoas[val]
})

for (const p of Object.keys(pessoas)) {
  console.log(p, pessoas[p])
}
// returns an array of a given object's own enumerable string-keyed property key-value pairs. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

for (const [key, val] of Object.entries(pessoas)) {
  console.log(key, val)
}
// forEach and if
let uses = [
  { name: 'Geraldo', age: 30, login: true },
  { name: 'Costa', age: 15, login: true },
  { name: 'Felipe', age: 12, login: true },
]
uses.forEach((use) => {
  if (use.age <= 18) {
    use.login = false
  }
})
```

```js
const obj = {
  name: 'Jon Doe',
  username: 'jon-doe',
  email: 'jon-doe@unknown.com',
}

// obj to JSON geralmente em Post/PUT Resquests
const post = JSON.stringify(obj)
console.log(post)

// voltar a ser obj
console.log(JSON.parse(post))
```

!important :arrow_right: LEITURA

### constructor

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [https://www.w3schools.com/js/js_object_constructors.asp](https://www.w3schools.com/js/js_object_constructors.asp);

- [difference-between-array-and-array-of-objects-in-javascript/](https://www.geeksforgeeks.org/difference-between-array-and-array-of-objects-in-javascript/);

- [https://medium.com/@zac_heisey/objects-vs-arrays-42601ff79421](https://medium.com/@zac_heisey/objects-vs-arrays-42601ff79421#:~:text=Both%20objects%20and%20arrays%20are%20considered%20%E2%80%9Cspecial%E2%80%9D%20in%20JavaScript.,store%20a%20list%20of%20values.)s
- [filter objects](<https://masteringjs.io/tutorials/fundamentals/filter-key#:~:text=JavaScript%20objects%20don%27t%20have,()%20function%20as%20shown%20below.>)
