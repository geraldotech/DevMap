<script setup>
import { ref } from 'vue'
import PropsA from '../components/PropsA.vue'
import PropsB from '../components/PropsB.vue'

const age = ref(30)

</script>

<template>
  <div>
    <h2>Props Page</h2>


    <button @click="age = ''">clear age</button>
       <PropsA
        name='test A'
        :idade="age"
        propC="2030"
        propD="2030"
        />
       <PropsB foo='test B'/>
  </div>
</template>
