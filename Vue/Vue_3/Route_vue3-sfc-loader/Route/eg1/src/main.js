const app = Vue.createApp({
  data() {
    return {
      mess: "Vue 3 CDN Routers",
    };
  },
});

const Home = { template: `<h1>Home</h1>` };
const About = { template: `${About2}` };
const Portfolio = { template: `<h1>Contenuto Portfolio</h1>` };
const Contatti = { template: `<h1>Contenuto Contatti</h1>` };

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About2 },
  { path: "/portfolio", component: Portfolio },
];

const router = VueRouter.createRouter({
  //history: VueRouter.createWebHashHistory(location.pathname),
  history: VueRouter.createWebHistory(), //removes #!
  routes,
});

app.use(router);
app.mount("#app");
