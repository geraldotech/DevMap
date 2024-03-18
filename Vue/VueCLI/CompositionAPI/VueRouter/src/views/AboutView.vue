<script setup lang="jsx">
import { h } from 'vue'

/* both h works direct from h imports */

const Render = () => {
  return h('div', 'Render 2')
}

/* because is using a h imports */
const Footer = () => {
  return h('div', 'Render')
}
</script>

<template>
  <h1>About</h1>

  <Render />

  <Footer />
</template>
