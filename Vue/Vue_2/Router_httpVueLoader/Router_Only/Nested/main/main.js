const mais = Vue.component("mais", {
  template: "#more",
  data() {
    return {
      rotas: [
        { id: 1, name: "Pessoa one", slug: "pessoa-one" },
        { id: 2, name: "Pessoa two", slug: "pessoa-two" },
      ],
    };
  },
});

const Home = { template: `<p>Home</p>` };
const About = { template: `<p>About</p>` };
const pessoa = { template: `<p>pessoa One</p>` };
const pessoa2 = { template: `<p>pessoa 2</p>` };
const NotFound = { template: `<p>404 error</p>` };

const routes = [
  { path: "/", component: Home },
  { path: "/about", name: "abo", component: About },
  {
    path: "/more",
    name: "more",
    component: mais,

    children: [
      { path: "pessoa-one-um", name: "pessoa-one", component: pessoa },
      {
        path: "person-two-dois2",
        name: "pessoa-two",
        component: pessoa2,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes: routes,
});

new Vue({
  el: "#app",
  router: router,
  created() {
    console.log(this.$route);
  },
});
