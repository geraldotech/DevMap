import router from "./rotas.js";

const app = Vue.createApp({
  data() {
    return {};
  },
  components: {
    App: Vue.defineAsyncComponent(() => loadModule("./src/App.vue", options)),
  },
  template: `<App></App>`,
});
app.use(router).mount("#app");
