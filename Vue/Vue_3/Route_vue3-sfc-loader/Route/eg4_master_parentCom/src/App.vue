<template>
  <div>
    <h1>Parent component</h1>
    <MyHeader />
    <NavBar />
    <router-view></router-view>
    <Extra />
    <Foo />
  </div>
</template>

<script>
module.exports = {
  data() {
    return {};
  },
  components: {
    Extra: Vue.defineAsyncComponent(() =>
      loadModule("../dist/extra.vue", options)
    ),
    Foo: Vue.defineAsyncComponent(() =>
      loadModule("../dist/footer.vue", options)
    ),
    NavBar: Vue.defineAsyncComponent(() =>
      loadModule("../dist/NavBar.vue", options)
    ),
    MyHeader: Vue.defineAsyncComponent(() =>
      loadModule("../dist/myHeader.vue", options)
    ),
  },
};
</script>
<style>
/*global */
.hello {
  background-color: rgb(31, 31, 13);
  color: white;
}

h4 {
  color: orange;
}
</style>