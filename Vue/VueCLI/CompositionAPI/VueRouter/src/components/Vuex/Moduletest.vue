<script setup>
import { useStore } from 'vuex'

const store = useStore()

/* console.log(store.state)
console.log(store.state.allproducts.senha) */

const newUser = { id: 1, name: 'Geraldo Filho' }

// store.commit('moduleName/updateName', 'New Name');
const pushNewObj = () => {
  store.commit('allproducts/addProduct', newUser)
}
</script>
<template>
  <p>Senha: {{ store.state.allproducts.senha }}</p>

  <button @click="pushNewObj">push mutation</button>
  <button @click="store.dispatch('allproducts/addProduct', newUser)">push actions</button>
  <p>Items: {{ store.state.allproducts.items }}</p>
</template>
