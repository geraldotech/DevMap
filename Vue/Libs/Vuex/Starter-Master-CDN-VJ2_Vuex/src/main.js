import router from "../src/router/index.js";

const store = new Vuex.Store({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
  },
});

const vm = new Vue({
  data: {},
  store,
  router: router,
  template: `<App></App>`,
  components: {
    App: httpVueLoader("./src/App.vue"),
  },
}).$mount("#app");
