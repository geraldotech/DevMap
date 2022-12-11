const app = new Vue({
  el: "#app",
  data: {
    message: "VueJS 2",
  },
  components: {
    vmenu: httpVueLoader("./src/menu.vue"),
    vfoo: httpVueLoader("./src/footer.vue"),
    vabout: httpVueLoader("./src/about.vue"),
    vdownload: httpVueLoader("./src/vdownload.vue"),
  },
});
