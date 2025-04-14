<script>
//import * as Vue from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

export default {
  name: 'Header',
  props: {
    title: { type: String },
  },
  setup() {
    const name = Vue.ref('ok')
    const person = Vue.reactive({
      counter: 9,
      name: 'Peter',
      flag: false,
    })

    const list = Vue.reactive([1, 2, 3, 4, 4])

    console.log(person.name)
    console.log(name.value)

    return {
      name,
      person,
      list,
    }
  },
}
</script>

<template lang="">
  <div>
    <h1 @click="myfun">My Header</h1>
    <p>{{ name }}</p>
    <p>{{ person }}</p>
    <p>{{ list.map((v) => v * 2) }}</p>
  </div>
</template>
