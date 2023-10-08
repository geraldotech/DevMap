<template>
  <div class="parent">
    <section class="foo">
      <p>copyright &copy; 2023</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
}
</script>

<style scoped>
.parent {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.parent :deep(h1) {
  color: blue;
}

.parent .foo {
  color: chartreuse;
}

@media (max-width: 650px) {
  .parent :deep(h1) {
    color: coral;
  }
  .parent .foo {
    color: blueviolet;
  }
}
</style>
