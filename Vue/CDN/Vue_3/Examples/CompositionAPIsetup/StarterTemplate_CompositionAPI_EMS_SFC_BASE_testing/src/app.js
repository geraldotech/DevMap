import * as Vue from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import { loadModule } from 'https://cdn.jsdelivr.net/npm/vue3-sfc-loader@0.9.5/dist/vue3-sfc-loader.esm.js'

import * as VueTableLite from 'https://vue3-lite-table.vercel.app/assets/chunks/TableLite.bf914eb2.js'
import options from './sfc-loader.js'

const autoimports = (componentName) => {
  return Vue.defineAsyncComponent(() => loadModule(`./src/components/${componentName}.vue`, options))
}

// window.Vue = Vue
// window.VueTableLite = VueTableLite

const { ref, createApp, onMounted, watch, computed } = Vue

//const TableLite = autoimports('Tablelite')

const app = createApp({
  components: {
    hello: autoimports('Header'),
  },
  setup() {
    /* consts */
    const h1 = ref('')
    const counter = ref(0)


    /* computed */
    const multiplo = computed(() => {
      return counter.value * 2
    })

    /* life cycle hooks */
    onMounted(() => {
      console.log(h1)
    })

    // trava o valor do contador em 0
    // se o valor for menor que 0, o valor é 0
    watch(counter, (newvale, old) => {
      if (newvale == -1 && old == 0) {
        counter.value = 0
      }
    })

    /* return */
    return {
      h1,
      counter,
      multiplo,
    }
  },
})

app.mount('#app')
