<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <button @click="increment">Increment from App.vue</button>
    <!-- component -->
    <Increment></Increment>
    <hr />
    <h2>{{ $store.state.counter }}</h2>

    <router-view></router-view>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {};
  },
  components: {
    Increment: httpVueLoader("../src/components/Increment.vue"),
  },
  methods: {
    increment() {
      this.$store.state.counter++;
      console.log(this.$store.state.counter);
    },
  },
};
</script>

<style>
* {
  color-scheme: dark;
  box-sizing: border-box;
}
body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 75rem;
  width: 100%;
  min-width: 320px;
  margin: 0 auto;
  text-align: center;
}
header {
  min-height: 50px;
  background: rgb(61, 71, 71);
}
article {
  flex: 1;
}

nav {
  display: flex;
  width: 400px;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
  margin: 5px auto;
}
ul li {
  list-style: none;
}

footer {
  height: 50px;
  background: grey;
  padding-top: 15px;
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
}

button {
  margin: 10px;
}
</style>
