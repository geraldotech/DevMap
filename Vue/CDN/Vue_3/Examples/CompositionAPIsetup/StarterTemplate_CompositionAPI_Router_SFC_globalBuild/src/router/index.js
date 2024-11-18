const Home = () => loadModule('/src/views/Home.vue', options)
const Props = () => loadModule('../src/views/Props.vue', options)
const Slots = () => loadModule('../src/views/Slots.vue', options)
const watch = () => loadModule('../src/views/watch.vue', options)
const extra = () => loadModule('../src/views/extra.vue', options)
const myref = () => loadModule('../src/views/myref.vue', options)

const NotFound = { template: "<h1 style='color:red'>Not Found</h1>" }

// from https://github.com/FranckFreiburger/vue3-sfc-loader/discussions/172
function load(path) {
  return window['vue3-sfc-loader'].loadModule(path, options)
}

const routes = [
  { path: '/', component: Home },
  {
    path: '/computed',
    component: () => loadModule('/src/views/computed.vue', options),
  },
  { path: '/testsNew', name: 'tetsnew', component: () => load('../src/views/testnew.vue') },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/Props', component: Props },
  { path: '/Slots', component: Slots },
  { path: '/watch', component: watch },
  { path: '/extra', component: extra },
  { path: '/myref', component: myref },
]

const router = VueRouter.createRouter({
  //importe para criar o: #/
  history: VueRouter.createWebHashHistory(),
  //history: VueRouter.createWebHistory(), // remove !# porém bugou carregar componentes.vue
  routes,
})

export default router
