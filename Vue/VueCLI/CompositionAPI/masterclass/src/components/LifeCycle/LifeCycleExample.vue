<script setup>
import {onUnmounted, onBeforeUnmount} from 'vue'

onUnmounted(() => {
  console.log(`onUnmounted`)

})

onBeforeUnmount(() => {
  console.log(`onBeforeUnmount`)

})


</script>
<template>
  <h1>Header Hooks</h1>
</template>