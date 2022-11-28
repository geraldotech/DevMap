import Home from "./pages/home.vue.js";
import About from "./pages/about.vue.js";
//import Assets from "./pages/assets.vue.js";

const app2 = new Vue({
  el: "#app2",
  data: {},
  components: {
    foo: httpVueLoader("./pages/footer.vue"),
    sobre: httpVueLoader("./pages/sobre.vue"),
  },
});

var routes = [
  { path: "/", component: Home },
  { path: "/download", component: httpVueLoader("./pages/download.vue") },
  { path: "/sobre", component: httpVueLoader("./pages/sobre.vue") },
];

var router = new VueRouter({
  routes: routes,
  mode: "history",
  //base: "/#",
  base: "/",
});

var app = new Vue({
  el: "#app",
  router: router,
});
