<script setup lang="jsx">
import { ref, reactive, h, computed, onMounted } from 'vue'

const response = ref([])
const getResponse = reactive([])

const data = reactive({
  name: 'Geraldo',
  lastName: 'Filho',
})

const user = ref({
  firstName: 'John',
  lastName: 'Snow',
})

function render() {
  return h(
    'div',
    Array.from({ length: 20 }).map(() => {
      return h('p', 'hi')
    })
  )
}

const FullName = computed(() => {
  return user.value.firstName + ' ' + user.value.lastName
})

function FullNameFN() {
  return user.value.firstName + ' ' + user.value.lastName
}

/* Reactive needs a forEach to push data, getResponse.value is not valid */
onMounted(() => {
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        getResponse.push(item)
      })
    })
})

/* Ref is more simpler */

onMounted(() => {
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then((res) => res.json())
    .then((data) => {
      response.value = data
    })
})

const uncompleted = computed(function () {
  return response.value.filter((todo) => !todo.completed)
})
const completedTodos = computed(() => {
  return response.value.filter((todo) => todo.completed)
})
</script>

<template>
  <h1>Todos uncompleted</h1>
  <p
    v-for="item in uncompleted"
    :key="item.id">
    {{ item.title }} = {{ item.completed }}
  </p>

  <h1>Todos completas</h1>

  <p
    v-for="item in completedTodos"
    :key="item.id">
    {{ item.title }} = {{ item.completed }}
  </p>

  <hr />
  <h1>Computed properties</h1>

  <p>{{ user.firstName }} - {{ user.lastName }}</p>
  <hr />
  <h1>Todos All</h1>

  <p>traz dynamic if todo is true or not</p>
  <p>very cool</p>
  <div
    v-for="item in response"
    :key="item.id">
    <input
      type="checkbox"
      name=""
      id=""
      v-model="item.completed" />
    {{ item.title }}
  </div>

  <p>Computed: {{ FullName }}</p>
  <p>FN: {{ FullNameFN() }}</p>
</template>
<style>


</style>