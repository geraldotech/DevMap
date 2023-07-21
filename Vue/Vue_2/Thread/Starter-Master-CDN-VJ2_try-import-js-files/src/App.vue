<template>
  <div>
    <h1>App.vue Parent Component</h1>
    <h2>Starter Template by geraldox.com</h2>
    <Menua></Menua>
    <router-view></router-view>
    <hr />
    <p>{{ ExisteComp() ? ExisteComp() : "nao" }}</p>

    <div v-if="ExisteComp()">
      <h1 style="color: dodgerblue">Existe Component</h1>
      <Blog></Blog>
    </div>
    <notebook></notebook>

    <Bestsmartphones></Bestsmartphones>

    <h1>Dynamic Components</h1>
    <select @change="mudanca()" v-model="optcom">
      <option value=""></option>
      <option value="Bestsmartphones">Bestsmartphones</option>
      <option value="Bestsmartphones2">Bestsmartphones2</option>
    </select>
    <keep-alive>
      <component v-bind:is="optcom"></component>
    </keep-alive>
    <component v-bind:is="Blogs"></component>
  </div>
</template>
<script>
//component global
/* globally, using Vue.component: */
Vue.component("notebook", {
  template: "<div><h1>Notebooks</h1></div>",
});

//local
const smartphones = Vue.component("mysmartphones", {
  template: "<div><h1>My Smartphones 1</h1></div>",
});
const smartphones2 = {
  template: "<div><h1>My Smartphones 2</h1></div>",
};

module.exports = {
  created() {
    console.warn("Vue-options", Vue.options);
    //get All Vue Global Components Name
    console.warn("Vue-options", Object.keys(Vue.options.components));
    console.warn("this.$options.components", this.$options.components);

    //get All Vue Global Components Name cheking a name
    console.warn(
      "Exists Global",
      Object.keys(this.$options.components).includes("Menua")
    );
    console.log(`----------------------------------------`);
    console.log("Local Components", Object.keys(this.$options.components));
    console.log(
      "Exists",
      Object.keys(this.$options.components).includes("Foo")
    );
    console.log("Exists", "Foo" in this.$options.components);
  },

  data() {
    return {
      Blogs: "Bestsmartphones",
      optcom: ``,
    };
  },
  components: {
    Menua: httpVueLoader("../src/components/Menu.vue"),
    Foo: httpVueLoader("../src/components/footer.vue"),
    Blog: httpVueLoader("../src/components/blog.vue"),
    Bestsmartphones: smartphones,
    Bestsmartphones2: smartphones2,
  },
  methods: {
    ExisteComp() {
      return "Blog" in this.$options.components;
    },
    mudanca() {
      console.warn(this.optcom);
    },
  },
  ready() {},
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
</style>
