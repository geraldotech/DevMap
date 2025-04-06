import Home from "../views/home.js";

const test = {
  template: `<p>Apenas uma rota de tests!</p>`,
};
const NotFound = {
  template: `<h3>Não encontrado</h3>`,
};

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: httpVueLoader("../src/views/about.vue") },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes: routes,
  // base: "#",
});

export default router;
