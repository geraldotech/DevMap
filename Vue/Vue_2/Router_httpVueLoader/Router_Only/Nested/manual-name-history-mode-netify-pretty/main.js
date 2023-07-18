const mais = Vue.component("mais", {
  template: "#more",
});

const Home = { template: `<p>Home</p>` };
const About = { template: `<p>About</p>` };
const pessoa = { template: `<p>pessoa One</p>` };
const pessoa2 = { template: `<p>pessoa 2</p>` };

const routes = [
  { path: "/", component: Home },
  { path: "/about", name: "about", component: About },
  {
    path: "/contact",
    name: "ctt",
    component: mais,
    children: [
      { path: "pessoaone", name: "p1", component: pessoa },
      { path: "pessoatwo", name: "p2", component: pessoa2 },
    ],
  },
];

const router = new VueRouter({
  routes: routes,
  mode: "history",
});

new Vue({
  el: "#app",
  router: router,
  created() {
    console.log(this.$route);
  },
});
