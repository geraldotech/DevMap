<template>
  <div>
    <h1>Parent Component</h1>
    <Menua></Menua>
    <router-view></router-view>
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

footer {
  color: coral;
  position: absolute;
  bottom: 0;
  background: olive;
  width: 100%;
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