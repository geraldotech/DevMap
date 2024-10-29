<script setup>
import { ref } from 'vue'

const foo = ref(0)
</script>
<template>
  <div>
    <h1 @click="foo++">Card Cat {{ foo }}</h1>
    <figure>
      <img
        src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="" />
    </figure>
  </div>
</template>
<style scoped>
* {
  margin: 0;
}
img {
  max-width: 100%;
  width: 100%;
}
div {
  max-width: 350px;
  border: 1px solid;
  text-align: center;
  margin: 0 auto;
}
</style>
