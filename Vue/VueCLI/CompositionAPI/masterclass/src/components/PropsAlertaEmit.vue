<script setup>
import { defineEmits } from 'vue'

defineProps({
  variant: {
    type: String,
    // required: true
  },
})

const emit = defineEmits(['close'])

function onClick(event) {
  console.log(event)
  emit('close', event) // Emit the close event to parent
}
</script>

<template>
  <div :class="`alert alert-${variant}`">
    Seu formulario foi enviado com sucesso

    <button @click="onClick">x</button>
  </div>
</template>
<style scoped>
.alert {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  padding: 1rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 6px;
  color: #fff;
  background-color: #333;
  font-weight: bold;
}

.alert-success {
  background-color: #42b983;
}
.alert-danger {
  background-color: red;
}
</style>
