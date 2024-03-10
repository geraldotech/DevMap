import rotas from "../src/router/index.js";

const vm = new Vue({
  data: {},
  el: "#app",
  template: `<App></App>`,
  components: {
    App: httpVueLoader("./src/App.vue"),
  },
  router: rotas,
});
