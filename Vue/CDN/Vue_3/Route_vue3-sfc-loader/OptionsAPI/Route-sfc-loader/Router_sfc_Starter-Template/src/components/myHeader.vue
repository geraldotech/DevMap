<template>
  <div>
    <header>
      <h1>h1 Header</h1>
    </header>
  </div>
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
scoped only for this header
*/
h1 {
  color: rgb(255, 17, 17);
}
nav ul {
  display: flex;
  width: 300px;
  justify-content: space-evenly;
}
</style>

