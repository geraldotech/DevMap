<template>
  <section>
    <h2>text, type</h2>
    <a href="https://vuesax.com/docs/components/Loading.html#type"
      >https://vuesax.com/docs/components/Loading.html#type</a
    >
    <vs-button @click="openLoading">Open Loading</vs-button>

    <hr />
    <h1>input</h1>
    <div class="center content-inputs">
      <vs-input border v-model="value" placeholder="Namexx" />
      <vs-input border v-model="value" placeholder="Namexx" />
      <vs-input border v-model="value" placeholder="Namexx" />

      <vs-input
        color="#7d33ff"
        border
        type="password"
        v-model="value2"
        placeholder="Password"
      >
        <template #icon>
          <i class="bx bx-lock-open-alt"></i>
        </template>
      </vs-input>
    </div>
  </section>
</template>

<script>
module.exports = {
  data() {
    return {
      value: "",
      value2: "",
      value3: "",
    };
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
</style>
