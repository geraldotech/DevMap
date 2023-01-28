//works great
import Vue from "https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.esm.browser.js";
// does not provide an export named 'default' (at main.js:2:8)
import VueRouter from "https://unpkg.com/vue-router@3.0.2/dist/vue-router.js";

const Home = {
  template: `<p>Home Page</p>`,
};
const About = { template: `<p>About Page</p>` };

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

const rota = new VueRouter({
  routes: routes,
});

const vm = new Vue({
  el: "#app",
  router: rotas,
});
