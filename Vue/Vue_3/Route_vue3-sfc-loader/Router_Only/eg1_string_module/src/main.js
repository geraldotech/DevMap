import PetsJ from "./pets.js";

const app = Vue.createApp({
  data() {
    return {};
  },
});

const Home = { template: `<div class="home">Home page!</div>` };
const About = {
  template: `<div>route About simular ai <a href="https://codepen.io/geraldopcf/pen/WNJpPOG" target="_blank">codepen</a></div>`,
};
const Port = { template: "<div>route Port</div>" };
const Pets = { template: "<div>route pets</div>" };
const PathNotFound = { template: `<h1>404 Error!</h1>` };

const routes = [
  { path: "/", component: Home },
  { path: "/route1", component: About },
  { path: "/route2", component: Port },
  { path: "/route3", component: PetsJ }, //pega a const de pets.js
  { path: "/:pathMatch(.*)*", component: PathNotFound },
];

const router = VueRouter.createRouter({
  //importante para criar o: #/
  //history: VueRouter.createWebHashHistory(location.pathname), //
  /*
   ***removes #! but don't support direct call page see https://v3.router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
    history: VueRouter.createWebHistory(location.pathname),
    ler mais sobre createWebHash... https://router.vuejs.org/api/#createwebhashhistory
   */
  history: VueRouter.createWebHashHistory("/#/"),
  routes,
});

app.use(router);
app.mount("#app"); //deve ser o ultimo
