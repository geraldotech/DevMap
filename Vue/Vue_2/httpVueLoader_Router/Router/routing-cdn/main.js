var routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/assets", component: Assets },
  //{ path: "/assets/files", component: "/assets/files/" },
];

var router = new VueRouter({
  routes: routes,
  mode: "history",
  base: "/#",
});

var app = new Vue({
  el: "#app",
  router: router,
});
