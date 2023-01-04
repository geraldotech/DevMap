<template>
  <div>
    {{ msn }}
    <img :src="link" alt="img" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msn: "Outro componente footer",

      link: "./src/assets/vuejs-nested.jpg",
    };
  },
  methods: {},
};
</script>
<!-- only for this component -->
<style scoped>
</style>