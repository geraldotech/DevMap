```js
let x = 10
let y
// instead
if (y === 'undefined') {
  console.warn('if')
}

// do
console.log('inline', y ?? x) // y is undefined so print x
let tem = y ?? x
console.log('tem', tem)

function showName(n) {
  let x = n ?? 'please enter a name'
  console.log(x)
}

showName() // please enter a name
showName('Costa') // Costa
```

https://javascript.info/nullish-coalescing-operator
