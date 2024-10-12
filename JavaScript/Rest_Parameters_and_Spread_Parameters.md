### JavaScript uses three dots (...) for both the rest and spread operators. But these two operators are not the same.

### 📍 (...) - three dots = rest operator

```js

//🟢Rest Parameters

//📌The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to
function restp(...args) {
  console.log(args);
}
restp(1, 2, 3, 6, 9);

//📌somar infiny numbers
function add(...num) {
  let total = 0;
  for (const n of num) {
    total += n;
  }
  return total;
}

const res = add(5, 6, 9, 8, 7, 3, 12);
console.log(res); //50

//📌multi params
function add2(a, b, ...num) {
  console.log(a); //1
  console.log(b); //2
  console.log(num); // 20 + 30 = 50
  let total2 = 0;

  for (const n2 of num) {
    total2 += n2;
  }
  return total2;
}
const res2 = add2(1, 2, 20, 30);
console.log(res2); // 1,2 20+30 = 50

function nome(a, b, ...c) {
  return `${a} ${b} ${c}`;
}
console.log(nome(...["A", "C", "Z"])); // A, C Z

//📌 How the Rest Operator Works in a Destructuring Assignment
const [nome, idade, city, ...bau] = ["Geraldo", 30, "RJ", "Caxias", "JS"];
console.log(bau); // Caxias, JS

const { nome, age, ...others } = {
  nome: "Geraldo",
  age: 30,
  company: "smart",
  gender: "male",
};
console.log(nome, age, others);

//via https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/

/*[=============================================================================]*/
//🟢Spread Operators ... does shallow copy

const featured = ["Deep Dish", "Pepperoni", "Hawaiian"];
const specialty = ["Meatzza", "Spicy Mama", "Margherita"];
const pizzas = [...featured, "vegan", ...specialty];

console.log(pizzas); // (7) ['Deep Dish', 'Pepperoni', 'Hawaiian', 'vegan', 'Meatzza', 'Spicy Mama', 'Margherita']

const nome = ["Geraldo"];
const msn = ["Meu", "nome", "is", ...nome];
console.log(...msn);

const arr = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9, 10];
console.log(...arr, ...arr2); // 1 2 3 4 5 6 7 8 9 10

const al = ["Alpha", "Bravo", "Charlie"];
const al2 = [...arr, "Delta"];
console.log(al2); // ["Alpha","Bravo","Charlie", "Delta"]

//📌spread strings e.g
const txt = "method extracts a section of a string and returns";
console.log([...txt]); // todos os char por ,
console.log([...txt].join(" ")); // todos os char por espaços.

const nome = "Geraldo";
console.log(...nome); // G e r a l d o

//📌spread e.g
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function Addnum(a, b, c, d, e) {
  return a + b + c + d; //so vai retornar 4 numbers
}
console.log(Addnum(...number)); //10

//📌 How Spread Works in an Object Literal
const nomes = ["Geraldo", "Filho"];
const bio = { ...nomes, runs: "smarts" };
console.log(bio);

function Addnum(a, b, c, d, e) {
  return a + b + c + d; //so vai retornar 4 numbers
}
console.log(Addnum(...number));

//📌 Arrays
let a = [1, 2, 3];
let b = [4, 5, 6];
a.push(...b);
console.log(a);

//📌clone properties from one object into another.
const person = { nome: "Geraldo", age: 30 };
const card = { ...person, banco: "Amazonia", limite: 3000 };
console.log(card);

//📌clone and change values
var obj1 = { foo: "bar", x: 42 };
var obj2 = { foo: "baz", y: 13 };

var clonedObj = { ...obj1 };
clonedObj.x = 50;

console.log(obj1);
console.log(clonedObj);

//HTMLCollection(4) clone

<p class="1" id="a">one</p>
<p class="1" id="b">two</p>
<p class="1" id="c">three</p>
<p class="1" id="d">four</p>


const p = document.getElementsByClassName("1");

[...p].forEach((v) => {
  v.addEventListener("click", handler);
});

function handler(e) {
  console.log(e.target.id);
}

```

// acessar as props do data diretamente sem usar index com spread
```js
const names = {"return": true, "data":[{"item":"12323", "description": " descricao goes here"}]}

console.log(names.data[0].item) // before

const [primeiro, ...rest] = names.data

if(primeiro){
  console.log(primeiro.item) // herdou tudo de data 

}
```

```js
const data ={"ok":true,"data":[{"id":"126","0":"126","data_string":"idArea:18:descricao:Fiscal:total_users:608; idArea:13:descricao:Caixa e Bancos:total_users:608; idArea:1:descricao:Compras:total_users:407; idArea:4:descricao:Financeiro:total_users:393; idArea:17:descricao:Estoque:total_users:315","1":"idArea:18:descricao:Fiscal:total_users:608; idArea:13:descricao:Caixa e Bancos:total_users:608; idArea:1:descricao:Compras:total_users:407; idArea:4:descricao:Financeiro:total_users:393; idArea:17:descricao:Estoque:total_users:315","execution_time":"00:00:10","2":"00:00:10","created_at":"12\/10\/2024 13:09:45","3":"12\/10\/2024 13:09:45"}]}


/* 
* converter a data from backend para um Array mantendo a estrutura originalmente esperada
*/

if (!data.ok) {

  console.log(`no data to show`)
}

if (data.ok) {
  // Destructure to get the first object from the array
  const [firstEntry, ...rest] = data.data

  console.log(firstEntry)
  console.log(firstEntry.data_string)

  // se existir
  if (firstEntry) {
    console.log(firstEntry.data_string)

    // Split the string into individual entries
    const entries = firstEntry.data_string
      .split(';')
      .map((entry) => entry.trim())
      .filter(Boolean)
    console.log(entries)

    // Convert each entry to an object
    const unique_object = entries.map((entry) => {
      const [_, idArea, __, descricao, ___, total_users] = entry.split(':')
      return {
        idArea: parseInt(idArea),
        descricao,
        total_users: parseInt(total_users),
      }
    })

    console.log(unique_object)
  } else {
    console.log('No data available.')
  }
} else {
  console.log(data.message)
}

// acessar as props do data diretamente sem usar index com spread

```


### see more

    clonar objetos com nomes iguais visitar

- 🔗 https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/
- 🔗 https://www.youtube.com/watch?v=j3bXlt3NOZA
- 🔗 https://dev.to/sagar/three-dots---in-javascript-26ci
- 🔗 https://javascript.info/destructuring-assignment
- 🔗 nice https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/
- 🔗 nice https://www.freecodecamp.org/news/an-introduction-to-spread-syntax-in-javascript-fba39595922c/
