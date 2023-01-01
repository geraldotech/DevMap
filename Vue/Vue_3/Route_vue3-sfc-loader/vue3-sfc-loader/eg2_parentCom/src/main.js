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
      loadModule("./dist/About.vue", options)
    ),
  },
  template: `<sobre></sobre>`,
});

sobre.mount("#aabout");
