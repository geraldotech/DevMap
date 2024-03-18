<script setup lang="jsx">
import Formx from './form.jsx'
import Formslot from './formSlots.jsx'
import List from './list'
import barEventFront from './barEventFront.jsx'
import { ref, h } from 'vue'


/* ref */
const dia = ref('Segunda')


/* === functions === */
const changeDay = () => (dia.value = 'Friday')



/* === jsx examples === */
const JsxNode = () => {
  return (
    <div>
      <div> text </div>
      <button onClick={changeDay}>click me to change day</button>
      <p>{dia.value}</p>
      <h1>Hello</h1>
    </div>
  )
}

function Rendery() {
  return <div>Render direct tags Hello</div>
}

const Renderx = () => {
  return h('h1', 'Render using h')
}
//console.log(myapp())
</script>
<template>
  <h1>ComponentJSX.vue</h1>

  <section>
    <p>Render from conts FN Renderx(), Rendery(), JsxNode()</p>
    <Renderx />
    <Rendery />
    <JsxNode />
  </section>

  <section>
    <p>RenderFN.vue/ComponentJSx.vue/List.jsx</p>
    <List
      seunome="Geraldo"
      yourname="yourname" />

    <Formx yourname="John Snow" />
  </section>
  <hr />

  <section>
    <p>Formslot.jsx</p>
    <Formslot
      message="slots example"
      footer="my footer">
      <template #default>
        <p>Default slots</p>
      </template>

      <template #footer="{ exemploprops }">
        <p>its my footer</p>
        <p>{{ exemploprops }}</p>
      </template>
    </Formslot>
  </section>
  <hr />

  <section>
    <p>RenderFN.vue/ComponentJSx.vue/barEventFront.jsx</p>
    <h1>Bar Event RenderFN</h1>
    <barEventFront />
    <h1>Bar Event RenderFN</h1>
  </section>
</template>
