<template>
  <footer>
    <p v-bind:id=id>{{ ab }}</p>
  </footer>
</template>

<style scoped>
</style>
 
<script>
module.exports = {
  data: function () {
    return {
      ab: "by gmapdev - footer.vue",
      id: 'cssid'
    };
  },
};
</script>
<style scoped>
#cssid{
  color: aqua;
}

</style>

