<script>
export default {
  name: 'namecomponent',
  props: {
    btn: {
      type: String,
      //required: false,
      default: 'What is component no named was defined',
    },
  },
  setup() {
    return {}
  },
}
</script>
<template>
  <div>
    <h2>{{ btn }}</h2>
  </div>
</template>
<style scoped>
    div{
      background: blueviolet;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      text-align: center;
    }
</style>
