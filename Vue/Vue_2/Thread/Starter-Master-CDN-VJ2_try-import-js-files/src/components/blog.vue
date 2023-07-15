<template>
  <div>
    <h1>blog.vue</h1>

    <p>{{ Compois }}</p>
    <component :is="Compois.map"></component>
  </div>
</template>
<script>
/* import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
}); */
//import test from "../src/components/test.js";
//httpVueLoader.register(Mytest, "../src/components/test2.vue");

module.exports = {
  mounted() {
    console.log(`from`, Posts);
  },
  name: "blog",
  components: {
    Nvige: httpVueLoader("../components/test2.vue"),
  },
  data() {
    return {
      Compois: Posts,
    };
  },
};
</script>
<style scoped>
h1 {
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
