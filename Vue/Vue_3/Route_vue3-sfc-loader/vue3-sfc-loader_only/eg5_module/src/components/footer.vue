<template>
  <div>
    <h1>{{ foo }}</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quidem.
    </p>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      foo: "Footer",
    };
  },
};
</script>

<style scoped>
/*
CSS scoped only fot this page!
 */
h1 {
  color: rgb(255, 17, 17);
}
</style>