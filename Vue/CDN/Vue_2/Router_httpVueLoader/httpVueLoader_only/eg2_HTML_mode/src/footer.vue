<template>
  <footer>
    <p>{{ txt }} &copy; 2022</p>
  </footer>
</template>
<script>
module.exports = {
  data() {
    return {
      txt: "Footer",
    };
  },
};
</script>
<style scoped>
footer {
  position: absolute;
  bottom: 0;
  text-align: center;
  background: rgb(78, 82, 88);
  width: 99%;
  margin: 0 auto;
}
</style>
