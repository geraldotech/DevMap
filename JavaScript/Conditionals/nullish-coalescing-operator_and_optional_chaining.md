### nullish-coalescing-operator

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

### Optional chaining (?.)

```js
const person = {
  details: {
    name: 'Geraldo',
    age: 31,
  },
  location: {
    xcity: 'Maceio',
  },
}

const search = person.details?.name
console.log(search)

const idade = person.location?.age
console.log(idade)

const local = person.location?.city || '404 error'

// undefined e Geraldo só serão exibidos se remover o ||
console.log(local) // undefined // '404 error'

// with Nullish
console.log(local ?? person.details.name) // 'Geraldo' // '404 error'

// antes desse operador era usado

const local2 = (person.location && person.location.city) || '404 error'
console.log(local2 ?? person.details.name) // '404 error'
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
