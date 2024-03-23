<script setup>

import { onUnmounted, onBeforeUnmount } from 'vue'

onUnmounted(() => {
  console.log(`onUnmounted`)
})

onBeforeUnmount(() => {
  console.log(`onBeforeUnmount`)
})
</script>
<template>

  <h2>Hello Life Cycle Toggle</h2>
  
 
</template>
