const Home = { template: `<div class="home">Home page!</div>` };
const About = {
  template: `<div>route About similar a TabSelector <a href="https://codepen.io/geraldopcf/pen/WNJpPOG" target="_blank">codepen</a></div>`,
};
const Port = { template: "<div>route Port</div>" };
const Pets = { template: "<div>route pets</div>" };
const NotFound = { template: "<h1 style='color:red'>Not Found</h1>" };

const routes = [
  { path: "/", component: Home },
  { path: "/route1", component: About },
  { path: "/route2", component: Port },
  {
    path: "/route3",
    component: () => loadModule("./src/views/radio.vue", options),
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = VueRouter.createRouter({
  //importe para criar o: #/
  history: VueRouter.createWebHashHistory(),
  //history: VueRouter.createWebHistory(), // remove !# porém bugou carregar componentes.vue
  routes,
});

export default router;
