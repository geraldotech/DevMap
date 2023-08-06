import rotas from "../src/rotas.js";
import SmartLoader from "./smartLoader.js";
SmartLoader("./src/components/MyBlogPosts.js");

Vue.prototype.$cdnimg23 = "https://gpnotes.droppages.com/geraldox.proxyfiles.com/2023/img";


Vue.mixin({
  data: function() {
    return {
      imgmix:'https://gpnotes.droppages.com/geraldox.proxyfiles.com/2022/img',
    }
  }
})

const vm = new Vue({
    created: function() {
      this.globalReadOnlyProperty = "This won't change it";
  },
  get globalReadOnlyProperty() {
    return "Can't change me!";
  },
  data: {},
  el: "#app",
  template: `<App></App>`,
  components: {
    App: httpVueLoader("./src/App.vue"),
  },
  router: rotas,
});


