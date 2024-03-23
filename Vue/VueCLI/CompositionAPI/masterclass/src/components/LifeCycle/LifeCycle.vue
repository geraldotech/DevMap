<script setup>
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onUpdated, onBeforeUpdate, ref } from 'vue'
import LifeCycleExample from '../LifeCycle/LifeCycleExample.vue'

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
const lifeExampleToggle = ref(true)

console.log(`beforeCreate => setup()`)
console.log(`created => setup()`)

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

/* change name.value on input to change state and 
or toggle onUnmounted and  onBeforeUnmount*/
onBeforeUpdate(() => {
  console.log(`antes de atualizar o DOM onBeforeUpdate`)
})

onUpdated(() => {
  console.log(`quando atualizar o DOM onUpdated`)
})

/* Verificar o Toggle do o LifeCycleExample para demostração 
para ver este component you can go quem o import e fazer um v-if para analisar 
*/

onUnmounted(() => {
  console.log(`onUnmounted  LifeCycle.vue`)
})

onBeforeUnmount(() => {
  console.log(`onBeforeUnmount LifeCycle.vue`)
})
</script>
<template>
  <div ref="root">
    <h1 ref="heading">Composition API: Lifecycle Hooks</h1>
    <button @click="console.log(root)">root</button>
    <p>
      <a href="https://vuejs.org/api/composition-api-lifecycle">Diagram checkout</a>
    </p>
    <p>
      The <b>beforeCreate</b> hook is still available via the Options API. There is just on equivalent <b>onBeforeCreate</b> method in the Composition API because you can just use setup for the same
      purpose.
      <a href="https://github.com/vuejs/composition-api-rfc/issues/33">REF</a>
    </p>
    <b>beforeCreate</b> and <b>created</b> -> faz parte dessa fase <b>setup()</b>
 

  <h2>updates hooks</h2>
  <input
    type="text"
    v-model="name" />

  <section>
    <h2>onUnmounted e onBeforeUnmount Hooks</h2>
    <button @click="lifeExampleToggle = !lifeExampleToggle">LifeCycle Example Toggle</button>
 
    <LifeCycleExample  v-if="lifeExampleToggle" />
 
  </section>
</div>
</template>
<style scoped>
b {
  color: seagreen;
  font-weight: bolder;
}
</style>
