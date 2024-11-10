<script>

/* == example module.exports */
// const { ref } = Vue

// /* setup + dataOptions */
// module.exports = {
//   setup() {
//     const name = ref('Geraldo')

//     return {
//       name,
//     }
//   },
//   data: function () {
//     return {
//       who: 'world',
//       gp: 'Geraldo Developer',
//     }
//   },
// }

/* == example export default Composition */

import { ref } from 'vue'
export default {
  // setup(){
  // const name = ref('Geraldo')

  //   return {
  //     name
  //   }
  // }

  // or with DATA  OPTIONS WORKS TOO!
  // data(){
  //   return {
  //     name: 'Geraldo'
  //   }
  // }
}

</script>

<script setup>
/* == example setup tag Composition only */
import { ref } from 'vue'
const name = ref('Geraldo') 
</script>

<template>
  <div>
    <h1>Extra.vue</h1>
        <p>exemplos de exports</p>

    <h4>{{ name }}</h4>
    <h5>{{ gp }}</h5>
  </div>
</template>

<style scoped>
h1 {
   color: rgb(0, 177, 65);
  text-align: center;
}
</style>
