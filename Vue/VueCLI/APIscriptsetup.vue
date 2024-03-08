<script setup>
import { ref } from 'vue'
const name = ref('Geraldo')
    const cities = ref([
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ])


</script>
<template>
  <h1>Hello {{ name }} from Composition API script setup</h1>

  <ul>
    <li v-for="(city, index) in cities" :key="index">
      {{city.name}}
    </li>
  </ul>
</template>
