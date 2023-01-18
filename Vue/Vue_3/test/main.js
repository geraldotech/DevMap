const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      ativa: false,
      title: "Titulo",
    };
  },
  watch: {
    ativa() {},
  },
}).mount("#app");
