<script>
export default {
  emits: ['algumEvento2'],
  setup(props, { emit }) {
    emit('algumEvento2')

    const triggerEvent = () => {
      emit('algumEvento2') // Emit on button click
    }
    return {
      triggerEvent,
    }
  },
}
</script>
<template>
  <div>
    <button @click="triggerEvent">Click me</button>
  </div>
</template>
<style scoped>
* {
  margin: 0;
}
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
