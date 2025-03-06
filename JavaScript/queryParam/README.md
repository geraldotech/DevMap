### Usando URLSearchParams

Se você estiver lidando com uma URL completa, pode usar URLSearchParams para obter o valor de nextRow diretamente:

```js
const url = new URL('http://example.com/?nextRow=19') // Substitua pela sua URL
const params = new URLSearchParams(url.search)
const nextRow = params.get('nextRow')
console.log(nextRow) // Isso imprimirá "19"


/* 
visitar uma url com search params like: http://127.0.0.1:5500/index.html?ranking=geral&type=vip
*/

const params = new URLSearchParams(window.location.search)
const getparams = params.get('ranking')
const getparams2 = params.get('type')

console.log(params)
console.log(getparams, getparams2) // geral and  vip


```

### Usando Expressão Regular

Se você só tem a string ?nextRow=19, pode usar uma expressão regular:

```js
const queryString = '?nextRow=19'
const match = queryString.match(/nextRow=(\d+)/)
const nextRow = match ? match[1] : null // `match[1]` contém o número
console.log(nextRow) // Isso imprimirá "19"
```

### Usando split

Outra maneira de fazer isso é usar split:

```js
const queryString = '?nextRow=19'
const nextRow = queryString.split('nextRow=')[1] // Divide a string em torno de 'nextRow='
const nextRowValue = nextRow ? nextRow.split('&')[0] : null
```
