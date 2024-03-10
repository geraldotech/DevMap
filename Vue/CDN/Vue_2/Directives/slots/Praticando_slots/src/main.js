import router from "./routes.js";

new Vue({
  el: "#app",
  data: {},
  template: "<App/>",
  components: {
    App: httpVueLoader("./App.vue"),
  },
  router: router,
});
