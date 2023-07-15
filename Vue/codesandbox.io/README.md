## Para use.(router) antes devemos adicionar a dependencia de Router no projeto

1. No main.js

```js
//import
import { createRouter, createWebHistory } from "vue-router";

//template and createRrouter/history
const Home = {
  template: `<div>home page</div>`,
};
const Foo = { template: "<div>foo</div>" };
const Bar = { template: "<div>bar</div>" };

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/foo", component: Foo },
    { path: "/bar", component: Bar },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});
//use router
createApp(App).use(router).mount("#app");
```

html

```html
<nav>
  <router-link to="/">Home</router-link>
  <router-link to="/foo">Foo</router-link>
  <router-link to="/bar">Bar</router-link>
</nav>
<router-view></router-view>
```

2. External router [better]

create a directory `router` > `index.js`

```js
import { createRouter, createWebHistory } from "vue-router";

const Home = {
  template: `<div>home page</div>`,
};
const Foo = { template: "<div>foo</div>" };
const Bar = { template: "<div>bar</div>" };

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/foo", component: Foo },
    { path: "/bar", component: Bar },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});

export default router;
```

main.js

```js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

createApp(App).use(router).mount("#app");
```

## creating a component

```js
<template>
  <div>
    <h1>blog.vue</h1>
  </div>
</template>
//✨ name in component é necessário, no caso de importar outros components, sem esse `name` vai da erro
<script>

export default {
  name: "blog",
  components: {

  }
};
</script>
<style scoped>
h1 {
  color: dodgerblue;
}
</style>

//import and App.vue

import Blogvue from "./components/blog.vue";
export default {
  name: "App",
  components: {
    Blogvue: Blogvue,
  },
};

//call in body
 <Blogvue/>
```
