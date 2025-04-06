<template>
  <section>
    <h1>About page</h1>

    <button @click="$store.commit('increment')">increment from About.vue</button>

    <hr />
    <button @click="$store.commit('changeName')">changeName</button>
    <h4>Data from state: {{ $store.state.user }}</h4>

    <hr />

    <input
      type="text"
      @input="setAboutData" placeholder="send data to vuex and share between components" />

      <p>{{ $store.state.aboutdata }}</p>
  </section>
</template>
<script>
module.exports = {
  data()  {
    return {

    }
  },
  methods: {
    setAboutData() {
     this.$store.state.aboutdata = event.target.value
    },
  },
}
</script>

<style scoped>
p {
  text-align: justify;
  color: coral;
}
h1 {
  margin-bottom: 15px;
}
img {
  width: 25%;
}
</style>
>
