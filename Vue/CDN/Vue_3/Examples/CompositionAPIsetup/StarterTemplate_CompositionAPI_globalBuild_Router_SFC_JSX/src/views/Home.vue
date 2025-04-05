<script setup lang="jsx">
import { ref, h } from 'vue'


const MyCustomComponent =  h('h1', 'Hello World!!')


/* to this work define lang=jsx attribute */
const JsxNode = () => {
  return (
    <div>
     <h3>JSX Node with lang attribute</h3>
    </div>
  )
}

</script>
<template>
<div class="home">

  <h1> Home page!</h1>
  <MyCustomComponent/>

  <JsxNode/>
  
  
 </div>
</template>