<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>

    <router-view></router-view>
    <Test />
  </div>
</template>

<script>
module.exports = {
  data() {
    return {};
  },
  components: {
    Test: httpVueLoader("./components/Test.vue"),
  },
};
</script>
<style>
</style>