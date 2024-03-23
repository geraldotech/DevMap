<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'success',
    },
  },
  // can setup(props, context) or destructuring...
  setup(props, { slots, emit }) {
    console.log(`egComSetUp`, slots, emit)
    const name = 'Geraldo'

    const emitToParent = (event) => {
      emit('salvar', event)
    }

    return {
      name,
      emitToParent,
    }
  },
}
</script>
<template>
  <div>
    <h2>export default setup()...</h2>

    <button @click="emitToParent">emitToParent</button>
  </div>
</template>
