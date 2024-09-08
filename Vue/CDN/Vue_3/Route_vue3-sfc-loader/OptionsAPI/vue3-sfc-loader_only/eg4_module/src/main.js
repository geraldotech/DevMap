LoadRender("./src/sfc-loader.js");
function LoadRender(link) {
  let script = document.createElement("script");
  script.src = link;
  return document.head.appendChild(script);
}
window.onload = function () {
  const app = Vue.createApp({
    data() {
      return {};
    },
    components: {
      "my-file": Vue.defineAsyncComponent(() =>
        loadModule("./src/App.vue", options)
      ),
    },
    template: `<my-file></my-file>`,
  });
  app.mount("#app");
};

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    //dom is ready, window.onload fires later
  }
};
//appendScript
