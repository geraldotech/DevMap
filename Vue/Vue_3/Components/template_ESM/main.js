import base from "./template.js";

const app = Vue.createApp({
  data() {
    return {};
  },
  methods: {},
});

//component com props, methods to all components
app.component("primary", {
  template: base,
  props: {
    meutitulo: {
      type: String,
      default: "Untitled", //txt padrao
    },
  },
  data() {
    return {
      ativa: "",
      classe: "", //classe em props é desnecessário pq o checkbox vai alterar com o watch
    };
  },
  watch: {
    ativa() {
      this.ativa ? (this.classe = "ver") : (this.classe = "");
    },
  },
});

app.mount("#app");
