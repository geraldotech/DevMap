// calcSum.js
import { ref } from 'vue'

export default function useCalcSum() {
  const sum = ref(0)

  function calcSum(x, y) {
    sum.value = parseInt(x) + +y
  }

  return {
    sum,
    calcSum,
  }
}
