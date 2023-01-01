<template>
  <div>
    <h1>Parent component</h1>
    <MyHeader>
  </div>
</template>
<script>
module.exports = {
  data() {
    return {};
  },
  components: {
    MyHeader: Vue.defineAsyncComponent(() =>
      loadModule("../dist/myHeader.vue", options)
    ),
    About: Vue.defineAsyncComponent(() =>
      loadModule("../dist/About.vue", options)
    ),
  },
};
</script>
