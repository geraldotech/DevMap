<template>
  <div>
    <h1>Computed.vue</h1>

    <select v-model="select">
      <option value=""></option>
      <option value="1">One</option>
      <option value="2">Two</option>
    </select>
    <p>{{ select }}</p>
    <h2 v-if="one">One more time</h2>
    <h2 v-if="two">Two more time</h2>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      select: "",
    };
  },
  computed: {
    one() {
      return this.select == 1;
    },
    two() {
      if (this.select == 2) {
        return true;
      }
    },
  },
};
</script>

<style></style>
