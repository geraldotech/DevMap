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
    ativo: false,
    primo: "primary",
    mudar: false,
    loading: false,
    box: false,
    combo: "",
    radio: "",
    select: { state: "Florida", abbr: "FL" },
    items: [
      { state: "Florida", abbr: "FL" },
      { state: "Georgia", abbr: "GA" },
    ],
  },
  methods: {
    dados(e) {
      console.log(e.target);
    },
    classe() {
      this.primo = "primary";
    },
  },
  watch: {
    loading() {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
});
