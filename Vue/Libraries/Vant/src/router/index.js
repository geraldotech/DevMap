const test = {
  template: `<p>Apenas uma rota de tests!</p>`,
}
const NotFound = {
  template: `<h3>Não encontrado</h3>`,
}

const routes = [
  { path: '/', component: httpVueLoader('./src/views/Home.vue') },
  {
    path: '/sobre',
    name: 'about',
    component: httpVueLoader('../src/views/sobre.vue'),
  },
  {
    path: '/blog',
    name: 'blog',
    component: httpVueLoader('./src/views/Blog.vue'),
  },
  {
    path: '/post/:slug',
    name: 'post',
    component: httpVueLoader('./src/components/Template.vue'),
    // props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
  },
]

const router = new VueRouter({
  routes: routes,
  // base: "#",
})

export default router
