<template>
  <div>
    <h1>Parent component</h1>
    <MyHeader>
    <Home>
  </div>
</template>
<script>
module.exports = {
  data() {
    return {};
  },
  components: {
    MyHeader: Vue.defineAsyncComponent(() =>
      loadModule("./src/components/myHeader.vue", options)
    ),
    Home: Vue.defineAsyncComponent(() =>
      loadModule("./src/components/Home.vue", options)
    ),
  },
};
</script>
