/* by GERALDO FILHO */

import LoadVanillaIncludes from './smart-ajax-includes-vue.js'

const { createApp } = Vue
const app = createApp({
  data() {
    return {
      wel: 'Welcome to Vue + div includes html files',
      x: false,
    }
  },
}).mount('#app')

// require FN Later Load plugin after VueMount
LoadVanillaIncludes()
