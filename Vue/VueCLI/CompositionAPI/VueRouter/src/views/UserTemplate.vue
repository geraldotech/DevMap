<script setup>
import { useRoute, useRouter } from 'vue-router'
import { watch } from 'vue'

// route tem dados da rota
// router tem funcionalidades
const route = useRoute()
const router = useRouter()



function login(){
  console.log(`oi`)
  // after login redirect to

  // manual and object
  //router.push('/about')
  router.push({name: 'about'})
}


// console.log(route)
// console.log(router)

console.log(route.params)
console.log(route.query)

watch(
  () => route.params.id,
  (newId, oldId) => {
    // react to route changes...
    console.log(newId)
    console.log(oldId)
  }
)
</script>
<template>
  <h1>User template</h1>

  <RouterLink to="/usuarios/10?page=5">Click to params and query: /usuarios/10?page=5</RouterLink>
  <p>Your user: {{ $route.params }} na pagina {{ $route.query.page }}</p>

  <section>
    <h3>Route</h3>
    <p>{{ route }}</p>
  </section>

  <section>
    <h3>Router</h3>
    <p>{{ router }}</p>
  </section>

  <section>

    <h3>route push</h3>
    <button @click="login">Login</button>

  </section>

</template>
<style scoped>
section {
  margin-top: 10px;
  border: 1px solid;
}
</style>
