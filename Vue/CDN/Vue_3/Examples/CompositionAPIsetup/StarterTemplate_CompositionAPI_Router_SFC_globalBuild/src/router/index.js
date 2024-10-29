const Home = () => loadModule('/src/views/Home.vue', options)
const Props = () => loadModule('../src/views/Props.vue', options)
const Slots = () => loadModule('../src/views/Slots.vue', options)

const NotFound = { template: "<h1 style='color:red'>Not Found</h1>" }

// from https://github.com/FranckFreiburger/vue3-sfc-loader/discussions/172
function load(path) {
  return window['vue3-sfc-loader'].loadModule(path, options)
}

const routes = [
  { path: '/', component: Home },
  {
    path: '/radio',
    component: () => loadModule('/src/views/radio.vue', options),
  },
  { path: '/testsNew', name: 'tetsnew', component: () => load('../src/views/testnew.vue') },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/Props', component: Props },
  { path: '/Slots', component: Slots },
]

const router = VueRouter.createRouter({
  //importe para criar o: #/
  history: VueRouter.createWebHashHistory(),
  //history: VueRouter.createWebHistory(), // remove !# porém bugou carregar componentes.vue
  routes,
})

export default router
