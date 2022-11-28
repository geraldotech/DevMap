const options = {
  moduleCache: {
    vue: Vue,
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

/*
varios components em uma const
*/

const app = Vue.createApp({
  data() {
    return {};
  },
  components: {
    "my-component": Vue.defineAsyncComponent(() =>
      loadModule("./myComponent.vue", options)
    ),
    myHeader: Vue.defineAsyncComponent(() =>
      loadModule("./myHeader.vue", options)
    ),
  },
  template: `Carregando components: <myHeader></myHeader>  <my-component></my-component>`,
});

app.mount("#app");

/*
const para cada component pode ser melhor para controlar o local  onde o component é montado by #id
*/

const Myfooter = Vue.createApp({
  data() {
    return {};
  },
  components: {
    "my-footer": Vue.defineAsyncComponent(() =>
      loadModule("./footer.vue", options)
    ),
    "my-novo": Vue.defineAsyncComponent(() =>
      loadModule("./outro.vue", options)
    ),
  },
  // Mount compoments Controller / pode escolher a ordem que é montado
  template: `<my-novo></my-novo> <my-footer></my-footer> `,
});

//single component
const extra = Vue.createApp({
  data() {
    return {};
  },
  components: {
    extravue: Vue.defineAsyncComponent(() => {
      return loadModule("./extra.vue", options); // funciona sem return
    }),
  },
  template: `<extravue></extravue>`,
});

const Home = { template: `<div class="home">Home page!</div>` };
const About = {
  template: `<div>route About similar a TabSelector <a href="https://codepen.io/geraldopcf/pen/WNJpPOG" target="_blank">codepen</a></div>`,
};
const Port = { template: "<div>route Port</div>" };
const Pets = { template: "<div>route pets</div>" };

const routes = [
  { path: "/", component: Home },
  { path: "/route1", component: About },
  { path: "/route2", component: Port },
  {
    path: "/route3",
    component: Vue.defineAsyncComponent(() =>
      loadModule("./radio.vue", options)
    ),
  },
];

const router = VueRouter.createRouter({
  //importe para criar o: #/
  //history: VueRouter.createWebHashHistory(),
  history: VueRouter.createWebHistory(), // remove !#
  routes,
});

// Rotas const para que createapp
const appR = Vue.createApp({});

// Routers

//appR.use(router);
//appR.mount("#rotas"); //deve ser o ultimo apos o mount(router)
Vue.createApp().use(router).mount(rotas); //inline fuck yeah!!

// components #id
Myfooter.mount("#foo");
extra.mount("#extra");
