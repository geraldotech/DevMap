LoadRender("https://cdn.jsdelivr.net/npm/vue@2.7.13/dist/vue.js");
LoadRender("https://unpkg.com/vue-router@3.0.2/dist/vue-router.js");
LoadRender("https://unpkg.com/http-vue-loader");
LoadRender("./src/test.js");

//fun LoadScript
function LoadRender(link) {
  let script = document.createElement("script");
  script.src = link;
  script.setAttribute("type", "text/javascript");
  script.async = false;
  document.head.appendChild(script);

  script.addEventListener("load", function () {
    console.log("script loaded", link);
  });
  //return document.querySelector("body").appendChild(script);
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
  const app = new Vue({
    el: "#app",
    router: rota,
    data: {
      welcome: "welcome",
    },
    components: {
      App: httpVueLoader("./src/app.vue"),
    },
    template: `<App/>`,
  });
};
