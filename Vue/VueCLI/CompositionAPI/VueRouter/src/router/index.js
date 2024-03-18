import { createWebHistory, createWebHashHistory,  createRouter } from 'vue-router'

import HomeView from './../views/HomeView.vue'



const routes = [
  { path: '/', 
  component: HomeView 
  },
  // lazy-loaded whtn the route is visited
  { 
    path: '/about', 
    name: 'about',
  component: () => import( '@/views/AboutView.vue') 
},
{
  path: '/services',
  name: 'services',
  component: () => import('@/views/Services.jsx')
},
  { 
  path: '/usuarios/:id?',  // ? == optional params
  name: 'usuario', 
  component: () => import('@/views/UserTemplate.vue')

},
]
// createWebHashHistory  hash
// createWebHashHistory  HTML 5 mode
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
