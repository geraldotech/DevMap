<template>
  <div>
    <h1>{{ title }}</h1>
    <home></home>
    <Foo></Foo>
  </div>
</template>
<script>
module.exports = {
  data() {
    return {
      title: "e.g Vue 2 com App.vue as Parent dos outros components",
    };
  },
  components: {
    Foo: httpVueLoader("./components/footer.vue"),
    Home: httpVueLoader("./components/Home.vue"),
  },
};
</script>
