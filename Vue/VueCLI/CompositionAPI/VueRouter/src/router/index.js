import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

import { h, defineComponent } from 'vue'

/* not supported outside jsx script tag, use h instead */
// const Foo = <h1>Hello Footer</h1>

/* custom component using jsx */
const Footer = () => {
  return h('h1', 'Footer here')
}

const NotFound = defineComponent({
  template: `<h1>404</h1>`,
})

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/files', component: Footer },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
