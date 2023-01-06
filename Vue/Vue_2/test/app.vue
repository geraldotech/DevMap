<template>
  <div>
    <p>App.vue</p>
    <Aa />
    <Aa>
      <p>Master</p>
      <Download />
    </Aa>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {};
  },
  components: {
    Aa: httpVueLoader("./a.vue"),
    Download: httpVueLoader("./download.vue"),
  },
};
</script>

<style>
</style>