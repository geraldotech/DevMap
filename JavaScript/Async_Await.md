# Async/Await

>>https://www.youtube.com/watch?v=Ij-B0Yiizyw
função assíncrona é uma promisse e síncrona é undefined 
jogar esse código direito no console do browser e vai retornar uma promisse:

```js
async function assincrona(){
}
assincrona()   //Promise {<fulfilled>: undefined}
```

Adicionando .then
```js
async function assincrona(){
  }
  assincrona()
   .then(()=> {
          console.log('Alguma logica vai aqui')
      })
```

Apenas síncrona retorna undefined

```js
function sincrona(){
}
sincrona() //undefined 

```

[teste] promise Async e await
```js
async function pegardadosgit(){
return await fetch('https://api.github.com/users/geraldotech');
}
console.log('[teste]', pegardadosgit());
pegardadosgit()
.then((valordoretorno) => {
})
```

### Ambos baixo funcionam direto no console:
     fetch('https://api.github.com/users/geraldotech')

### quanto
     await fetch('https://api.github.com/users/geraldotech')


Modo console e IDE 1
```js
fetch('https://api.github.com/users/geraldotech')
.then((retornoAPI)=>{
  console.log('Retorno', retornoAPI);
})
```

Modo console e IDE 2.json
```js
fetch('https://api.github.com/users/geraldotech')
.then(res => res.json())
.then(resFinal => console.log(resFinal))
```
pega.status

```js
fetch('https://api.github.com/users/geraldotech')
.then((retornoAPI)=>{
  console.log('Retorno', retornoAPI.status);
})
```

O retorno é importante demais, jogue na IDE

```js
async function pegadados(){
  await fetch('https://api.github.com/users/geraldotech')

  return 'O retorno é muito importante!';

}
console.log('[teste]', pegadados())
```
Tente chamar no console `pegadados()`


```
.then((receberalgo)=>{
console.log('recebe dados', receberalgo)
})
```


```js
fetch('https://api.github.com/users/geraldotech')
 .then((retornoAPI) => {
   return retornoAPI.json()
 })
 .then((dados)=>{
   console.log(dados)
 })
 ```

Display infos in screen

<details>
<summary>code</summary>

```js
// api url
const api_url =
  "https://api.github.com/users/geraldotech";

// Defining async function
async function getapi(url) {
  
  // Storing response
  const response = await fetch(url);
  
  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);
  if (response) {
  }
  show(data);
}
// Calling that async function
getapi(api_url);


function show(data){
  console.log(data.login)
  document.getElementById("root").innerHTML = data.login;
}
```

</details>

Display infos from pinned Git

<details>
<summary>code</summary>

```js
async function getgit(info){
const repos = await fetch('https://gh-pinned-repos.egoist.sh/?username=geraldotech')
.then(res => res.json())
.then(resff => console.log(resff))
}
getgit()
```
</details>

### Promises

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
   console.log('Olá,');
  setTimeout(() => {
    resolve('mundo!');
  }, 300)
});
promise.then(response => {
  console.log(response);
  });
```
</details>

### Git API example [live demo](https://gmapdev.netlify.app/demo/git_api)
<details>
<summary>code</summary>

```css
 body{
       zoom:120%;
    }
    img{
      width: 100%;
      max-width: 50%;
      margin-left: 25%;
      border-radius: 50%;
    }
    .container {
      display: flex;
      flex-direction:column;
      height: 70vh;
      justify-content: flex-start;
      align-items: center;
      background: rgb(36, 43, 30);
    }

    .box {
      display: flex;
      flex-direction:column;
      align-items: left;
      justify-content: center;
      width: 350px;
      height: 120px;
      margin-top: 60px;
      
    }

```


```html

<div class="container">
<div class="box">
  <span id="img"></span>
  <div>Name: <span id="root"></span></div>
  <div>Bio: <span id="bio"></span></div>
  <div>Blog: <span id="blog"></span></div>
  <div>Location: <span id="location"></span></div>
</div>
</div><!--container-->

```


```js
// api url
const api_url =
	"https://api.github.com/users/geraldotech";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
	}
  show(data);
}
// Calling that async function
getapi(api_url);


function show(data){
  console.log(data.login)
  document.getElementById("root").innerHTML = data.name;
  document.getElementById("img").innerHTML = `<img src="${data.avatar_url}" />`;
  document.getElementById("bio").innerHTML = `${data.bio}`;
  document.getElementById("blog").innerHTML = `${data.blog}`;
  document.getElementById("location").innerHTML = `${data.location}`;
  console.log(data.blog)
  
}


```
</details>
