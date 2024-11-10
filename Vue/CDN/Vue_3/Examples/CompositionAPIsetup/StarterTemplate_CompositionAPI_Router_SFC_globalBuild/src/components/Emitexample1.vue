<script setup>
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['algumEvento'])

</script>
<template>
  <div>
      <button @click="emit('algumEvento')">Click me</button>
  </div>
</template>
<style scoped>

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
