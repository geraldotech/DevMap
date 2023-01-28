System.register(["main"], function (_export, _content) {
  return {
    execute: () => {
      //apenas import já mostra o log
      _content.import("./triton.js");
      //import and get function of module
      _content.import("./lua.js").then(function () {
        showName("Geraldo");
      });

      _content
        .import("https://cdn.jsdelivr.net/npm/vue@2.7.13/dist/vue.js")
        .then(() => {
          const Home = {
            template: `<p>Home Page</p>`,
          };
          const About = { template: `<p>About Page</p>` };

          const routes = [
            { path: "/", component: Home },
            { path: "/about", component: About },
          ];
          _content
            .import("https://unpkg.com/vue-router@3.0.2/dist/vue-router.js")
            .then(function () {
              const rota = new VueRouter({
                routes: routes,
              });
              const app = new Vue({
                el: "#app",
                router: rota,
              });
            });
        });
    },
  };
});
