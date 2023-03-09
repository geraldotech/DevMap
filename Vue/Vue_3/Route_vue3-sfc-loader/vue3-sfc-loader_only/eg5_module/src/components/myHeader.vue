<template>
  <div>
    <header>
      <h1>h1 Header</h1>
      <p>Load components by onClick</p>
    </header>
    <nav>
      <ul>
        <li>
          <a @click.prevent="LoadFile(`Home`)" href="home">Home</a>
        </li>
        <li>
          <a @click.prevent="LoadFile(`foo`)" href="">Foo.vue</a>
        </li>
      </ul>
    </nav>
    <!-- render currently component -->
    <component :is="opt"></component>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      opt: null,
    };
  },
  components: {
    foo: Vue.defineAsyncComponent(() =>
      loadModule("./src/components/foo.vue", options)
    ),
    Home: Vue.defineAsyncComponent(() =>
      loadModule("./src/components/Home.vue", options)
    ),
  },
  methods: {
    LoadFile(file) {
      //update History
      history.pushState({}, "", file);
      //this opt rebece o nome do component
      return (this.opt = file);
    },
  },
};
</script>

<style>
/*
global header all pages
*/
* {
  color-scheme: dark;
}
ul li,
p {
  color: dodgerblue;
}
</style>


<style scoped>
/*
scoped only for this header
*/
h1 {
  color: rgb(255, 17, 17);
}
nav ul {
  display: flex;
  width: 300px;
  justify-content: space-evenly;
}
</style>