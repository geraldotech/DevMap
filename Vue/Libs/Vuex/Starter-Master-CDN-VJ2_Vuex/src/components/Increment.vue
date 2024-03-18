<template>
  <div>
    <!--    direct commit -->
    <p>Increment.vue</p>
    <button @click="$store.commit('increment')">
      Increment Component direct commit
    </button>
    <!--   or call a function -->
    <button @click="increment">Increment from Component</button>`
    
    <p>Data from input by VUEX{{ $store.state.aboutdata }}</p>`
  </div>
</template>

<script>
module.exports = {
  methods: {
    increment() {
      this.$store.state.counter++;
    },
  },
};
</script>
<style scoped>
div{
  border: 1px solid ;
  height: 30vh;
}
</style>
