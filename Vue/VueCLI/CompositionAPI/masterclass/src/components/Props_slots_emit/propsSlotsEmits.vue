<script setup>
import { ref } from 'vue'

import egComExSetup from './examples/egComExSetup.vue'
import PropsAlert from './examples/PropsAlerta.vue'
import PropsAlertaComputed from './examples/PropsComputed.vue'
import PropsAlertaEmit from './examples/PropsEmit.vue'
import SlotsExample from './examples/SlotsExample.vue'

const filmeList = { title: 'Movie', year: 2029 }
const variant = 'danger'
const showAlert = ref(true)

const getUpdate = (event) => {
  console.log(`updated`, event)
}

const handleClose = (event) => {
  console.log('close', event.target)
  showAlert.value = !showAlert.value
}
</script>

<template>
  <section>
    <h1>PropsAlert</h1>
    <PropsAlert variant="" />
    <PropsAlert variant="success" />
    <PropsAlert variant="danger" />
  </section>

  <section>
    <h1>Props computed</h1>
    <PropsAlertaComputed />
    <PropsAlertaComputed :variant="variant" />

    <PropsAlertaComputed
      variant="success"
      day="Saturday"
      :filme="filmeList">
      // pass a inline object props always warn Expected Object, got String
      <h1>slots for content and props for behavior</h1>
      <template #head>
        <h1>Welcome</h1>
      </template>
    </PropsAlertaComputed>
  </section>

  <p>
    for script setup checkout...
    <a
      href="https://vuejs.org/guide/components/props.html#props"
      target="_blank"
      >props.html#props</a
    >
    -
    <a
      href="https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits"
      target="_blank"
      >define Props / defineEmits
    </a>
  </p>

  <section>
    <h1>PropsAlertaEmit</h1>
    <PropsAlertaEmit
      v-if="showAlert"
      @close="handleClose" />
  </section>

  <section>
    <h1>XSlotsExample.vue</h1>

    <SlotsExample>
      <template #title> Geraldo </template>
      <template v-slot:description>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae accusamus, perspiciatis corporis repellendus ex vitae tempore, hic consequuntur nulla ipsam quasi veniam, nostrum nam ut! Sit
          amet asperiores voluptatem harum.
        </p>
      </template>

      <template #card> your card number </template>

      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores a fuga ex ducimus deleniti nesciunt reiciendis consequuntur in. Aperiam mollitia error laboriosam numquam sed doloremque eos
      rerum at quaerat delectus?
    </SlotsExample>
  </section>

  <egComExSetup @salvar="getUpdate" />

</template>
