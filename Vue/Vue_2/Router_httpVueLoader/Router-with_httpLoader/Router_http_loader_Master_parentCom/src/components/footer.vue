<template>
  <footer>
    <p>{{ ab }}</p>
  </footer>
</template>

<style scoped>
footer {
  padding-top: 15px;
  background: rgb(63, 39, 31);
  height: 50px;
  text-align: center;
}
</style>
 
<script>
module.exports = {
  data: function () {
    return {
      ab: "by gmapdev - footer.vue - Footer Component",
    };
  },
};
</script>

