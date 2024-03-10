<template>
  <div class="parent">
    <section class="child">
      <h1>Welcome to my Website</h1>
      <p><del>main.js nao pode ser type module </del></p>
      <p>
        Fixed this issue Thanks gmap.dev
        <strong>just load a sfc-loader.js in index.html</strong>
      </p>
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
.child p {
  color: dodgerblue;
  text-align: center;
}

.child > :nth-child(3) {
  color: springgreen;
}
</style>
