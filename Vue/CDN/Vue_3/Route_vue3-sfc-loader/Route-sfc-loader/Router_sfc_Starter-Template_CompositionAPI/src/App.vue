

<script setup>

const Extra = Vue.defineAsyncComponent(() => loadModule('../src/components/extra.vue', options))
const Foo = Vue.defineAsyncComponent(() => loadModule('../src/components/footer.vue', options))
const NavBar = Vue.defineAsyncComponent(() => loadModule('../src/components/NavBar.vue', options))
const MyHeader = Vue.defineAsyncComponent(() => loadModule('../src/components/myHeader.vue', options))

import { ref } from 'vue'

const name = ref('Geraldo')
</script>

<template>
  <div>
    <MyHeader />

    <h1>Parent component</h1>
    <button @click="name = 'novo'">change Name</button>
    <p>{{ name }}</p>

    <Extra />
    <NavBar />
    <router-view></router-view>
    <Extra />
    <Foo />
  </div>
</template>

<style scoped>
/*global */
* {
  color-scheme: dark;
}
.hello {
  background-color: rgb(31, 31, 13);
  color: white;
}

h4 {
  color: orange;
}

ul li,
p {
  color: dodgerblue;
}

</style>
