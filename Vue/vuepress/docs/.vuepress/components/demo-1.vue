<script setup>
import Vue from 'vue'
import {ref} from 'vue'

const input = ref('')

console.log(Vue.version)

const click = () => {
  alert('clicked')
}
</script>
<template>
  <div>
    <h3>Hello component</h3>
    <button @click="click">click me</button>

    <div>
      <input v-model="input" type="text" placeholder="type your name">
    <p>{{ input }}</p>
    </div>

  </div>
</template>
<style scoped>
div {
  border: 1px solid #333;
  border-radius: 10px;
  padding: 1rem;
  background-color: #6b5900;
  color: #e7c000;
}
input{
  padding: 1rem;
}
</style>
