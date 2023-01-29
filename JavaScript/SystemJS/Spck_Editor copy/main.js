import { log } from "./logger";
import Vue from "https://cdn.jsdelivr.net/npm/vue/dist/vue.js";

SystemJS.import("https://unpkg.com/vue-router@3.0.2/dist/vue-router.js").catch(
  console.error.bind(console)
);

log("Import works!");

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

const app = new Vue({
  el: "#app",
  router: rota,
  data: { a: "VueJS 2.0" },
});
