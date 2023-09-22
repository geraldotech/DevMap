<template>
  <div>
    <p>{{ str }}</p>
    <!-- 
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About Us</router-link>
    </nav>

    <router-view></router-view> -->

    <router-link to="/">Home Page</router-link>
    <router-link to="/youtube">Youtube</router-link> <br />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: 'Home Page',
    }
  },
}
</script>

<style></style>
