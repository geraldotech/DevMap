<template>
  <div>
    <!--    direct commit -->
    <button @click="$store.commit('increment')">
      Increment Component direct commit
    </button>
    <!--   or call a function -->
    <button @click="increment">Increment from Component</button>
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
