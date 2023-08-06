<template>
  <div>
    <h1>blog.vue</h1>
    <component :is="Compois.map"></component>
    <component :is="Compois.rtx"></component>

   
    <!-- nao vai conseguir usar esse component pq o msm foi registrado localmente -->
    <!--  <Bestsmartphones></Bestsmartphones> -->


<h1>Vue.prototype</h1>
        <h2>{{$cdnimg23}}</h2>
   
     <figure>
        <img :src="`${$cdnimg23}/vuejs.png`" alt="">
     </figure>
     <hr>
<h1>mixin</h1>
    <p>{{imgmix}}</p>
    <figure>
     <img :src="imgmix+'/vuejs.png'" alt="">
    </figure>

     <figure>
     <img :src="`${imgmix}/vuejs.png`" alt="">
    </figure>

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
  background: rgb(68, 61, 96);
}
</style>
