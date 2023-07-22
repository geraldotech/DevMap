import Posts from "./views/BlogPosts.js";
console.log(Posts);

const routes = [
  { path: "/", component: Posts.home },
  { path: "/about", component: Posts.about },
  { path: "/contact", component: Posts.contact },
];

const router = new VueRouter({
  routes: routes,
  base: "#",
});
export default router;
