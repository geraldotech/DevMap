


- setTimeout vs set Interval https://codepen.io/gmapdev/pen/WNLKgeP

## ===================== setTimeout =====================

The `setTimeout()` `window.setTimeout()` is executed only once.
If you need repeated executions, use `setInterval()` instead.
Use the `clearTimeout()` method to prevent the function from starting.
To clear a timeout, use the id returned from `setTimeout()`:

```js
setTimeout(() => console.log(`gello`), 2000)

setTimeout(msn, 4000) //milliseconds
function msn() {
  document.getElementById('res').innerHTML = 'Hello'
}

/* auto refresh
5000 = milliseconds = 5seconds
*/
window.setTimeout(function () {
  window.location.reload() //apesar de só executar 1x nesse caso vai vai reload forever
}, 5000)
```

## ===================== set Interval =====================

https://developer.mozilla.org/en-US/docs/Web/API/setInterval

```js
// html show content after timer
<p>Aguarde: <span>10</span></p>
    <div id="content" style="display: none;background: red;width: 300px;">my content here</div>

<p>Adquira VIP e tenha acesso direto!</p>
*/

//js
const contador = () => {
  let start = document.querySelector("span");
  let valuecont = start.innerHTML;

  setInterval(() => {
    valuecont--;
    if (valuecont < 0) {
      valuecont = 0;
    } else if (valuecont == 0) {
      document.getElementById("content").style.display = "block";
    }

    start.innerHTML = valuecont;
  }, 1000);
};
contador();

//infinity - Arrow function
const wel = () =>
  setInterval(function () {
    alert("bom dia");
  }, 2000);
wel(); // ativa a funcao

// modo direto
setInterval(function () {
  alert("bom dia");
}, 2000);

// adicionar o setInterval dentro de uma function e depois chamar
function conta() {
  setInterval(function () {
    console.log("oiiii");
  }, 2000);
}
conta();

// clearInterval stop é necessário chamar a var da função
const wel = setInterval(function () {
  alert("bom dia");
  clearInterval(wel);
}, 2000);
```

## ======= setInterval and use setTimeout to clearInterval after 10s =======

```js const intervalo = setInterval(() => {
     h1.classList.toggle('red')
    }, 1000)

    setTimeout(() => {
        clearInterval(intervalo)
    }, 10000)
```
