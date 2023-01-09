import baixe from "./baixar.js";

const Home = { template: `<p>Home Page </p>` };
const youtube = {
  template: `<p>Youtube Page </p>`,
};
const vuejs = {
  template: `<p>My VueJS Named Views </p>`,
};
//const Download = Vue.component("myd-content");

//maping the path

const routes = [
  { path: "/", components: { default: Home, yt: vuejs } },
  { path: "/youtube", components: { default: youtube, yt: vuejs } },
  { path: "/download", components: { default: baixe } },
];

const router = new VueRouter({
  routes, // short for `routes: routes`
});

new Vue({
  el: "#app",
  router,
});
