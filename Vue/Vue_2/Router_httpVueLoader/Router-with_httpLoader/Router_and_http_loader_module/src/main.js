import Home from "../src/views/home.vue.js";
import About from "../src/views/about.vue.js";
import Assets from "../src/views/assets.vue.js";
import Contact from "../src/views/contact.vue.js";

new Vue({
  el: "#app2",
  data: {},
  components: {
    foo: httpVueLoader("../src/compo/footer.vue"),
  },
});

var routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/assets", component: Assets },
];

var router = new VueRouter({
  routes: routes,
  mode: "history",
  base: "/#",
});

new Vue({
  el: "#rotas",
  router: router,
});
