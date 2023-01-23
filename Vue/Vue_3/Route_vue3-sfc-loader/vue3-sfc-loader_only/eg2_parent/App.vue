<template>
  <div>
    <h1>parent.vue</h1>
    <myHeader />
    <my-component />
    <my-footer ativou />
  </div>
</template>

<script>
module.exports = {
  data() {
    return {};
  },
  components: {
    "my-component": Vue.defineAsyncComponent(() =>
      loadModule("./components/myComponent.vue", options)
    ),
    myHeader: Vue.defineAsyncComponent(() =>
      loadModule("./components/myHeader.vue", options)
    ),
    "my-footer": Vue.defineAsyncComponent(() =>
      loadModule("./components/footer.vue", options)
    ),
  },
};
</script>

<style>
</style>