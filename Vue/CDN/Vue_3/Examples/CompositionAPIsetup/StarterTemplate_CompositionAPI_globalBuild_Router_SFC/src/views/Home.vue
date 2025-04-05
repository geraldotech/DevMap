<script setup lang="jsx">
import { ref, h } from 'vue'
import Emitexample1 from '../components/Emitexample1.vue'
import Emitexample2 from '../components/Emitexample2.vue'
import Emitexample3 from '../components/Emitexample3.vue'

const apisizeemitted = ref(112)

/* to this work define lang=jsx attribute */
const JsxNode = () => {
  return (
    <div>
      <h3>JSX Node with lang attribute</h3>
    </div>
  )
}

function Emitexample3handleEvent(value) {
  console.log('Emitted value from children:', value) // Logs the value emitted from Emitexample3
  apisizeemitted.value = value
}
</script>
<template>
  <div class="home">
    <h1>Home</h1>
    <JsxNode />


    <hr>

    <h1>emit <strong>script setup</strong></h1>
    <Emitexample1 @algumEvento="console.log(false)" />

    <h1>emit <strong>export default</strong></h1>
    <Emitexample2 @algumEvento2="console.log(true)" />

    <h1>
      emit apisize emitted: <strong>{{ apisizeemitted }}</strong> and watch
    </h1>
    <p><strong>apisize</strong> recebe o valor da fetch API automaticamente e atualiza a variável</p>
    <Emitexample3 @apisize="Emitexample3handleEvent" @algumEvento3="console.log(value)" />


  </div>
</template>
<style scoped>
strong {
  color: coral;
}
</style>
