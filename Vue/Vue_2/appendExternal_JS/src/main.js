render("https://cdn.jsdelivr.net/npm/vue@2.7.13/dist/vue.js");
render("./src/test.js");
render("https://unpkg.com/vue-router@3.0.2/dist/vue-router.js");
render("https://unpkg.com/http-vue-loader");

function render(link) {
  let script = document.createElement("script");
  script.src = link;

  return document.head.appendChild(script);
}
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

  new Vue({
    el: "#app",
    router: rota,
    data: {
      message: "Geraldo",
    },
    components: {
      App: httpVueLoader("./src/app.vue"),
    },
    template: `<App/>`,
  });
};
