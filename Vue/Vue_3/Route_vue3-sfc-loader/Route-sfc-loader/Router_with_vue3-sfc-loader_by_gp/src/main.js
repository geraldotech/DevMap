import { options, loadModule } from "./sfc-loader.js";

//varios components em uma const
const app = Vue.createApp({
  data() {
    return {};
  },
  components: {
    "my-component": Vue.defineAsyncComponent(() =>
      loadModule("./src/components/myComponent.vue", options)
    ),
    myHeader: Vue.defineAsyncComponent(() =>
      loadModule("./src/components/myHeader.vue", options)
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
      loadModule("./src/components/footer.vue", options)
    ),
    "my-novo": Vue.defineAsyncComponent(() =>
      loadModule("./src/components/outro.vue", options)
    ),
  },
  // Mount "compoments Controller" / pode escolher a ordem que é renderizado
  template: `<my-novo></my-novo> <my-footer></my-footer> `,
});

//single component
const extra = Vue.createApp({
  components: {
    extravue: Vue.defineAsyncComponent(() => {
      return loadModule("./src/components/extra.vue", options); // funciona sem return
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
const NotFound = { template: "<h1 style='color:red'>Not Found</h1>" };

const routes = [
  { path: "/", component: Home },
  { path: "/route1", component: About },
  { path: "/route2", component: Port },
  {
    path: "/route3",
    component: () => loadModule("./src/views/radio.vue", options),
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = VueRouter.createRouter({
  //importe para criar o: #/
  history: VueRouter.createWebHashHistory(),
  //history: VueRouter.createWebHistory(), // remove !# porém bugou carregar componentes.vue
  routes,
});

// Rotas const para que createapp
//const appR = Vue.createApp({});

//appR.use(router);
//appR.mount("#rotas"); //deve ser o ultimo apos o mount(router)
Vue.createApp().use(router).mount(rotas); //inline fuck yeah!!

// components #id
Myfooter.mount("#foo");
extra.mount("#extra");
