<template>
  <div>
    <h1>App.vue</h1>
    <router-link to="/">Home</router-link>
    <router-link to="about">About</router-link>
    <router-view></router-view>
    <About />
  </div>
</template>

<script>
module.exports = {
  data() {
    return {};
  },
  components: {
    About: httpVueLoader("./components/about.vue"),
  },
};
</script>