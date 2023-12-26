<template>
  <div>
    <h1>{{ msg }}</h1>
    <select v-model="selected">
      <option>Selecione</option>
      <option value="js">JavaScript</option>
      <option value="py">Python</option>
      <option value="php">PHP</option>
    </select>
    <h2>{{ selected }}</h2>

    <button @click="log">Click me</button>

    <hr />

    <input type="text" v-model="userInput" />
    <p>{{ userInput }}</p>

    <button @click="Savenow">Save and get Events</button>
  </div>
</template>

<script setup>
// script setup https://vuejs.org/api/sfc-script-setup.html#script-setup

import { ref } from 'vue'

const selected = ref()
const userInput = ref()
const msg = 'Hello from Component'

function log() {
  console.log(msg)
}

function Savenow(e) {
  console.log(`Salvando`, e)
}

/* normal syntax */
/* export default {
  name: 'My component',
  data() {
    return {
      msg: 'Hello from Component',
      selected: '',
    }
  },
  methods: {
    log() {
      console.log(this.msg)
    },
  },
} */
</script>
<style></style>
