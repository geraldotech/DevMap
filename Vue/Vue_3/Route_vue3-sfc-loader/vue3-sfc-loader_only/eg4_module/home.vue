<template>
  <div>
    <p>Home</p>
    <p>Também serve de exemplo praticando export and import</p>
    <button @click="change">change</button>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {};
  },
  methods: {
    change() {
      document.querySelector("p").style.color = "red";
    },
  },
};
</script>
<style scoped>
p {
  font-size: 150%;
  text-align: center;
  color: cadetblue;
}
</style>