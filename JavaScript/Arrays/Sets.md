# The Set object lets you store unique values of any type

```js
const list = new Set()

list.add(89)
list.add({ id: 1 })
list.add([[1, 2, 3, 4]])
list.add('geraldox.com')

console.log(list.has(1)) // false
console.log(list.has('GERALDOx.com'.toLocaleLowerCase())) // true

console.log(list.size) // 4

console.log(list)

for (const i of list.keys()) {
  console.log(i)
}
```
