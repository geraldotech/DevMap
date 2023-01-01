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
      loadModule("../src/components/extra.vue", options)
    ),
    Foo: Vue.defineAsyncComponent(() =>
      loadModule("../src/components/footer.vue", options)
    ),
    NavBar: Vue.defineAsyncComponent(() =>
      loadModule("../src/components/NavBar.vue", options)
    ),
    MyHeader: Vue.defineAsyncComponent(() =>
      loadModule("../src/components/myHeader.vue", options)
    ),
  },
};
</script>
<style>
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
nav ul {
  display: flex;
  justify-content: space-evenly;
  width: 332px;
}
</style>