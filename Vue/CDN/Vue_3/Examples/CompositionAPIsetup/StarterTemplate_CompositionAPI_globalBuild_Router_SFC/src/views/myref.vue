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
import { ref, onMounted, computed } from 'vue'
const input = ref(null)
const form = ref(null)
const form2 = ref(null)
const currentStep = ref(1)
const dadosComputados = ref(null)

function handlerForm() {
  const formData = new FormData(form.value)
  console.log(formData)
  console.log(Object.fromEntries(formData))
}

function handlerFormSteps() {
  const formData2 = new FormData(form2.value)
  console.log(formData2)
  console.log(Object.fromEntries(formData2))
  dadosComputados.value = Object.fromEntries(formData2)
}

// Go to the next step
const nextStep = () => {
  if (currentStep.value < 3) {
    currentStep.value++
  }
}

// Go to the previous step
const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const valorescomputados = computed((val) => {})

onMounted(() => {
  console.log(input)
  console.log(input.value.focus())
})
</script>

<template>
  <div>
    <h1>ref template</h1>
    <input ref="input" />

    <h1>Forms and Object.fromEntries</h1>
    <form
      ref="form"
      action=""
      @submit.prevent="handlerForm">
      <input
        type="text"
        name="name"
        value="Geraldo" />
      <input
        type="text"
        name="age"
        value="30" />
      <button>Send now</button>
    </form>
    <hr />
    <h1>Form click and avança</h1>
    <form
      ref="form2"
      @submit.prevent="handlerFormSteps">
      <h2>Como deseja seguir?</h2>
      <!-- Step A -->
      <div
        v-show="currentStep === 1"
        class="stepa">
        <input
          type="text"
          name="name"
          placeholder="Name" />
        <div class="flex">
          <button
            type="button"
            @click="nextStep">
            Next
          </button>
        </div>
      </div>

      <!-- Step B -->
      <div
        v-show="currentStep === 2"
        class="stepb">
        <input
          type="text"
          name="age"
          placeholder="Age" />
        <div class="flex">
          <button
            type="button"
            @click="prevStep">
            Back
          </button>
          <button
            type="button"
            @click="nextStep">
            Next
          </button>
        </div>
      </div>

      <!-- Step C -->
      <div
        v-show="currentStep === 3"
        class="stepc">
        <input
          type="email"
          name="email"
          placeholder="Email" />
        <div class="flex">
          <button
            type="button"
            @click="prevStep">
            Back
          </button>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
    <p>{{ dadosComputados }}</p>
  </div>
</template>

<style scoped>
h1 {
  color: rgb(0, 177, 65);
  text-align: center;
}
div {
  margin-block: 10px;
}

/* General Styling */
form {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 2px solid #4caf50;
  border-radius: 10px;
  /*   background: linear-gradient(135deg, #e0f7fa, #f1f8e9); */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
  border: 1px solid #ef0000;
  border-radius: 5px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input:focus {
  border-color: #4caf50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  outline: none;
}

button {
  background: #4caf50;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s ease, transform 0.2s ease;
}

button:hover {
  background: #45a049;
  transform: scale(1.05);
}

button:active {
  background: #388e3c;
}

/* Step Transitions */
.stepa,
.stepb,
.stepc {
  opacity: 100;
  transform: translateX(-20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.stepa[v-show='true'],
.stepb[v-show='true'],
.stepc[v-show='true'] {
  opacity: 1;
  transform: translateX(0);
}

/* Optional: Add a Step Indicator */
form::before {
  content: attr(data-step);
  display: block;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: #4caf50;
  margin-bottom: 10px;
}

.flex {
  display: flex;
  justify-content: space-around;
}
</style>
