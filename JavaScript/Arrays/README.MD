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

### copyWithin

```js
// copyWithin(target)
//Make a new arr when get the target start over, not includes target.value

console.log([1, 2, 3, 4].copyWithin(1))
/*
Array: [1, 2, 3, 4]
index: [0, 1, 2, 3]
output:   [1, 1, 2, 3]
*/
console.log([1, 2, 3, 4].copyWithin(2))
/*
Array: [1,2,3,4]
index: [ 0, 1, 2 ,3 ]
output:       [1, 2, 1, 2]
*/

console.log([1, 2, 3, 4].copyWithin(3)) // [1,2,3,1]
console.log(['a', 'b', 'c', 'd', 'e', 'f'].copyWithin(2)) // [a, b, a, b, c, d]
console.log(['a', 'b', 'c', 'd', 'e', 'f'].copyWithin(3)) // [a,b,c,a,b,c]

/* 
Array ['a','b', 'c', 'd', 'e', 'f'] 
index [0 ,  1,   2,   3,   4,   5 ] 
output:        ['a', 'b', 'a', 'b', 'c', 'd' ]
*/
// x == target
console.log([1, 2, 3, 4, 5, 6, 7, 8].copyWithin(5)) // [1,2,3,4,5,x,1,2,3]
console.log([1, 2, 3, 4, 5, 6, 7, 8].copyWithin(4)) // [1,2,3,4,x,1,2,3,4]
console.log([1, 2, 3, 4, 5, 6, 7, 8].copyWithin(7)) //[1,2,3,4,5,6,7,x,1]

console.log([1, 2, 3, 4].copyWithin(3)) // [1,2,3,1]
```
