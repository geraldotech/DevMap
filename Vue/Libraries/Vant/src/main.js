import rotas from "../src/router/index.js";

const vm = new Vue({
  data: {},
 
  template: `<App></App>`,
  components: {
    App: httpVueLoader("./src/App.vue"),
  },
  router: rotas,
})

//vm.use(vant)

vm.$mount('#app')
