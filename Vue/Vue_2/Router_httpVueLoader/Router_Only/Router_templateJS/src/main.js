import Home from "./views/home.js";
import About from "./views/about.js";
import Contact from "./views/contact.js";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
];

const router = new VueRouter({
  routes: routes,
  base: "#",
});

new Vue({
  el: "#app",
  router: router,
});
