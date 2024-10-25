<script>
import { ref } from 'vue'

export default {
  setup() {
    const foo = ref(0)

    return {
      foo,
    }
  },
}
</script>

<template>
  <div>
    <h1 @click="foo++">About Page {{ foo }}</h1>
  </div>
</template>
