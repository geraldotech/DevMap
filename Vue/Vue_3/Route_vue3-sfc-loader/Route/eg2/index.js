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

const routes = [
  { path: "/", component: Home },
  { path: "/route1", component: About },
  { path: "/route2", component: Port },
  { path: "/route3", component: PetsJ }, //pega a const de pets.js
];

const router = VueRouter.createRouter({
  //importante para criar o: #/
  history: VueRouter.createWebHashsHistory(),
  routes,
  base: "/page/",
});

app.use(router);
app.mount("#app"); //deve ser o ultimo
