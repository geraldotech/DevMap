<template>
  <div class="parent mobile">
    <h1>Welcome to my Website</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, quaerat!
    </p>
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
.parent {
  color: rebeccapurple;
}

@media (max-width: 650px) {
  /* mobile -  never works a menos que a classe .parent fora do `@media` não existisse */

  .mobile {
    color: darkcyan !important;
  }
}
</style>
