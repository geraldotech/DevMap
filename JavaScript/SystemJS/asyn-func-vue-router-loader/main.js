System.register([], function ($__export, $__moduleContext) {
  return {
    execute: async function () {
      const { vue } = await $__moduleContext.import(
        "https://cdn.jsdelivr.net/npm/vue@2.7.13/dist/vue.js"
      );

      const { vueRouter } = await $__moduleContext.import(
        "https://unpkg.com/vue-router@3.0.2/dist/vue-router.js"
      );

      const { vueLoader } = await $__moduleContext.import(
        "https://unpkg.com/http-vue-loader"
      );

      //Routers
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

      // Vue Model Instance

      const app = new Vue({
        el: "#app",
        router: rota,
        components: {
          App: httpVueLoader("./app.vue"),
        },
        template: `<App/>`,
      });
    },
  };
});
