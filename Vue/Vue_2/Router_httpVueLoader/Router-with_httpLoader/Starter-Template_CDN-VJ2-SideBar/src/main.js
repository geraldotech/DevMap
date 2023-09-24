import rotas from "../src/router/index.js";

new Vue({
  data: {},
  el: "#app",
  template: `<App></App>`,
  components: {
    App: httpVueLoader("./src/App.vue"),
  },
  router: rotas,
});
