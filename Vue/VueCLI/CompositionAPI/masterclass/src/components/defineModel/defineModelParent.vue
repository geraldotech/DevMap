<script setup>
import Child from './child.vue'
import { ref } from 'vue'

const count = ref(10)
// console.log(count.value)

const handleUpdateValue = (newValue) => {}
</script>
<template>
  <h1>parent</h1>
  <p>two-way binding between parent and child</p>

  <Child v-model="count" />
</template>
