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
- [Object.Values, keys, entries](#objectvalueskeysentriesobj)
- [Object.fromEntries](#objectfromentries)
- [Constructor](#constructor)

- [ObjectMethods](#object-methods)

### add

```js
// Basic object syntax
const object = {
  keys: "values",
};

// my example
const geraldo = {
  name: "Geraldo Filho",
  age: 30,
  Developer: true,
};

//Simulate a JavaScript Object
const windowx = {
  document: {
    getElemenyById: function (id) {
      console.log(`getElemenyById:`, id);
    },
    querySelector: (val) => {
      console.log(`querySelector:`, val);
    },
  },
};

windowx.document.getElemenyById("ElementId");
windowx.document.querySelector("#id");
```

### access

```js
console.log(geraldo.age);
console.log(geraldo["age"]);
```

### change

- Dot notation

```js
geraldo.age = 20;
```

- Bracket notation

```js
geraldo["age"] = 20;
```

### property

- Adicionando novas propriedades

```js
geraldo.travel = ["Maceio", "Rio"];
```

### remove

```js
delete geraldo.name;
```

### concatenar

```js
const person = {
  name: "Geraldo",
  age: 29,
  city: "Maceio",
};
console.log(person);

// concatenar
document.write(person.name + " mora na cidade de " + person.city);

// concatenar
document.getElementById("objeto2").innerHTML =
  person.name + " idade atual: " + person.age;

// multiple variables in one line
const persons = {
  nome: "Geraldo",
  surname: "Filho",
};

console.log(persons.nome);
console.log(persons.surname);

// shorthand atribuir a uma const
const { nome, surname } = persons;
console.log(nome);
console.log(surname);
```

### Object.'values','keys','entries'(obj)

```js
const obj = {
  nameKey: "pessoaVal",
  ageKey: 30,
  systemKey: "WindowsVal",
};

//✨ display the `keys` (3) ['nameKey', 'ageKey', 'systemKey']
Object.keys(person);

//✨ display `values` (3) ['pessoaVal', 30, 'WindowsVal']
Object.values(person);

//✨ returns an Array of a given object's own enumerable string-keyed property [key, value]

Object.entries(person);
// (3) [Array(2), Array(2), Array(2)]
// 0: (2) ['nameKey', 'pessoaVal']
// 1: (2) ['ageKey', 30]
// 2: (2) ['systemKey', 'WindowsVal']

//✨ JS Objects try:

console.log(Object.keys(window)); // document
console.log(Object.values(window)[2]); //#document
```

### Object.fromEntries()

```js
// ES2019 introduced the Object.fromEntries() method that allows you to easily convert a list of key-value pairs into an object.

let arr2 = [
  ["color", "red"],
  ["borderWidth", "1px"],
];
console.log(Object.fromEntries(arr2)); // {color: 'red', borderWidth: '1px'

/*
✔ The Object.fromEntries() performs the reverse of Object.entries().
✔ transform an iterable into an object.
*/
```

### Object Methods

```js
const smart = {
  open: function () {
    console.log("open conexao");
  },
  close: function () {
    console.log("fechar conexao");
  },
};
smart.open();
smart.close();
```

### for in

```js
// for in is a method for iterating over "enumerable" properties of an object.

const pessoas = {
  01: "Geraldo",
  02: "Felipe",
  03: "Bella",
  04: "Milly",
};

// Scratch: getting the keys
for (let key in pessoas) {
  console.log(key);
}

// Se perform `pessoas` vai retonar todos os values duplicados, por isso devemos chamar junto com a chave

for (const key in pessoas) {
  console.log(pessoas); //👉 ❌
}

//👉 o que fazer passar a key na chamada👍
for (let key in pessoas) {
  console.log(pessoas[key]);
}
//🔰 key+key simples só chamar a key de forma independente.
for (let key in pessoas) {
  console.log(key, pessoas[key]);
}
//👉 print no HTML:
for (const key in pessoas) {
  p.innerHTML += key + ": " + pessoas[key];
}
//👉👉 beautiful string literal:
p.innerHTML += `${key} - ${pessoas[key]} `;

// for in key:value + document.createElement...

// ol ficar dentro do for-in vai repetir várias vezes sem necessidade.
let ol = document.createElement("ol");

for (let [keys] in pessoas) {
  let li = document.createElement("li");

  li.innerHTML += pessoas[keys] + "<br>";
  ol.appendChild(li);
  document.body.appendChild(ol);

  //  <ol id="a"></ol>
  // a.innerHTML += "<li>" + keys + "/li>";
}

//👉 render HTML Array[Objects] using `for in` and `for of` checkout Arrays > Blog_Settings2
//github.com/geraldotech/DevMap/blob/main/JavaScript/Arrays/Blog_Settings2/main.js

//👉 iterating over Array to get Index
function getIndex(arr) {
  for (const tem in arr) {
    console.log(tem);
  }
}

getIndex(["A", "B", "C"]);
```

### iterate object with: forEach / of of

```js
const pessoas = {
  01: "Geraldo",
  02: "Felipe",
  03: "Bella",
  04: "Milly",
};

Object.keys(pessoas).forEach((item) => {
  console.log(item + " - " + pessoas[item]);
});

// HTML não esquecer do +=

Object.keys(pessoas).forEach((val) => {
  res.innerHTML += val + ":" + pessoas[val];
});

for (const p of Object.keys(pessoas)) {
  console.log(p, pessoas[p]);
}
// returns an array of a given object's own enumerable string-keyed property key-value pairs. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

for (const [key, val] of Object.entries(pessoas)) {
  console.log(key, val);
}
```

```js
const obj = {
  name: "Jon Doe",
  username: "jon-doe",
  email: "jon-doe@unknown.com",
};

// obj to JSON geralmente em Post/PUT Resquests
const post = JSON.stringify(obj);
console.log(post);

// voltar a ser obj
console.log(JSON.parse(post));
```

!important :arrow_right: LEITURA

### constructor

[https://www.w3schools.com/js/js_object_constructors.asp](https://www.w3schools.com/js/js_object_constructors.asp);

- [difference-between-array-and-array-of-objects-in-javascript/](https://www.geeksforgeeks.org/difference-between-array-and-array-of-objects-in-javascript/);

- [https://medium.com/@zac_heisey/objects-vs-arrays-42601ff79421](https://medium.com/@zac_heisey/objects-vs-arrays-42601ff79421#:~:text=Both%20objects%20and%20arrays%20are%20considered%20%E2%80%9Cspecial%E2%80%9D%20in%20JavaScript.,store%20a%20list%20of%20values.)s
- [filter objects](<https://masteringjs.io/tutorials/fundamentals/filter-key#:~:text=JavaScript%20objects%20don%27t%20have,()%20function%20as%20shown%20below.>)
