const home = { template: `<p>Home Page</p>` }
const about = { template: `<p>About Us</p>` }

const routes = [
  { path: '/', component: home },
  { path: '/about', component: about },
]

const router = new VueRouter({
  routes,
})

export default router
