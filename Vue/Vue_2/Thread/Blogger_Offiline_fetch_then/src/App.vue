<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
    <Blogger />
  </div>
</template>

<script>
module.exports = {
  data() {
    return {};
  },
  components: {
    Blogger: httpVueLoader("./components/Blog.vue"),
  },
};
</script>
<style>
</style>