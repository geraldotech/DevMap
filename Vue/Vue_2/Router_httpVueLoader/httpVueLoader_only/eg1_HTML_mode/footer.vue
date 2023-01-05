<template>
  <footer>
    <p>{{ f }}</p>
  </footer>
</template>

<script>
module.exports = {
  data: function () {
    return {
      f: "Footer",
    };
  },
};
</script>

<style scoped>
p {
  color: coral;
  font-size: 1.2rem;
  text-align: center;
}
</style>