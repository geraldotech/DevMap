## if if, else, ternary else if

- [if if else](#ifif-else)
- [Terary](#ternary)
- [if else if](#if-else-if)
- [if return](#if-return)

# ifif-else

```js
function calcula(m) {
  if (m >= 7)
    if (m == 10) {
      console.log("APROVADO MAX");
    } else {
      console.log("APROVADO");
    }
  else {
    console.log("REPROVADO");
  }
}
calcula();
```

# if-else-if

```js
let dia = 9;
let mes = 3;

if (dia == 8 && mes == 3) {
  console.log("8 e 3 hoje");
} else if ((dia = !9 || mes == 3)) {
  console.log("apenas dia 3");
} else {
  console.log("NOT FOUND!");
}

//inline clean code!

const a = 21;
if (a == 82) console.log("mcz");
else if (a == 21) console.log("rio");
else console.log("not found!");
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


//par impar

<button onclick="bnt()">check out</button>
<input id="num" />
<br>
<div id="res">

</div>


function bnt() {
    var x = document.getElementById("num").value;
    const res = window.res; //não  é recomendado usar o window, apenas um exemplo de possibilidade
    x %2 == 0 ? res.textContent = ("par") : res.textContent = ("impar");
    }

```

# if-return

```js
//so funciona com functions
check(21);

function check(x) {
  if (x === 82) {
    return console.log("AL");
  }
  if (x === 21) {
    return console.log("RJ");
  }
  if (x === 11) {
    return console.log("SP");
  }
  return console.log("register now!");
}

//if return

function idade(a) {
  if (a === 30) {
    console.log("trinta");
    return;
  }
  if (a > 30) {
    console.log("maior trinta");
    return;
  }
  console.log("not condicional");
}

idade(31);

// single
if (5 > 1) {
  console.log("maior");
  return;
}
console.log("menor");
```
