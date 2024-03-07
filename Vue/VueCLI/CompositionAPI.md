

- https://vuejs.org/guide/essentials/reactivity-fundamentals.html `export default set() vs <script script>`

- https://vuejsdevelopers.com/2022/06/01/ref-vs-reactive/

- [Example](./script-setup.vue)


Existem 3 modos building Vue components

- Options API `data()....`
- Composition API  `Vue 3.0`
  - ref - define .value
  - reactive 
    - para usar Composition API pode ser por:
    - [ x ] [export default setup() and return](./APIsetupExport.vue)
    - [ x ] [script setup()](./APIscriptsetup.vue) - 





```js
import {ref, reactive} from 'vue'
// of course inside a script setup


// 👉 ref Example

const person = ref({
  name: 'Geraldo',
  age: 31,
})

console.log(person.value.name)

// change data
person.value.name = 'Felipe'
console.log(person.value.name)


// 👉 reactive Example

const data = reactive({
  count: 0,
  name: 'Peter Griffin',
  flag: false
})

console.log(data.name)


//template
<button @click="data.name = 'Geraldo'">change</button>
<p>{{data.name}}</p>


```

- lifecycle https://vuejs.org/guide/essentials/lifecycle.html