/* "use strict"; */
const { createApp, ref } = Vue;
const options = {
  moduleCache: {
    vue: Vue,
    vueRouter: VueRouter,
  },
  async getFile(url) {
    const res = await fetch(url);
    if (!res.ok)
      throw Object.assign(new Error(res.statusText + " " + url), { res });
    return {
      getContentData: (asBinary) => (asBinary ? res.arrayBuffer() : res.text()),
    };
  },
  addStyle(textContent) {
    const style = Object.assign(document.createElement("style"), {
      textContent,
    });
    const ref = document.head.getElementsByTagName("style")[0] || null;
    document.head.insertBefore(style, ref);
  },
};

const { loadModule } = window["vue3-sfc-loader"];

window.asyncVue = (sfc) =>
  Vue.defineAsyncComponent(() =>
    loadModule("./routes/" + sfc + ".vue", options)
  );
window.dynamicVue = (com) => ({
  name: "DynamicWrapper",
  template: `<component :is="comp"></component>`,
  computed: {
    comp() {
      const com = this.com;
      return asyncVue(com);
    },
  },
  data() {
    return { com };
  },
});

const routes = [
  {
    path: "/",
    name: "home",
    component: dynamicVue("home"),
    meta: { KeepAlive: true },
  },
  {
    path: "/contacts",
    component: dynamicVue("contacts"),
    meta: { KeepAlive: true },
  },
  {
    path: "/about",
    component: dynamicVue("about"),
    meta: { KeepAlive: true },
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.createApp({
  data() {
    return {};
  },
  methods: {
    switchToRoute(rt) {
      this.$router.push(rt);
    },
  },
  //linha alterada
  mounted: function () {
    this.switchToRoute;
  },
});

const Myfooter = Vue.createApp({
  data() {
    return {};
  },
  components: {
    "my-Header": Vue.defineAsyncComponent(() =>
      loadModule("./myHeader.vue", options)
    ),
  },
  template: `<my-Header></my-Header>`,
});

Myfooter.mount("#had");
app.use(router);
app.mount("#my-app");
