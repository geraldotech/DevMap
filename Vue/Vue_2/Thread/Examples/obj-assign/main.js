import Vue from "https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.esm.browser.js";

const vm = new Vue({
  //el: "#app",
  data: {
    a: "sd",
  },
  methods: {
    createEl() {
      const obj = Object.assign(document.createElement("p"), {
        textContent: "Novo par",
      });
      document.body.appendChild(obj);
      obj.id = "nocois";
    },
    Delete() {
      document.querySelector("p").remove();
    },
  },
}).$mount("#app");
