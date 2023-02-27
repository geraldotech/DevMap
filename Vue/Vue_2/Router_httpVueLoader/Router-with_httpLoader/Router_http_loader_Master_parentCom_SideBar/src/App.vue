<template>
  <div>
    <Menua></Menua>
    <section>
      <router-view class="router-view"></router-view>
      <Sidebar />
    </section>
    <Foo></Foo>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {};
  },
  components: {
    Menua: httpVueLoader("../src/components/Menu.vue"),
    Foo: httpVueLoader("../src/components/footer.vue"),
    Sidebar: httpVueLoader("../src/components/Sidebar.vue"),
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
  padding: 0 10px;
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
section {
  display: flex;
  justify-content: space-between;
}

.sidebar {
  background: rgb(56, 18, 18);
  flex: 1 0 200px;
  height: 50vh;
}

.router-view {
  flex: 1 0 70%;
}

@media screen and (max-width: 650px) {
  section {
    flex-direction: column;
    flex: 1;
    min-height: 50vh;
  }
  .sidebar {
    min-width: 100%;
    margin: 0 auto;
    margin-top: 50px;
    height: 20vh;
  }
}
</style>