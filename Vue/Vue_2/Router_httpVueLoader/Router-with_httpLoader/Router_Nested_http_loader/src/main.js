import rotas from "./rotas.js";

new Vue({
  el: "#app",
  template: "<App></App>",
  components: {
    App: httpVueLoader("./src/App.vue"),
  },
  router: rotas,
});
