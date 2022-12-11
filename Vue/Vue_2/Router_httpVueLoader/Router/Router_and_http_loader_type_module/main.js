import Home from "./pages/home.vue.js";
import About from "./pages/about.vue.js";
import Assets from "./pages/assets.vue.js";
import Contact from "./pages/contact.vue.js";

const app2 = new Vue({
  el: "#app2",
  data: {},
  components: {
    foo: httpVueLoader("./pages/footer.vue"),
  },
});

var routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/assets", component: Assets },
  //{ path: "/assets/files", component: "/assets/files/" },
];

var router = new VueRouter({
  routes: routes,
  mode: "history",
  base: "/#",
});

var app = new Vue({
  el: "#app",
  router: router,
});
