<script>
import { onMounted, ref, watch } from 'vue'

export default {
  setup(props, { emit }) {
    const age = ref(0)

    onMounted(() => {})

    watch(age,  (newVal, oldVal) => {
      console.log(`age oldVal`, oldVal)
      console.log(`age newVal`, newVal)
    })

    return {
      age,
    }
  },
}
</script>
<template>
  <div>
    <p>current age value: {{ age }}</p>

    <button @click="age = 123">click to change age value</button>
  </div>
</template>
<style scoped>

div {
  max-width: 350px;
  border: 1px solid;
  text-align: center;
  margin: 0 auto;
}
</style>
