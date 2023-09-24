import router from '../src/router/index.js'

const vm = new Vue({
  el: '#app',
  data: {},
  components: {
    App: httpVueLoader('./src/App.vue'),
  },
  template: '<App/>',
  router,
})
