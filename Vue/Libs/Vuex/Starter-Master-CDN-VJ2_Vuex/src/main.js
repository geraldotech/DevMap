import router from "../src/router/index.js";


/* === VueEX */
const store = new Vuex.Store({
  state() {
    return {
      counter: 0,
      user: {name: 'Geraldo', city: 'Maceio'},
      aboutdata: ''
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    changeName(state){
      state.user.name = 'Felipe'
    },
    setAboutData(state){
     console.log(state)
    }
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
