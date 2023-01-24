import LoadVanilla from "./smart-ajax-includes-vue.js";

const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      wel: "Welcome to Vue + div includes html files",
    };
  },
}).mount("#app");

//Load plugin after VueMount
LoadVanilla();
