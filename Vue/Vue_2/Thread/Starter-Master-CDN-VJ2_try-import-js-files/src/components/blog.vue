<template>
  <div>
    <h1>blog.vue</h1>
    <component :is="Compois.map"></component>
    <component :is="Compois.rtx"></component>
  </div>
</template>
<script>
module.exports = {
  mounted() {},
  name: "blog",
  components: {
    Nvige: httpVueLoader("../components/test2.vue"),
  },
  data() {
    return {
      //Compois rebe os valores de Posts
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
