<script>
import { ref, toRefs, onMounted } from 'vue'

export default {
  props: {
    title: String,
    city: String,
    state: String,
  }, // more about props https://vuejs.org/api/composition-api-setup.html
  setup(props) {
    const name = ref('Geraldo')
    console.log(name.value)

    /* DESTRUCTURE with Refs and native */
    const { city } = toRefs(props)
    console.log(city.value)

    const { state } = props
    console.log(state)

    // props
    console.log(props.title)

    const clickHanlder = () => console.log(`click`)

    onMounted(() => {
      console.log(`onMounted`)
    })

    return {
      name,
      clickHanlder,
    }
  },
  mounted() {
    console.log(`montado`)
  },
}
</script>
<template>
  <h1 @click="clickHanlder">Hello {{ name }} from Composition setup export default {{ title }}</h1>
</template>
