import Home from "../src/views/home.vue.js";
import About from "../src/views/about.vue.js";
import Assets from "../src/views/assets.vue.js";
import Contact from "../src/views/contact.vue.js";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/assets", component: Assets },
];

const router = new VueRouter({
  routes: routes,
  mode: "history",
  base: "/#",
});

new Vue({
  el: "#app",
  data: {},
  components: {
    foo: httpVueLoader("../src/components/footer.vue"),
  },
});

new Vue({
  el: "#rotas",
  router,
});
