Vue.component("myd-content", {
  template: "#baixar",
  data() {
    return {
      list: [
        { nome: "one opt", slug: "one" },
        { nome: "two opt", slug: "two" },
        { nome: "Images ", slug: "img" },
      ],
      titulo: "All",
    };
  },
});

const Home = { template: `<h1>Home - e.g using 3 way to do components</h1>` };
const a = { template: `<p>A</p>` };
const b = { template: `<p>B</p>` };
const About = { template: `<h1>About</h1>` };
const downl = Vue.component("myd-content");
const vimg = httpVueLoader("./src/image.vue");

var routes = [
  { path: "/", component: Home },
  { path: "/about", name: "abt", component: About },
  {
    path: "/download",
    component: downl,
    children: [
      { path: "link-one", name: "one", component: a },
      { path: "link-two", name: "two", component: b },
      {
        path: "link-images",
        name: "img",
        component: vimg,
      },
    ],
  },
];

var router = new VueRouter({
  routes: routes,
  mode: "history",
  base: "/#",
});
var app = new Vue({
  el: "#app",
  router: router,
  data: {},
  components: {
    //vimg: httpVueLoader("./image.vue"),
  },
});
