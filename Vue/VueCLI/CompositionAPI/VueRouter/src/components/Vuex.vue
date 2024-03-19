<script setup>
import { reactive } from 'vue'
import { useStore  } from 'vuex'



/* const user = reactive({
  name: 'Geraldo',
  city: 'Maceio',
}) */


const store = useStore()
console.log(store.state.user)


</script>
<template>
<section>
  <p>How to Avoid Prop Drilling in Vue</p>
  <p>
    <a href="https://vuex.vuejs.org/api/#usestore">https://vuex.vuejs.org/api/#usestore</a>
  </p>
  <p>to install: <code>$ vuex vue add vuex</code></p>
 <!--  <p>{{ user.name }}</p> -->

 <p>Name:{{ store.state.user.name }}</p>
 <p>city:{{ store.state.user.city }}</p>
</section>
</template>
<style>
code{
  color: seagreen;
}
</style>