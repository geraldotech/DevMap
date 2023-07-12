<template>
  <section>
    <Menua></Menua>
    <router-view></router-view>
    <h2>text, typex</h2>
    <a href="https://vuesax.com/docs/components/Loading.html#type"
      >https://vuesax.com/docs/components/Loading.html#type</a
    >

    <hr />
    <vs-button @click="openLoading">Open Loading</vs-button>
    <vs-alert :hidden-content.sync="hidden">
      <template #title> Vuesax Framework </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a
      <b>UI components framework</b> created with
      <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for
      all types of developed from the frontend lover to the backend that wants
      to easily create your visual approach to the end user
    </vs-alert>
    <vs-alert :hidden-content.sync="hidden2">
      <template #title> Vuesax Framework </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a
      <b>UI components framework</b> created with
      <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for
      all types of developed from the frontend lover to the backend that wants
      to easily create your visual approach to the end user
    </vs-alert>
  </section>
</template>

<script>
module.exports = {
  data() {
    return {
      hidden: true,
      hidden2: true,
    };
  },
  components: {
    Menua: httpVueLoader("../src/components/Menu.vue"),
  },
  methods: {
    openLoading() {
      const loading = this.$vs.loading({
        text: `Loading Links to download`,
        type: `circles`,
      });
      setTimeout(() => {
        loading.close();
      }, 3000);
    },
  },
  //load na carga
  mounted() {
    //this.openLoading();
  },
};
</script>

<style>
* {
  color-scheme: dark;
  box-sizing: border-box;
  margin: 0;
  padding: 0px;
}
body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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

nav ul {
  display: flex;
  width: 400px;
  justify-content: space-evenly;
  margin: 5px auto;
}
ul li {
  list-style: none;
}
picture > img {
  width: 100%;
  max-width: 30%;
}
.route-content {
  margin-top: 40px;
}
section p {
  padding: 0 40px;
}

nav ul li {
  background: darkblue;
  padding: 5px 10px;
  border-radius: 10px;
}
nav ul li a {
  text-decoration: none;
}
nav ul li a:hover {
  color: rgb(18, 223, 137);
}
hr {
  margin: 20px 0;
}
</style>
