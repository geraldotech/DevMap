<script setup lang="jsx">
import {h, defineComponent } from 'vue'


/* both h works direct from h imports */

const Render = () => {
  return h('div', 'Render 2')
}

/* because is using a h imports */
const Footer  = () => {
  return h('div', 'Render')
}

const foo =  defineComponent({
    name: '',
    components: {},
    emits: [],
    props: {}, 
    setup (props) {
      return {}
    }
  })




</script>

<template>
  <h1>About</h1>

 
  <Render/>

  <Footer />


</template>