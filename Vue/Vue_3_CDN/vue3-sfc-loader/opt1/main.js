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

/*
varios components em uma const
*/

const app = Vue.createApp({
  data() {
    return {};
  },
  components: {
    "my-component": Vue.defineAsyncComponent(() =>
      loadModule("./myComponent.vue", options)
    ),
    myHeader: Vue.defineAsyncComponent(() =>
      loadModule("./myHeader.vue", options)
    ),
  },
  template: `Carregando components: <myHeader></myHeader>  <my-component></my-component>`,
});

app.mount("#app");

/*
const para cada component pode ser melhor para controlar o local  onde o component é montado by #id
*/

const Myfooter = Vue.createApp({
  data() {
    return {};
  },
  components: {
    "my-footer": Vue.defineAsyncComponent(() =>
      loadModule("./footer.vue", options)
    ),
  },
  template: `<my-footer></my-footer>`,
});

Myfooter.mount("#footer");
