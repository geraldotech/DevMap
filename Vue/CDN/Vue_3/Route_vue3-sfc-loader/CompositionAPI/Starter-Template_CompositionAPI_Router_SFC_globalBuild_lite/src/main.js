import router from '../src/router/index.js'

const app = Vue.createApp({
  components: {
    App: Vue.defineAsyncComponent(() => loadModule('./src/App.vue', options)),
    // App: ''<App/>',
  },
  template: ` <App/>`,
})

app.use(router)
app.mount('#app')
