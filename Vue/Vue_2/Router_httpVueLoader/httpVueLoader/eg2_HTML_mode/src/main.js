const app2 = new Vue({
  el: "#myapp",

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

var routes = [
  { path: "/", component: httpVueLoader("./src/home.vue") },
  { path: "/download", component: httpVueLoader("./src/downloads.vue") },
];

var router = new VueRouter({
  routes: routes,
  mode: "history",
  base: "#/",
});

var app = new Vue({
  el: "#app",
  router: router,
});
