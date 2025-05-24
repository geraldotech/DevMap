## Conditionals Examples

- [if && AND](#-and)
- [if if else](#if-if-else)
- [Ternary](#ternary)
- [if else if](#if-else-if)
- [if return](#if-return)

# && AND

> inline if

```js
let conditition = 'Geraldo'.length >= 7 && 'SIM'

console.log(conditition) // SIM
console.log(10 > 5 && 'Yes') // Yes


// multiple conditions
const server = {
  ok: true,
  message: 'sdweg',
  data: {
    name: 'My Server',
    version: '1.0.0',
    uptime: '24 hours',
  },
}
const condicao = (server.ok && server.message.length && 10 > 2) && 'VC ESTA CERTO'
console.log(condicao) // YES
```

# if if-else

```js
function calcula(m) {
  if (m >= 7)
    if (m == 10) {
      console.log('APROVADO MAX')
    } else {
      console.log('APROVADO')
    }
  else {
    console.log('REPROVADO')
  }
}
calcula()
```

# if-else-if

```js
let dia = 9
let mes = 3

if (dia == 8 && mes == 3) {
  console.log('8 e 3 hoje')
} else if ((dia = !9 || mes == 3)) {
  console.log('apenas dia 3')
} else {
  console.log('NOT FOUND!')
}

//inline clean code!

const a = 21
if (a == 82) console.log('mcz')
else if (a == 21) console.log('rio')
else console.log('not found!')
```

# Ternary

```js
function age(val) {
  const idade = val >= 18 ? "maior" : "menor";
  console.log(idade);
}
age(3);
age(20);

//one condition
let ano = 2022;
let num = ano > 2000 ? "not" : null;
console.log(num); //not
```

# par impar
```php

<button onclick="bnt()">check out</button>
<input id="num" />
<br>
<div id="res"></div>


function bnt() {
    var x = document.getElementById("num").value;
    const res = window.res; //não  é recomendado usar o window, apenas um exemplo de possibilidade
    x %2 == 0 ? res.textContent = ("par") : res.textContent = ("impar");
}

//one condition
curre.checked ? arr.push(curre.id) : curre.checked;


// You only need to do this:  `return a === 0;`
// the result of this is actually a boolean.
// - https://www.linkedin.com/feed/update/urn:li:activity:7102330577072091136?utm_source=share&utm_medium=member_desktop


//arrow function, tbm poderia ser function obvious
const isEven = (value) => {
  return value % 2 === 0;
};

console.log(isEven(3)); //false

//arrow function inline: by gmap
const isEven = (v) => v % 2 === 0;

console.log(isEven(2)); //true
```

# if-return

```js
//so funciona com functions
check(21)

function check(x) {
  if (x === 82) {
    return console.log('AL')
  }
  if (x === 21) {
    return console.log('RJ')
  }
  if (x === 11) {
    return console.log('SP')
  }
  return console.log('register now!')
}

//if return
function idade(a) {
  if (a === 30) {
    console.log('trinta')
    return
  }
  if (a > 30) {
    console.log('maior trinta')
    return
  }
  console.log('not condicional')
}

idade(31)

// single
if (5 > 1) {
  console.log('maior')
  return
}
console.log('menor')

// inline return
function fetchPostFromPeriodo(period) {
  if (period === 'today') return console.log('today')
  if (period === 'week') return console.log('week')
  if (period === 'month') return console.log('month')
  console.log('get all')
}

fetchPostFromPeriodo('!today') // get all
fetchPostFromPeriodo('today') // today

// === VERSION if inline, thanks gp ====
function fetchPostFromPeriodo(period) {
  return (period === 'today' && 'OK!') || 'an other day'
}
console.log(fetchPostFromPeriodo('todayxx')) // 'an other day'
console.log(fetchPostFromPeriodo('today')) // OK!

function fetchPostFromPeriodTwo(period, day) {
  return (period === 'today' && day === 10 && 'Ok!') || 'Not okay'
}

console.log(fetchPostFromPeriodTwo('todayxx', 5)) // 'an other day'

console.log(fetchPostFromPeriodTwo('today', 10)) // OK!
```
