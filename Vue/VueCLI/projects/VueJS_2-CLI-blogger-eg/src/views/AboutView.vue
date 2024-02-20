<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ $route.name }}</p>
  </div>
</template>
<script>
export default {
  name: 'AboutMe',
  created() {
    console.log(this.$route)
  },
}
</script>
