<script setup>
import AppProductVue from './AppProduct.vue'
import { useStore } from 'vuex'

const store = useStore()

</script>

<template>
  <h1>Produtos {state and mutations}</h1>
  <h2>Total itens:: {{ store.state.cart.length }}</h2>
  <p>Itens no cart: {{ store.state.cart }}</p>
  <AppProductVue
    v-for="product in store.state.products"
    :key="product.id"
    :product="product" />
    <h3>Total à pagar R$: {{ store.getters.total }}</h3>
</template>
