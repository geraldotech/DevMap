import * as Vue from 'https://unpkg.com/vue@3/dist/vue.runtime.esm-browser.prod.js'
import { loadModule } from 'https://cdn.jsdelivr.net/npm/vue3-sfc-loader@0.8.4/dist/vue3-sfc-loader.esm.js'
//import router from './router/index.js'
import * as VueRouter from 'https://unpkg.com/browse/vue-router@3.4.3/dist/vue-router.esm.browser.js'

const home = { template: `<p>Home Page</p>` }
const about = { template: `<p>About Us</p>` }

const routes = [
  { path: '/', component: home },
  { path: '/about', component: about },
]

const router = new VueRouter({
  routes,
})

const options = {
  moduleCache: {
    vue: Vue,
  },
  async getFile(url) {
    const res = await fetch(url)
    if (!res.ok)
      throw Object.assign(new Error(res.statusText + ' ' + url), { res })
    return {
      getContentData: (asBinary) => (asBinary ? res.arrayBuffer() : res.text()),
    }
  },
  addStyle(textContent) {
    const style = Object.assign(document.createElement('style'), {
      textContent,
    })
    const ref = document.head.getElementsByTagName('style')[0] || null
    document.head.insertBefore(style, ref)
  },
}
Vue.createApp(
  Vue.defineAsyncComponent(() => loadModule('./src/App.vue', options))
)
  .use(router)
  .mount(document.body)
