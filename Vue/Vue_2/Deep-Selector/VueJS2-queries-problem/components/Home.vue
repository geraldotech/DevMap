<template>
  <div class="parent">
    <section class="child">
      <h1>Welcome to my Website</h1>
    </section>
    <section>
      <h1>An other section</h1>
    </section>
  </div>
</template>
<script>
module.exports = {
  data() {
    return {
      a: 'My Home Page',
    }
  },
}
</script>
<style scoped>
html {
  font-size: 150%;
}
.child {
  color: rgb(197, 0, 0);
}

/* desktop */
@media (min-width: 650px) {
}

/*  mobile  */
@media (max-width: 650px) {
  .child {
    color: rgb(0, 197, 197) !important;
  }
}
</style>
