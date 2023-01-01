const Home = { template: `<div class="home">Home page!</div>` };
const About = {
  template: `<div>route About similar a TabSelector <a href="https://codepen.io/geraldopcf/pen/WNJpPOG" target="_blank">codepen</a></div>`,
};
const Port = { template: "<div>route Port</div>" };
const NotFound = { template: "<h1 style='color:red'>Not Found</h1>" };
//const teste = () => loadModule("/src/views/radio.vue", options);
const routes = [
  { path: "/", component: Home },
  { path: "/route1", component: About },
  { path: "/route2", component: Port },
  {
    path: "/route3",
    component: () => loadModule("/src/views/radio.vue", options),
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = VueRouter.createRouter({
  //importe para criar o: #/
  history: VueRouter.createWebHashHistory(),
  //history: VueRouter.createWebHistory(), // remove !# porém bugou carregar componentes.vue
  routes,
});

// Rotas const para que createapp
//const appR = Vue.createApp({});

// Routers

//appR.use(router);
//appR.mount("#rotas"); //deve ser o ultimo apos o mount(router)
//Vue.createApp().use(router).mount(rotas); //inline fuck yeah!!

export default router;
