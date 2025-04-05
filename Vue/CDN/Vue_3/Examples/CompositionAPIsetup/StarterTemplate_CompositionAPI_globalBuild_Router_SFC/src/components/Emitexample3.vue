<script>
import { onMounted, ref, watch } from 'vue'

export default {
  emits: ['apisize', 'algumEvento3'],
  setup(props, { emit }) {
    const sizeAPI = ref(0)
    const apisize = ref(0)
    const test = ref(0)

    const triggerEvent = () => {
      emit('algumEvento3', sizeAPI) // Emit on button click
    }

    function buscaDados() {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => (apisize.value = json.length))
    }

    onMounted(() => {
      console.log(`montado`)
      setTimeout(() => buscaDados(), 2000)

      // emit('algumEvento3', sizeAPI.value) // emit apos montar
    })

    watch(test, () => {
      console.log(`test mudou`)
    })

    watch(apisize, () => {
      console.log(`apisize mudou`)
      emit('apisize', apisize.value) // emit apos mudanca
    })

    return {
      triggerEvent,
      apisize,
      test,
    }
  },
}
</script>
<template>
  <div>
    <p>current value: {{ apisize }}</p>

    <button @click="test = 123">click to change test watch - {{ test }}</button>

    <button @click="triggerEvent">Click triggerEvent</button>
  </div>
</template>
<style scoped>
img {
  max-width: 100%;
  width: 100%;
}
div {
  max-width: 350px;
  border: 1px solid;
  text-align: center;
  margin: 0 auto;
}
</style>
