import router from '../src/router/index.js'


const app = Vue.createApp({
  data() {
    return {}
  },
  components: {
    App: Vue.defineAsyncComponent(() => loadModule('./src/App.vue', options)),
    //App:  loadModule("./src/App.vue", options),
  },
  template: `<App/>`,
})
app.use(router).mount('#app')
