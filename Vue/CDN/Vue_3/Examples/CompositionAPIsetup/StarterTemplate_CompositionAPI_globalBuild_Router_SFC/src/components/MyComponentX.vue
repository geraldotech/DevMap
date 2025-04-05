<script>
import { h, ref, resolveComponent, defineComponent, onMounted, getCurrentInstance, onBeforeMount, onBeforeUnmount } from 'vue'
import Cardcat from './cardcat.vue'

export default {
  components: {
    Cardcat,
  },

  setup() {
    const personData = ref('')

    onMounted(() => {})

    return {
      personData,
    }
  },
}
</script>
<template>
  <div>
    <h1>MyComponentX</h1>
    <p>{{ personData }}</p>

    <Cardcat />
  </div>
</template>
