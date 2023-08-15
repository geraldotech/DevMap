## Objects vs. Arrays

Both objects and arrays are considered “special” in JavaScript. Objects represent a special data type that is mutable and can be used to store a collection of data (rather than just a single value). Arrays are a special type of variable that is also mutable and can also be used to store a list of values.

## When to Use Objects

Objects are used to represent a “thing” in your code. That could be a person, a car, a building, a book, a character in a game — basically anything that is made up or can be defined by a set of characteristics. In objects, these characteristics are called properties that consist of a key and a value.

- [Access](#access)
- [add](#add)
- [change](#change)
- [Newproperty](#property)
- [remove](#remove)
- [Values,keys, entries]()[](url)
- [Constructor](#constructor)
- [Objectfromentries](#objectfromentries)
- [ObjectMethods](#object-methods)

### add

```js
// Basic object syntax
const object = {
  keys: "values",
};

//my example
const geraldo = {
  name: "Geraldo Filho",
  age: 30,
  Developer: true,
};
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

//concatenar
document.write(person.name + " mora na cidade de " + person.city);

//concatenar
document.getElementById("objeto2").innerHTML =
  person.name + " idade atual: " + person.age;

//multiple variables in one line
const persons = {
  nome: "Geraldo",
  surname: "Filho",
};

console.log(persons.nome);
console.log(persons.surname);

//shorthand atribuir a uma const
const { nome, surname } = persons;
console.log(nome);
console.log(surname);
```

### values-keys-entries

```js
//show values and keys

// ✨display `values` [can uso to show objects in HTML]: Geraldo,29,Maceio
Object.values(person);

// ✨display the `keys`name, age, city
Object.keys(person);

// ✨returns an array of a given object's own enumerable string-keyed property [key, value]
Object.entries(person); // display values+keys name,Geraldo,age,29,city,Maceio

// if tudo in JS is Object tente:

console.log(Object.keys(window));
console.log(Object.values(window)[2]); //#document
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

/_ [============================[for in]================================] _/

```js
//for in is a method for iterating over "enumerable" properties of an object.

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

//se chamar o `pessoas` vai retonar todos os values duplicados, por isso devemos chamar junto com a chave
//👉o que não fazer ❌
for (const key in pessoas) {
  console.log(pessoas);
}

//👉 o que fazer passar a key na chamada👍
for (let key in pessoas) {
  console.log(pessoas[key]);
}
//🔰 ah mais eu quero o id+value, simples só chamar a key de forma independente.
for (let key in pessoas) {
  console.log(key, pessoas[key]);
}
//👉print no HTML seria:
for (const key in pessoas) {
  p.innerHTML += key + ": " + pessoas[key];
}
//👉👉 beatiful string literal:
p.innerHTML += `${key} - ${pessoas[key]} `;

//👉render HTML Array[Objects] using `for in` and `for of` checkout Arrays > Blog_Settings2
//github.com/geraldotech/DevMap/blob/main/JavaScript/Arrays/Blog_Settings2/main.js

//👉iterating over Array to get Index
function getIndex(arr) {
  for (const tem in arr) {
    console.log(tem);
  }
}

getIndex(["A", "B", "C"]);
```

/_ [=================[iterate object with forEach / of of]==================] _/

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

//HTML não esquecer do +=

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

//obj to JSON geralmente em Post/PUT Resquests
const post = JSON.stringify(obj);
console.log(post);

//voltar a ser obj
console.log(JSON.parse(post));
```


### Object.fromEntries() 
    
```js    
console.log('keys', Object.keys(obj)) // keys (3) ['nameKey', 'ageKey', 'systemKey'

console.log('values', Object.values(obj)) // values (3) ['pessoaVal', 30, 'WindowsVal']
// method that allows you to transform an object into an array:
console.log('values', Object.entries(obj)) // values (3) [Array(2), Array(2), Array(2)
/*    
ES2019 introduced the Object.fromEntries() method that allows you to easily convert a list of key-value pairs into an object.
 */
let arr2 = [['color', 'red'], ['borderWidth', '1px']];
console.log(Object.fromEntries(arr2));  //{color: 'red', borderWidth: '1px'
/*
✔ The Object.fromEntries() performs the reverse of Object.entries().
✔ transform an iterable into an object.
*/
```
!important :arrow_right: LEITURA

### constructor

[https://www.w3schools.com/js/js_object_constructors.asp](https://www.w3schools.com/js/js_object_constructors.asp);

- [difference-between-array-and-array-of-objects-in-javascript/](https://www.geeksforgeeks.org/difference-between-array-and-array-of-objects-in-javascript/);

- [https://medium.com/@zac_heisey/objects-vs-arrays-42601ff79421](https://medium.com/@zac_heisey/objects-vs-arrays-42601ff79421#:~:text=Both%20objects%20and%20arrays%20are%20considered%20%E2%80%9Cspecial%E2%80%9D%20in%20JavaScript.,store%20a%20list%20of%20values.)s
- [filter objects](<https://masteringjs.io/tutorials/fundamentals/filter-key#:~:text=JavaScript%20objects%20don%27t%20have,()%20function%20as%20shown%20below.>)
