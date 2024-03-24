<script>
import { h, resolveComponent } from 'vue'
import Cardcat from './cardcat.vue'


async function impart(){
  const pngData = await import('./sum.js')
  return pngData
}

impart()

/* import cardMary from './comjsx/cardMary.jsx' */
//import Natal from './comjsx/natal.js'

//import CardMary from './comjsx/cardMary'

//const CardMary = () => loadModule('./src/components/comjsx/cardMary.vue', options)

export default {
  components: {
    Cardcat,
    /* cardMary, */

    //    CardMaryx: () =>
    //     loadModule('./src/components/comjsx/cardMary.vue', options)
    //
    
  },

  setup() {
    return {}
  },
}
</script>
<template>
  <div>
    <h1>MyComponentX</h1>
   
    <Cardcat />
    <!-- <cardMary /> -->
  </div>
</template>
