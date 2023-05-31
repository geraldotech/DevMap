//templates
const home = { template: `<p>Home</p>` };
const about = { template: `<p>About</p>` };

const routes = [
  { path: "/", component: home },
  { path: "/about", component: about },
];

const router = new VueRouter({
  routes,
});

export default router;
