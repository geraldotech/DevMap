import * as Vue from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import { loadModule } from 'https://cdn.jsdelivr.net/npm/vue3-sfc-loader@0.9.5/dist/vue3-sfc-loader.esm.js'
import options from './sfc-loader.js'

const autoimports = (componame) => {
  return Vue.defineAsyncComponent(() => loadModule(`./src/components/${componame}.vue`, options))
}

 window.Vue = Vue

Vue.createApp({
  components: {
    hello: autoimports('Header'),
  },
  setup() {},
}).mount('#app')
 