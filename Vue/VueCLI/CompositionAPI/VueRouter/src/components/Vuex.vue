<script setup>
import { reactive } from 'vue'

const user = reactive({
  name: 'Geraldo',
  city: 'Maceio',
})
</script>
<template>
  <p>How to Avoid Prop Drilling in Vue</p>
  <p>{{ user.name }}</p>
</template>
