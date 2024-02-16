# Async Await

> requests and responses

- await try catch

```js
const api = 'https://api.github.com/users/geraldotech'

async function pegar(url) {
  try {
    const req = await fetch(url)
    const res = await req.json()
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}
pegar(api)
```

- Using a classList to hide text `loading` assim que as dados forem carregados

```js
const load = document.querySelector('#load')
async function pegar() {
  try {
    const req = await fetch('https://api.github.com/users/geraldotech').then((req) => req.json())

    console.log(req)
    load.classList.add('hide')
  } catch (err) {
    console.log(err)
  }
}
pegar()
```

- e.g using map and forEach

```js
const link = 'https://expressjsonrocket.onrender.com/products/'

async function get(url) {
  const req = await fetch(url)
  const res = await req.json()
  console.log(res)
  //map
  /* res.map((post) => {
          const p = document.createElement("p");
          p.innerText = post.name;
          document.body.append(p);
        }); */

  //forEach
  res.forEach((post) => {
    const p = document.createElement('p')
    p.innerText = post.name
    document.body.append(p)
  })
}

get(link)
```

# then

### .then vs await

> > https://www.youtube.com/watch?v=Ij-B0Yiizyw
> > função assíncrona é uma promisse e síncrona é undefined
> > jogar esse código direito no console do browser e vai retornar uma promisse:

Teste async func no console

```js
async function assincrona() {}
assincrona() //Promise {<fulfilled>: undefined}
```

Apenas síncrona retorna undefined

```js
function sincrona() {}
sincrona() //undefined
```

- Test on console:

```js
fetch('https://api.github.com/users/geraldotech') // promisse
await fetch('https://api.github.com/users/geraldotech') // return data
```

- Functions

```js
/// get only request status
fetch('https://node-do-zerp.onrender.com/videos').then((res) => {
  console.log(res.status)
})

// request + response
fetch('https://node-do-zerp.onrender.com/videos')
  .then((req) => req.json())
  .then((res) => {
    console.log(res)
  })

// arrow no {}
fetch('https://node-do-zerp.onrender.com/videos')
  .then((req) => req.json())
  .then((res) => console.log(res))

// v3 if by gmap

fetch('https://node-do-zerp.onrender.com/videos')
  .then((req, er) => {
    if (req.status == 200) {
      console.log(req)
      return req.json()
    }
  })
  .then((res) => console.log(res))
```

### Promises - setTimeout

`then` keyword is used with Promises and allows you to specify what should happen after a Promise is fulfilled

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
  console.log('Olá,')
  setTimeout(() => {
    fetch('https://api.github.com/users/geraldotech')
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, 5000)
})
```

</details>

Modo console e IDE 1

```js
fetch('https://api.github.com/users/geraldotech').then((retornoAPI) => {
  console.log('Retorno', retornoAPI)
  //pega status
  console.log('Retorno', retornoAPI.status)
})
```

```js
async function assincrona() {}
assincrona().then(() => {
  console.log('Alguma logica vai aqui')
})
```

## await and then

Fazer a function, depois chamar com os .then

```js
async function pegardadosgit() {
  return await fetch('https://api.github.com/users/geraldotech')
}
console.log('[teste]', pegardadosgit())
pegardadosgit()
  .then((req) => req.json())
  .then((data) => console.log(data))
```

.then {try catch} and .text()

```js
async function get() {
  try {
    fetch('./test.txt')
      .then((res) => res.text())
      .then((data) => console.log(data))
  } catch (err) {
    console.log(err)
  }
}

get()
```

### Post Request:

[Ref Ajax and Fetch](https://wickedev.com/use-vanilla-javascript-to-make-ajax-request/)

```js
// Create and Send the request
var fetch_status
fetch(baseurl, {
  method: 'POST',
  // Set the headers
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  // Set the post data
  body: JSON.stringify({
    id: 6,
    title: 'gmap.dev',
    body: 'g@map.dev',
  }),
})
  .then(function (response) {
    // Save the response status in a variable to use later.
    fetch_status = response.status
    // Handle success
    // eg. Convert the response to JSON and return
    return response.json()
  })
  .then(function (json) {
    // Check if the response were success
    if (fetch_status == 201) {
      // Use the converted JSON
      console.log(json)
    }
  })
  .catch(function (error) {
    // Catch errors
    console.log(error)
  })
```
