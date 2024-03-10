<template>
  <div>
    <h1>{{ title }}</h1>
    <Home></Home>

    <nav>
      <router-link to="/">Home Page</router-link>
      <router-link to="/youtube">Youtube</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>

    <Foot></Foot>
  </div>
</template>
<script>
const Foot = Vue.defineAsyncComponent(() =>
  loadModule('./src/components/Footer.vue', options)
)

module.exports = {
  data() {
    return {
      title: 'VueJS 2 with sfc-loader and routers',
    }
  },
  components: {
    Home: Vue.defineAsyncComponent(() =>
      loadModule('./src/components/Home.vue', options)
    ),
    Foot,
  },
}
</script>
<style>
html {
  font-size: 150%;
}
</style>
