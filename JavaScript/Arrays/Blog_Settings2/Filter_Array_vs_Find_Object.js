// filter always return array
// find return obj

const posts = [
  {
    id: 1,
    name: 'Sample 1',
    slug: 'post-one',
    description: 'This is sample data #1',
  },
  {
    id: 2,
    name: 'Sample 2',
    slug: 'post-two',
    description: 'This is sample data #2',
  },
]

// Pay Attention to returns filter vs find

// 👉Filter
const Filter = posts.filter((v) => v.id == 2)
console.log(Filter)
console.log(Array.isArray(Filter)) // true)
console.log(Object.is(Filter)) // false

// ➡️ Array to Object with Object.assing
console.log(Object.assign({}, ...Filter))

// ➡️ get from the index[0]
const myobj = Filter[0]
console.log(myobj.id) //2

// ➡️ get single data
const mapa = Filter.map((v) => {
  return v
})
console.log(mapa) // [ 'Sample 2' ]

// ➡️ Array to Object  for of and
let obj = {}
for (const i of Filter) {
  obj = i
}
console.log(obj.id)
console.log(obj.slug)

// ➡️  forEach
let obj2 = {}
Filter.forEach((val, ind) => {
  obj2 = val
})
console.log(obj2.id) // 2

// ➡️  reduce

const resobj = Filter.reduce((acc, curVal) => {
  acc = curVal
  return acc
}, {})

console.log(resobj.id) // 2

// 👉 Find
const Find = posts.find((v) => v.id == 2)
console.log(Find)
console.log(Array.isArray(Find)) // false
console.log(Object.is(Find)) // true
