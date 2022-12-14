<template>
  <div>
    <p>{{ img }}</p>
    <input type="checkbox" v-model="sks" id="op" />
    <label for="op">{{ sks ? "Checked" : "Unchecked" }}</label>
    <p v-show="sks">Show</p>
  </div>
</template>
<script>
module.exports = {
  data() {
    return {
      img: `Images`,
      sks: false,
    };
  },
};
</script>