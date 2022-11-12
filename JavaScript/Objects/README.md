## Objects vs. Arrays
Both objects and arrays are considered “special” in JavaScript. Objects represent a special data type that is mutable and can be used to store a collection of data (rather than just a single value). Arrays are a special type of variable that is also mutable and can also be used to store a list of values.

## When to Use Objects
Objects are used to represent a “thing” in your code. That could be a person, a car, a building, a book, a character in a game — basically anything that is made up or can be defined by a set of characteristics. In objects, these characteristics are called properties that consist of a key and a value.

- [add](#add)
- [change](#change)
- [Newproperty](#property)
- [remove](#remove)


### add

```js
// Basic object syntax
const object = {
  keys: 'values'
};

//my example
const geraldo = {
  name: "Geraldo Filho",
  age: 30,
  Developer: true
}
```
### change

- Dot notation
```js
geraldo.age = 20;
```

- Bracket notation
```js
geraldo['age'] = 20;
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



/* [============================[for in]==========================================] */

```js
//for in is a method for iterating over "enumerable" properties of an object.
for(let value in geraldo){
  console.log(value);
}


for(let key in website){
  console.log( website[key]);
}
```


### e.g 2: 

```js
const person = {
name: 'Geraldo',
age: 29,
city: 'Maceio',
}
console.log(person);

//concatenar
document.write(person.name+" mora na cidade de "+person.city);
//concatenar
document.getElementById("objeto2").innerHTML = person.name +" idade atual: "+person.age;

//show values and keys
Object.values(person); // display in HTML: Geraldo,29,Maceio
Object.keys(person); // name, age, city
// returns an array of a given object's own enumerable string-keyed property [key, value]
Object.entries(person); // display in HTML: name,Geraldo,age,29,city,Maceio

//multiple variables in one line
const persons = {
    nome:"Geraldo",
    surname:"Filho"
}

console.log(persons.nome);
console.log(persons.surname);


//forma resumida atribuir a uma const
const {nome, surname} = persons;
console.log(nome);
console.log(surname);

```

!important :arrow_right: LEITURA 

- [difference-between-array-and-array-of-objects-in-javascript/](https://www.geeksforgeeks.org/difference-between-array-and-array-of-objects-in-javascript/);
- [https://medium.com/@zac_heisey/objects-vs-arrays-42601ff79421](https://medium.com/@zac_heisey/objects-vs-arrays-42601ff79421#:~:text=Both%20objects%20and%20arrays%20are%20considered%20%E2%80%9Cspecial%E2%80%9D%20in%20JavaScript.,store%20a%20list%20of%20values.)s