System.register(["vue", "vueloader"], () => {
  let Vue;

  return {
    setters: [(v) => (Vue = v.default)],
    execute() {
      const app = new Vue({
        el: "#app",
        data: {
          a: "Vue 2 CDN",
        },
        components: {
          App: httpVueLoader("./App.vue"),
        },
        template: `<App/>`,
      });
    },
  };
});
