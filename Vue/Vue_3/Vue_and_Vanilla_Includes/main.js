import LoadVanilla from "./vanillaAjxaxInc.js";

const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      gera: "gege",
    };
  },
}).mount("#app");

//Vanilla Includes
LoadVanilla();
