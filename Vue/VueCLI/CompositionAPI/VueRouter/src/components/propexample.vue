<script>
import { toRefs } from 'vue'
export default {
  props: {
    desconto: String,
  },

  setup(props) {
    const { desconto } = toRefs(props)

    console.log(desconto.value)

    return {

      desconto
    }
  },
}
</script>
<template>
  <h3>Desconto: {{ desconto }}</h3>
</template>
