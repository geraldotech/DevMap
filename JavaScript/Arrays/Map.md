<h1 align='center'>MAP</h1>

- percorrer um array e obter um novo vetor cujo itens são resultados de uma função de callback

```js
// way 1
const arr = [1,2,3,4,5];

arrn = arr.map(x => 2\*\* x);
console.log(arrn); //(5) [2, 4, 8, 16, 32]
// way 2

const arr2 = [1,2,3,4,5];
arr2n = arr2.map((item) => {
return item ** 2;
})
console.log(arr2n); //(5) [1, 4, 9, 16, 25]

// way 3 - get
const  mercado = new Map();
mercado.set('Bebidas','cerveja, refrigerates, vinhos');
mercado.set('higiene','papel toalha, sabonete');

console.log(mercado.get('Bebidas'));
console.log(mercado.get('higiene'));
console.log(mercado.keys);

// get first letters
console.log(['BMW','GOL','LATAM','AMERICAN','BRAZIL','RAPPI'].map(el => el[0]));

// Getting index
console.log(arr.map((val, index) => [index,val]));

// https://stackoverflow.com/questions/1144705/best-way-to-store-a-key-value-array-in-javascript

// MAP add values in obj
const pessoa = [{
name:"Geraldo",
cidade:"Palmeira",
}];

let x = pessoa.map((value) => {
return {
value, "Active":true,
}
})

// contador com #mapcontador
let contador = 0
let mapa = [1,2,3,4,5,1,2,2,2,2].map(val => {
return val == 2 ? contador++ : contador
})
console.log(contador); // 5


//  and replace and transformar string em number
const n = ['a 199', 'a 200', 'a 300']
const num = n.map(function (int) {
  return +int.replace('a ', '') // ou  return Number(int.replace("a ",""));
})
console.log(num)

```

# Map.set

- [https://stackoverflow.com/questions/63595841/find-element-in-map-by-its-property-value](https://stackoverflow.com/questions/63595841/find-element-in-map-by-its-property-value)

## Contextualizando #map vs #flapMap

```js
let arr = [1, 3, 5, 7]

console.log(arr.map((val) => val + 1)) //2,4,6,8
// Nested subArrways
console.log(arr.map((val) => [val, val + 1])) // [[1, 2], [3, 4], [5, 6], [7, 8]] ❌

console.log(
  arr.map((val) => [val, val + 1]).reduce((acc, curr) => acc.concat(curr))
) // // [1, 2, 3, 4, 5, 6, 7, 8] ✅

console.log(arr.flatMap((val) => [val, val + 1])) //1,2,3,4,5,6,7,8
// ou seja contém os valures do oldvalue concatenados
// https://blog.travismclarke.com/post/flatmap-vs-map/

const api = [
  { id: 1, name: 'Geraldo', city: 'MCZ' },
  { id: 2, name: 'Felipe', city: 'RJ' },
]
```

### Map loop

```js
const map = api.map((val, ind) => {
  console.log(val.id, val.name, val.city)
})
```

### Map loop Destructuring the object's properties

- instead call: `val.name` just call `name`

- https://bobbyhadz.com/blog/react-loop-through-array-of-objects

```js
const mapDestructuring = api.map(({ id, name, city }) => {
  console.log(id, name, city)
})
```

# Map Links Index

```html
<h4>Array href index + value</h4>

<a id="root"></a>
```

```js
let names = ['Geraldo', 'Delta', 'Quebrec', 'Bravo', 'Charlie']

document.getElementById('root').innerHTML = names.map((val, ind) => {
  return `<a href="${ind}${val}">${val}</a>`
})

// mostra todos exceto o elemento Geraldo
g = names.filter((values) => {
  return values !== 'Geraldo'
})
console.log(g)
```
