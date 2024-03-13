
# ref and reactive

refs para tipos primitivos e para objs e trabalha sempre com `.value`

reactive nao trabalha com tipos primitivos, recomenando mais para objetos, Arrays
```jsx
const todos = reactive('') //  ❌value cannot be made reactive: 
console.log(todos)```


```js
import {ref, reactive} from 'vue'
// of course inside a script setup


// 👉 ref Example

const person = ref({
  name: 'Geraldo',
  age: 31,
})

console.log(person.value.name)

// 👉 change data or get data must call .value
person.value.name = 'Felipe'

console.log(person.value.name)

// ❓ but in DOM .value is not necessary just call: \
{{person.name}}

// 👉 reactive Example

const data = reactive({
  count: 0,
  name: 'Peter Griffin',
  flag: false
})

console.log(data.name)


// template
// <button @click="data.name = 'Geraldo'">change</button>
// <p>{{data.name}}</p>


// 👉 reactive add values

const persons = reactive([])

persons.geraldo = {'developer': true}
persons.felipe = 'isDev'

// output =>

{felipe : "isDev", }
{geraldo : developer: true}

// 👉 reactive swap using let instead const
let persons = reactive([1,2,2])

console.log(persons) // 1, 2, 2

persons = null
console.log(persons) // null


```


## Data Fetch

```js
const response = ref([])
const getResponse = reactive([])


/* Reactive needs a forEach to push data, getResponse.value is not valid */
onMounted(() => {
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=5').then(res => res.json()).then(data => {
   data.forEach((item) => {
    getResponse.push(item)
   })
  })
}) 

console.warn(getResponse)

/* Ref is more simpler */

onMounted(() => {
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=5').then(res => res.json()).then(data => {
    response.value = data
  })
}) 

console.warn(response)
```