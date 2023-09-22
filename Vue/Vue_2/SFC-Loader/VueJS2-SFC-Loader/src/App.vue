<template>
  <div>
    <h1>{{ title }}</h1>
    <Home></Home>
  </div>
</template>
<script>
module.exports = {
  data() {
    return {
      title: "VueJS 2 with sfc-loader - template" ,
    };
  },
  components: {
    Home: Vue.defineAsyncComponent(() =>
      loadModule("./src/components/Home.vue", options))
  },
};
</script>
<style>
html {
  font-size: 150%;
}
</style>
