const options = {
  moduleCache: {
    vue: Vue,
  },
  async getFile(url) {
    const res = await fetch(url);
    if (!res.ok)
      throw Object.assign(new Error(res.statusText + " " + url), { res });
    return {
      getContentData: (asBinary) => (asBinary ? res.arrayBuffer() : res.text()),
    };
  },
  addStyle(textContent) {
    const style = Object.assign(document.createElement("style"), {
      textContent,
    });
    const ref = document.head.getElementsByTagName("style")[0] || null;
    document.head.insertBefore(style, ref);
  },
};

const { loadModule } = window["vue3-sfc-loader"];

const app = Vue.createApp({
  components: {
    "my-component": Vue.defineAsyncComponent(() =>
      loadModule("./comp.vue", options)
    ),
  },
  template: "<my-component></my-component>",
});

const app2 = Vue.createApp({
  components: {
    comp: Vue.defineAsyncComponent(() => loadModule("./render.vue", options)),
  },
  template: "<comp></comp>",
});

app.mount("#app");
app2.mount("#app2");
