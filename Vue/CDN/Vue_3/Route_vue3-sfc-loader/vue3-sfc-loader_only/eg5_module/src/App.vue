<template>
  <div>
    <MyHeader />
    <p>App.vue</p>
    <p>Também serve de exemplo praticando export and import</p>
    <button @click="change">change</button>

    <MyCompo />
    <Foo />
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {};
  },
  components: {
    MyHeader: Vue.defineAsyncComponent(() =>
      loadModule("../src/components/myHeader.vue", options)
    ),
    MyCompo: Vue.defineAsyncComponent(() =>
      loadModule("../src/components/myComponent.vue", options)
    ),
    Foo: Vue.defineAsyncComponent(() =>
      loadModule("../src/components/footer.vue", options)
    ),
  },
  methods: {
    change() {
      document.querySelector("p").style.color = "red";
    },
  },
};
</script>
<style scoped>
p {
  font-size: 150%;
  text-align: center;
  color: cadetblue;
}
</style>