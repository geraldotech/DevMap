<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue'

const a = 1
const b = ref(2)

defineExpose({
  a,
  b
})

onMounted(() => {
  const instance = getCurrentInstance();
 // console.log(instance.parent);
});

</script>
<template>
  <p>child defineExpose:{{ b }}</p>
</template>