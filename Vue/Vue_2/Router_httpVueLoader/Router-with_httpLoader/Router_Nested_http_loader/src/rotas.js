Vue.component("downloadContent", {
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

const a = { template: `<p>A</p>` };
const b = { template: `<p>B</p>` };
const About = { template: `<h1>About</h1>` };
const downl = Vue.component("downloadContent");
const vimg = httpVueLoader("./src/views/image.vue");

var routes = [
  { path: "/", component: httpVueLoader("./src/views/home.vue") },
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

const router = new VueRouter({
  routes: routes,
  base: "#",
});

export default router;
