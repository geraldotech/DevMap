<script>
// import { h, ref, resolveComponent, defineComponent, onMounted, getCurrentInstance, onBeforeMount, onBeforeUnmount } from 'vue'

export default {
  name: 'btn',
  props: {
    btn: {
      type: String,
      //required: false,
      default: 'Default button name',
    },
  },
  setup(props) {
    const media = Vue.ref(0)
  

    const handleClick = () => {
      console.log(`button click`)
    }

    onMounted(() => {
      handleClick()
    })

    return {
      media, handleClick
    } 
  },
}
</script>
<template>
  <div>
    <button @click="handleClick">{{ btn }}</button>
  </div>
</template>
<style scoped>
  
  button{
    outline: none;
    border: none;
    padding: .5rem;
  }
</style>
