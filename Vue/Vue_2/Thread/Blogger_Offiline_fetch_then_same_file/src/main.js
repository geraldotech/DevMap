import router from "../src/routers.js";

const vm = new Vue({
  el: "#app",
  data: {},
  components: {
    App: httpVueLoader("./src/App.vue"),
  },
  template: "<App/>",
  router,
});