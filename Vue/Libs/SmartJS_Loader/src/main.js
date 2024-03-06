import SmartLoader from "./smartLoader.js";

SmartLoader("https://cdn.jsdelivr.net/npm/vue@2.7.13/dist/vue.js");
SmartLoader("https://unpkg.com/vue-router@3.0.2/dist/vue-router.js");
SmartLoader("https://unpkg.com/http-vue-loader");
SmartLoader("./src/test.js", "module");

window.onload = function () {
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
    data: {
      welcome: "welcome",
    },
    components: {
      App: httpVueLoader("../src/App.vue"),
    },
    template: `<App/>`,
  });
};
