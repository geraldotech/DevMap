<template>
  <footer>
    <p>{{ ab }}</p>


  </footer>
</template>

<style scoped>
</style>
 
<script>
module.exports = {
  created(){
    //console.log()
  },
  data: function () {
    return {
      ab: "by gmapdev - footer.vue",
    };
  },
};
</script>
<style scoped>
footer{
  position: absolute;
  bottom: 0;
  min-height: 30px;
  
}
</style>

