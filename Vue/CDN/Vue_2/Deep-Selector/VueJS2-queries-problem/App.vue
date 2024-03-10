<template>
  <div>
    <h1>{{ title }}</h1>
    <home></home>
  </div>
</template>
<script>
module.exports = {
  data() {
    return {
      title: 'Contex @Media Queries problem',
    }
  },
  components: {
    Home: httpVueLoader('./components/Home.vue'),
  },
}
</script>
<style>
html {
  font-size: 150%;
}
</style>
