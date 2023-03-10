const Home = { template: `<p>Home Page</p>` };
const youtube = { template: `<p>Youtube Page</p>` };
const Wifi = { template: `<p>Wifi Page</p>` };

const routes = [
  { path: "/", component: Home },
  { path: "/youtube", component: youtube },
  { path: "/wifi", component: Wifi },
];

const router = new VueRouter({
  routes, // short for `routes: routes`
});

new Vue({
  el: "#app",
  router,
  vuetify: new Vuetify({
    theme: { dark: true },
  }),
  data: {
    value: "",
    opt: "",
  },
  methods: {
    dados(e) {
      console.log(e.target);
    },
  },
  watch: {
    navegar() {
      this.dados(event);
    },
  },
});
