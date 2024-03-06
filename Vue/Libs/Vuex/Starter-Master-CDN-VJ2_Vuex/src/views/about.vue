<template>
  <section>
    <h1>About page</h1>
    <button @click="$store.commit('increment')">
      increment from About.vue
    </button>
  </section>
</template>

<style scoped>
p {
  text-align: justify;
  color: coral;
}
h1 {
  margin-bottom: 15px;
}
img {
  width: 25%;
}
</style>
>
