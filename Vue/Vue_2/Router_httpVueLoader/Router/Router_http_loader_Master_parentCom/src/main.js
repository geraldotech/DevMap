import rotas from "../src/rotas.js";

new Vue({
  data: {},
  template: `<App></App>`,
  components: {
    App: httpVueLoader("./src/App.vue"),
  },
  router: rotas,
}).$mount("#app");
