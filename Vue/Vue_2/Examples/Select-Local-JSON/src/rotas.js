import Home from "./views/home.js";
const NotFound = {
  template: `<h3>Não encontrado</h3>`,
};

const routes = [
  { path: "/", component: Home },
  { path: "/sobre", component: httpVueLoader("../src/views/sobre.vue") },

  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes: routes,
  base: "#",
});

export default router;
