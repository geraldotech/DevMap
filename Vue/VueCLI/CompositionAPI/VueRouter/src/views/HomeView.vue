<script setup>
import Vuex from '../components/Vuex/Vuex.vue'
import Products from '../components/VueMixin/Products.vue';
import { useStore } from 'vuex'


const store = useStore()

// can update direct, but should good practice? Not!!!

// especially in larger applications where it might be difficult to trace the source of state changes. Additionally, mutations help enforce the principle of state immutability, which is important for ensuring predictable state management in Vue.js applications.

function individualCleanData() {
  store.state.user.name = ''
  store.state.user.city = ''
}

const isaData = {
  name: 'Isabella',
  city: 'Duque de Caxias',
}

function updateIsa() {
  store.commit('storeBella', isaData)
}
</script>
<template>
  <h1>Home</h1>

  <section>
    <p>Vuex Home.vue</p>

    <p>Name:{{ store.state.user.name }}</p>
    <p>city:{{ store.state.user.city }}</p>

    <button @click="updateIsa">updateIsa [Isa]</button>

    <button @click="individualCleanData">individualCleanData</button>
  </section>

  <section>
    <h1>Vuex</h1>
    <Vuex />
  </section>

  <section>
    <h1>VueMixin and setup hooks</h1>
    <Products/>
  </section>

</template>
