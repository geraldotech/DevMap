# Async/Await

### .then vs await

> > https://www.youtube.com/watch?v=Ij-B0Yiizyw
> > função assíncrona é uma promisse e síncrona é undefined
> > jogar esse código direito no console do browser e vai retornar uma promisse:

Teste async func no console

```js
async function assincrona() {}
assincrona(); //Promise {<fulfilled>: undefined}
```

Apenas síncrona retorna undefined

```js
function sincrona() {}
sincrona(); //undefined
```

### Ambos baixo funcionam direto no console:

    fetch('https://api.github.com/users/geraldotech') //promisse
    await fetch('https://api.github.com/users/geraldotech') //return data

# Modo console e IDE 2.json `.then`

Modo console e IDE 1

```js
fetch("https://api.github.com/users/geraldotech").then((retornoAPI) => {
  console.log("Retorno", retornoAPI);
  //pega status
  console.log("Retorno", retornoAPI.status);
});
```

```js
async function assincrona() {}
assincrona().then(() => {
  console.log("Alguma logica vai aqui");
});
```

direct

```js
fetch("https://api.github.com/users/geraldotech")
  .then((res) => res.json())
  .then((resFinal) => console.log(resFinal));
```

Fazer a function, depois chamar com os .then

```js
async function pegardadosgit() {
  return await fetch("https://api.github.com/users/geraldotech");
}
console.log("[teste]", pegardadosgit());
pegardadosgit()
  .then((val) => val.json())
  .then((ref) => console.log(ref));
```

direct fetch and then

```js
fetch("https://api.github.com/users/geraldotech")
  .then((retornoAPI) => {
    return retornoAPI.json();
  })
  .then((dados) => {
    console.log(dados);
  });
```

.then {try catch} and .text()

```js
async function get() {
  try {
    fetch("./test.txt")
      .then((res) => res.text())
      .then((data) => console.log(data));
  } catch (err) {
    console.log(err);
  }
}

get();
```

# Modo `await`

await

```js
const api = "https://api.github.com/users/geraldotech";

async function pegar(url) {
  try {
    const req = await fetch(url);
    const res = await req.json();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
pegar(api);
```

direct way e esconder o text `loading` assim que as dados forem carregados

```js
const load = document.querySelector("#load");
async function pegar() {
  try {
    const req = await fetch("https://api.github.com/users/geraldotech").then(
      (req) => req.json()
    );

    console.log(req);
    load.classList.add("hide");
  } catch (err) {
    console.log(err);
  }
}
pegar();
```

### Promises - setTimeout

<details>
<summary>code</summary>

```js
const promise = new Promise((resolve, reject) => {
  /**
   * Adicionei um setTimeout para falar que
   * essa promise precisa esperar 300
   * milisegundos para retornar (resolve)
   * o seu resultado
   */
  console.log("Olá,");
  setTimeout(() => {
    fetch("https://api.github.com/users/geraldotech")
      .then((res) => res.json())
      .then((resf) => console.log(resf));
  }, 5000);
});
```

</details>

### map and forEach

```js
const link = "https://expressjsonrocket.onrender.com/products/";

async function get(url) {
  const req = await fetch(url);
  const res = await req.json();
  console.log(res);
  //map
  /* res.map((post) => {
          const p = document.createElement("p");
          p.innerText = post.name;
          document.body.append(p);
        }); */

  //forEach
  res.forEach((post) => {
    const p = document.createElement("p");
    p.innerText = post.name;
    document.body.append(p);
  });
}

get(link);
```
