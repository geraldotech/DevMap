const Home = { template: `<p>Home Page</p>` }
const youtube = { template: `<p>Youtube</p>` }

const routes = [
  { path: '/', component: Home },
  { path: '/youtube', component: youtube },
  {
    path: '/about',
    component: Vue.defineAsyncComponent(() =>
      loadModule('./src/components/About.vue', options)
    ),
  },
]

const router = new VueRouter({
  routes,
})

//router

const vm = new Vue({
  template: `<App></App>`,
  components: {
    App: Vue.defineAsyncComponent(() => loadModule('./src/App.vue', options)),
  },
  router,
}).$mount('#app')
