<script>
import calculateDiscount from './calculateDiscount.vue'
import { reactive, ref } from 'vue'
import calcSum from '../../hooks/calcSum'
import useCalcSum from '../../hooks/useCalcSum'

export default {


  mixins: [calculateDiscount],
  created() {
    this.calculateDiscount(),
      // this a sample hooks, can use with data
      console.log(calcSum(5, 10))
  },
  methods: {
    calculateDiscount() {
      console.log(`replaced`)
    },
  },
  /* === COMPOSITION API MIXIN ALTERNATIVE === */

  setup() {
    const data = ref('hoje')
    const x = ref(null)
    const y = ref(null)

    const user = reactive({name: 'George', last: '...'})


    // destructuring return of useCalc
    const { sum, calcSum } = useCalcSum()

    const calculateSum = () => {
      console.log(x.value)
      calcSum(x.value, y.value)
    }


    return {
      data,
      calculateSum,
      sum,
      x,
      y,
      user
    }
  },
}
</script>
<template>
  <h1>Produto</h1>

  <input type="text" v-model="x">
  <input type="text" v-model="y">
  <button @click="calculateSum">calculateSum</button>
  <p>{{ sum }}</p>

  <p>reactive {{ user }}</p>
 
</template>
