import router from '../src/router/index.js'

const app = Vue.createApp({
  components: {
  //  App: imports('./src/App.vue'),
    // App: ''<App/>',
  },
  template: ` <App/>`,
})

app.use(router)

/* autoload  3 + direct inject on app.vue */
/* 
 */
autoload('App')
app.mount('#app')
