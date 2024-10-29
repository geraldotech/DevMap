<template>
  <footer>
    <p>my footer</p>
  </footer>
</template>

<script>
module.exports = {
  data: function () {
    return {};
  },
};
</script>

<style scoped>
/*
CSS scoped only fot this page!
 */
footer {
  background: gray;
  color: black;
  min-height: 30px;
  position: absolute;
  bottom: 0;
  width: 100%;
}
footer p {
  color: rgb(255, 255, 255);
}
</style>