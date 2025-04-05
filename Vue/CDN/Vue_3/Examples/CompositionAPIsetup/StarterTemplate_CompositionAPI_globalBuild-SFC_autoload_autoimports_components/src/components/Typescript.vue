<script>
/* Component importando outro component com autoimports */
export default {
  name: 'namecomponent',
  props: {
    btn: {
      type: String,
      //required: false,
      default: 'What is component no named was defined',
    },
  },
  components:{
    whatisthatxx: autoimports('Whatis'),
  },
  setup() {
    return {}
  },
}
</script>
<template>
  <div>
    <h2>Typescript component</h2>

    <whatisthatxx btn="son of Typescript.vue" />
  </div>
</template>
<style scoped>
div {
  background: rgb(3, 89, 239);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
  color: black;
  padding: 1.2rem;
}
</style>
