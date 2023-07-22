import rotas from "../src/rotas.js";
import SmartLoader from "./smartLoader.js";
SmartLoader("./src/components/MyBlogPosts.js");

const vm = new Vue({
  data: {},
  el: "#app",
  template: `<App></App>`,
  components: {
    App: httpVueLoader("./src/App.vue"),
  },
  router: rotas,
});
