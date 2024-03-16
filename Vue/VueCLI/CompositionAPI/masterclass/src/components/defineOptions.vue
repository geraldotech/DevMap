<!-- Composition API -->
<script setup>
import { ref, onMounted } from 'vue'

defineOptions({
  name: 'Header',
  geraldo: true,
})

const name = ref('Geraldo')

onMounted(() => console.log(`mounted`))
</script>

<!-- Data API -->
<script>
export default {
  data() {
    return {
      title: 'Your title',
    }
  },
  mounted() {
    console.log(`mounted DATA`)
  },
}
</script>

<template>
  <h1>

    <a href="https://vuejs.org/api/sfc-script-setup.html#defineoptions" target="_blank">defineOptions</a>
  </h1>
  <p>{{ title }}</p>
  <p>{{ name }}</p>
</template>