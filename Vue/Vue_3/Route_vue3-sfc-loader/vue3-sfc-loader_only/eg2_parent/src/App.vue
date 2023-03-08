<template>
  <div>
    <h1>App parent.vue</h1>
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
      loadModule("./src/components/myComponent.vue", options)
    ),
    myHeader: Vue.defineAsyncComponent(() =>
      loadModule("./src/components/myHeader.vue", options)
    ),
    "my-footer": Vue.defineAsyncComponent(() =>
      loadModule("./src/components/footer.vue", options)
    ),
  },
};
</script>

<style>
</style>