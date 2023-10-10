### keys and entries from Array

```js
const array1 = ['a', 'b', 'c']

// keys
const iterator = array1.keys()

for (const i of iterator) {
  console.log(i) // 0,1,2
}

// entries
/* 
The loop does not offer any syntax to do this, but you can combine the destructuring syntax introduced in ES6 with calling the entries() method on the array
*/

for (const [i, v] of array1.entries()) {
  console.log(i, v) // 0 1, 2 b, 3 c
}

const itera = array1.entries()

console.log(itera.next().value) // 0 a
console.log(itera.next().value) // 1 b
```

### Converter-Arr-Str

👉String to Arr

```js
const str = 'JavaScript is a good'
console.log(str.split()) //todas words em um index
console.log(str.split(' ')) //cada word em um index

console.log(str.slice(''))
console.log([...str])

//👉Arr to String
let itens = ''
;['Gera', 'dsd'].forEach((item) => {
  itens += item
})
console.log(itens) //Geradsd

console.log(['Gera', 'dsd'].toString()) //Gera, dsd
console.log(['Gera', 'dsd']) //Gera, dsd
```

### getLastValue

```js
const n = 'Geraldo'
const a = ['Geraldo', 'Filho']

console.log(a[a.length - 1]) //Filh
console.log(n.slice(0, 2)) //Ge

//at string e arr
console.log('Gege'.at(-1)) //e
console.log(a.at(-1)) //Filho
console.log('Geraldo'.slice(-1)) // o

//spread para nao alterar o arr original
console.log([...a].pop()) //Filho

console.log(a.splice(-1)) //["Filho"]
console.log(a.slice(-1)) //["Geraldo"]

console.log(a.findLast((el) => true)) // Geraldo
console.log(['Geraldo', 'Filho'].slice().pop()) //Filho

console.log(n[n.length - 1]) // o
```
