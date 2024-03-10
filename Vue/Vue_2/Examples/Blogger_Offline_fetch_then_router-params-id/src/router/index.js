//templates
const home = {
  template: `<p>This show two examples make fetch(api) in folders</p>`,
}
const about = { template: `<p>About</p>` }

const routes = [
  { path: '/', component: home },
  { path: '/about', component: about },
  { path: '/blog', component: httpVueLoader('./src/components/Blog.vue') },
  {
    path: '/blog/:id/:slug',
    name: 'threads',
    component: httpVueLoader('/src/components/Template.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
