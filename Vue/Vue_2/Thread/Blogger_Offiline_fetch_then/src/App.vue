<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/blog">Blog</router-link>
    <router-view></router-view>
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
<style></style>
