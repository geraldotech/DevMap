<script>
import { h, resolveComponent } from 'vue'
import Cardcat from './cardcat.vue'
import cardMaryX from './comjsx/cardMaryX.vue'
//import CardMary from './comjsx/cardMary.jsx' 

export default {
  components:{
    Cardcat: Cardcat,

  },

  setup(){


    return {
      
    } 
  }
}


</script>
<template>
  <div>
    <h1>MyComponentX</h1>

    <Cardcat />

    <cardMaryX />

  </div>
</template>

<style></style>
