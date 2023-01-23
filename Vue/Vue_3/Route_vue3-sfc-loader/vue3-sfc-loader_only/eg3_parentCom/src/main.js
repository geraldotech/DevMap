const home = Vue.createApp({
  data() {
    return {};
  },
  components: {
    App: Vue.defineAsyncComponent(() => loadModule("./src/App.vue", options)),
  },
  template: `<App></App>`,
});
home.mount("#app");

//single components
const sobre = Vue.createApp({
  data() {
    return {};
  },
  components: {
    sobre: Vue.defineAsyncComponent(() =>
      loadModule("./src/components/About.vue", options)
    ),
  },
  template: `<sobre></sobre>`,
});

// Verifica se o #id existe para evitar erros
const tem = document.getElementById("aabout");
if (tem) {
  sobre.mount("#aabout");
}
