<script setup>
import { defineComponent, defineEmits, defineModel, ref} from 'vue';

const model = defineModel()

function update() {
  model.value++
}
</script>

<template>
  <div>parent bound v-model is: {{ model }}</div>
  <button @click="update">update</button>
</template>
