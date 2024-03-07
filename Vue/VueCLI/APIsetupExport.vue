<script>
import { ref } from 'vue'

export default {
  setup() {
    const name = ref('Geraldo')

    return {
      name,
    }
  },
}
</script>
<template>
  <h1>Hello {{ name }} from Composition setup export default</h1>
</template>
