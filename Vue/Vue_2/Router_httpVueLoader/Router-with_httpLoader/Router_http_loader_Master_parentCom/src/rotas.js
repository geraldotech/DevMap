import Home from "./views/home.js";

const test = {
  template: `<p>Apenas uma rota de tests!</p>`,
};
const NotFound = {
  template: `<h3>Não encontrado</h3>`,
};

var routes = [
  { path: "/", component: Home },
  { path: "/download", component: httpVueLoader("./src/views/download.vue") },
  { path: "/sobre", component: httpVueLoader("../src/views/sobre.vue") },
  { path: "/test", component: test },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
];

var router = new VueRouter({
  routes: routes,
  base: "#",
});

export default router;
