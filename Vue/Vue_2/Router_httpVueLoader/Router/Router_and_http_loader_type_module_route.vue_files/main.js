import Home from "./pages/home.vue.js";
import About from "./pages/about.vue.js";

const test = {
  template: `<p>Apenas uma rota de tests!</p>`,
};
const NotFound = {
  template: `<h3>Não encontrado</h3>`,
};

const app2 = new Vue({
  el: "#app2",
  data: {},
  components: {
    foo: httpVueLoader("./pages/footer.vue"),
    sobre: httpVueLoader("./pages/sobre.vue"),
  },
});

var routes = [
  { path: "/", component: Home },
  { path: "/download", component: httpVueLoader("./pages/download.vue") },
  { path: "/sobre", component: httpVueLoader("./pages/sobre.vue") },
  { path: "/test", component: test },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
];

var router = new VueRouter({
  routes: routes,
  mode: "history",
  //base: "/#apps",
  //base: "/app",
  base: "/#",
});

var app = new Vue({
  el: "#rotas",
  router: router,
});
