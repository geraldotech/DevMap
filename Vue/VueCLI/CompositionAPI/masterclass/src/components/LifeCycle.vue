<script setup>
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onUpdated, onBeforeUpdate, ref } from 'vue'
import LifeCycleExample from './LifeCycleExample.vue'

/* 
= created

Preprar o component
Ajax, iniiciliazar var
Nao tem acesso ao template (DOM)


= Mounted

Iniicializar lib externa
Precisa de acesso ao template (DOM)
tem acesso ao templace


= update
for debug

// Unmounted
// remover tudo o que for necessário para liberar memória

*/
const name = ref('John Snow')
const root = ref()
const heading = ref()
const headerstate = ref(true)

console.log(`beforeCreate setup()`)

console.log(`created setup()`)

onBeforeMount(() => {
  console.log(`onBeforeMount`)
  console.log(`Estado`, name.value)
  console.log(root.value)
})

onMounted(() => {
  console.log(`onMounted`)
  console.log(`Estado`, name.value)
  console.log(`ref root`, root.value)
  console.log(heading.value)
})

/* change name.value on input to change state and */
onBeforeUpdate(() => {
  console.log(`onBeforeUpdate`)
})

onUpdated(() => {
  console.log(`onUpdated`)
})

/* Usando o LifeCycleExample para demostração */

onUnmounted(() => {
  console.log(`onUnmounted`)
  console.log(`Estado`, name.value)
  console.log(root.value)
})

onBeforeUnmount(() => {
  console.log(`onBeforeUnmount`)
  console.log(`Estado`, name.value)
  console.log(root.value)
})
</script>
<template>
  <div ref="root">
    <LifeCycleExample v-if="headerstate" />
    <button @click="headerstate = !headerstate">Toggle headerstate</button>

    <h1 ref="heading">Composition API: Lifecycle Hooks</h1>
    <button @click="console.log(root)">root</button>
    <p>
      <a href="https://vuejs.org/api/composition-api-lifecycle">Diagram checkout</a>
    </p>
    <p>
      The <b>beforeCreate</b> hook is still available via the Options API. There is just no equivalent <b>onBeforeCreate</b> method in the Composition API because you can just use setup for the same
      purpose.
      <a href="https://github.com/vuejs/composition-api-rfc/issues/33">REF</a>
    </p>
    <b>beforeCreate</b> and <b>created</b> -> use <b>setup()</b>
  </div>

  <h2>updates hooks</h2>
  <input
    type="text"
    v-model="name" />
</template>
<style scoped>
b {
  color: seagreen;
  font-weight: bolder;
}
</style>
