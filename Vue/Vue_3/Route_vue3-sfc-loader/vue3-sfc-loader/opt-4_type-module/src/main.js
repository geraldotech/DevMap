import { options, loadModule } from "./sfc-loader.js";

const app = Vue.createApp({
  data() {
    return {};
  },
  components: {
    "my-file": Vue.defineAsyncComponent(() =>
      loadModule("./home.vue", options)
    ),
  },
  //chamar varios vezes para reutilizacao
  template: `<my-file></my-file> <my-file></my-file>`,
});

app.mount("#app");
