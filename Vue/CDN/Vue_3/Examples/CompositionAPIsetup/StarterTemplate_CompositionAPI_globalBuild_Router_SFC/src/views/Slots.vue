<script setup>
import { ref } from 'vue'
import MySlotsVue from '../components/MySlots.vue'
</script>

<template>
  <div>
    <h2>Slots Page</h2>

    <MySlotsVue>
      <template #header> Hello </template>
      <template #body>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique reiciendis fugit cupiditate itaque, perspiciatis exercitationem sunt, doloribus iure error quibusdam, ad tempora nobis saepe! Commodi numquam delectus soluta nemo rerum?
      </template>



      qualquer valor para o slot padrão
    </MySlotsVue>
  </div>
</template>
