<template>
  <div>
     <Nava></Nava>

    <button @click="opt = !opt">Show</button>
    <p v-if="opt">
      <Blog blogtitle="Nova postagem">
      
    </p>
  
   <Download/>
  </div>
</template>


<script>
module.exports = {
  data() {
    return {
      opt: false,
    };
  },
  components: {
    Download: httpVueLoader("./download.vue"),
    Blog: httpVueLoader("./blog.vue"),
    Nava: httpVueLoader("./Nava.vue"),
  },
};
</script>

<style>
</style>