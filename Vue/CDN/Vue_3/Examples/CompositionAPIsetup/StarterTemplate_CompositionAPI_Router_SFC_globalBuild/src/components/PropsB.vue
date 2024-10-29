<script>
import { ref } from 'vue'

export default {
  props: ['foo'],
  setup() {
    return {}
  },
}
</script>

<template>
  <div>
    <h1>{{ foo }}</h1>
  </div>
</template>
