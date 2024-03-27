const Home =   () => loadModule('/src/views/Home.vue', options) 
const About = () => loadModule('../src/views/About.vue', options)
const Testeold = () => loadModule('../src/views/testold.vue', options)
//const TesteNew = () => loadModule('../src/views/testnew.vue', options) 

const NotFound = { template: "<h1 style='color:red'>Not Found</h1>" }

// from https://github.com/FranckFreiburger/vue3-sfc-loader/discussions/172
function load(path) {      
  return window['vue3-sfc-loader'].loadModule(path, options);
}

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/testsOld', name:'tetsold', component: Testeold },
  { path: '/testsNew', name:'tetsnew', component: () => load('../src/views/testnew.vue') },
  {
    path: '/radio',
    component: () => loadModule('/src/views/radio.vue', options),
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = VueRouter.createRouter({
  //importe para criar o: #/
  history: VueRouter.createWebHashHistory(),
  //history: VueRouter.createWebHistory(), // remove !# porém bugou carregar componentes.vue
  routes,
})

// Rotas const para que createapp
//const appR = Vue.createApp({});

// Routers

//appR.use(router);
//appR.mount("#rotas"); //deve ser o ultimo apos o mount(router)
//Vue.createApp().use(router).mount(rotas); //inline fuck yeah!!

export default router
