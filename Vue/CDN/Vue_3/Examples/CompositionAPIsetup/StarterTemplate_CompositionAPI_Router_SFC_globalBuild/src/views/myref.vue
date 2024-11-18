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
import { ref, onMounted } from 'vue'
const input = ref(null) 


onMounted(() => {
  console.log(input)
  console.log(input.value.focus())
})

</script>

<template>
  <div>
    <h1>ref template</h1>

   <input ref="input">

  </div>
</template>

<style scoped>
h1 {
   color: rgb(0, 177, 65);
  text-align: center;
}
</style>
