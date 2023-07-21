<template>
  <div>
    <h1>blog.vue</h1>
    <component :is="Compois.map"></component>
    <component :is="Compois.rtx"></component>

    <notebook></notebook>
    <!-- nao vai conseguir usar esse component pq o msm foi registrado localmente -->
    <!--  <Bestsmartphones></Bestsmartphones> -->
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
div {
  background: coral;
}
</style>
