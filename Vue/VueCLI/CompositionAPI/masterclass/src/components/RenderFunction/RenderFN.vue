<script setup  lang="jsx">

//  👉 single vnode


/* export default {
  setup(){
  return () => 'Hello world'
}
}  */

const Templatehtml = () => <h1>Hello World</h1>


//  👉 single vnode 2

/* import {  h } from 'vue'
export default {
  setup() {
    return () => h('div', 'My custom div')
  },
} */

// 👉 return multiple root nodes /  props / id / class

/* import {  h } from 'vue'
export default {
  props: {
    msn: String,
   
  },
  setup(props) {
    return () => h('div',   { id: 'foo', class: 'bar' }, props.msn ?? 'enter your value')
  },
}  */

// 👉 import bar component and return a jsx from imports

/* import bar from './bar.jsx'
import {  h } from 'vue'

export default{
  setup(){
    return () => h('div',{id: 'barid', class:'barclass'}, bar())
  }
} */

// 👉 return multiples const

/* import bar from './bar.jsx'
import foo from './foo.jsx'
import {  h } from 'vue'

export default{
  setup(){

const template = h('div',{id: 'barid', class:'barclass'}, h(bar))
const template2 = h('div',{id: 'barid2', class:'barclass2'}, h(foo))

    return () => [template, template2]
  }
}
 */

//👉 return multiple and ref values,
// variable inside template is rendered
// but lost tags

/* import bar from './bar.jsx'
import foo from './foo.jsx'
import { h, ref } from 'vue'

export default {
  setup() {
    const surName = 'surName here'
    const age = ref('enter your age')

    //const showIt =
    const template = [h('div', [h(bar), h(foo), age.value, surName])]

    return () => [template, surName]
  },
}
 */

/* 
copy and paste on template
<h1>só vai renderizar a `const` sem tags {{surName}} , com hot reloading, virtualdom make changes but not persist after  Live reload</h1> 
<p>este p inteiro será descartado</p>

*/

// 👉  Condicional return component and onClick events

/* import bar from './bar.jsx'
import foo from './foo.jsx'
import { h, ref } from 'vue'

export default {
  setup() {
    const ok = ref(true)

    // this component has a class
    const myform = h('section', { class: 'mydiv' }, h(foo))
    const foos = h('div', h(foo))
    const barr = h('div', h(bar))
    const h1 = h('h1', 'title goes here')
    const button = h(
      'button',
      {
        onClick(event) {
          console.log(`was clicked`, event)
          ok.value = !ok.value
        },
      },
      'toggle'
    )

    // return always need be a function () => ....
    return () => (ok.value ? [button, myform, h1, foos] : [button, barr])
  },
}
 */
// 👉 return h() first params is function and render components

/* import bar from './bar.jsx'
import foo from './foo.jsx'
import { h } from 'vue'

export default {
   setup(props, { slots }) {


   const barr =  h(bar, () => "Hello")
   const div = h('div', {class: 'mydiv'}, "Its a div")
   const func = h(() => console.log(`was called`))

   return () => [div, barr, func, h(foo)]
   
  },
} */

// 👉 no setup() and return a component in pure jsx and reactive example working!!
// Formslot/List h syntax to get props and slots

import ComponentJSX from './ComponentJsx.vue'
</script>

<template>

  <Templatehtml/>
  <section v-show="true">
    <ComponentJSX />
  </section>
</template>
<style>
.yourname {
  color: dodgerblue;
}
.bar {
  color: red;
  font-weight: bold;
}

.barclass {
  color: coral;
}

.myform {
  border: 1px solud purple;
  padding: 1rem;
  color: blue;
}
.myform input {
  border: none;
  width: 100%;
  padding: 1rem;
}

.mydiv {
  color: red;
}
</style>
