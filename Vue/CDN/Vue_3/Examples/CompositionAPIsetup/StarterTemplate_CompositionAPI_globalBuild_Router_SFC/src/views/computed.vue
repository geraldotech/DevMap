<script setup>
import { computed, ref, watch } from 'vue'

const tech = ref('')

const isNode = computed(() => tech.value === 'node')
const isJava = computed(() => tech.value === 'javascript')
const isHTML = computed(() => tech.value === 'html')

// smartway
const techContent = {
  node: 'node',
  javascript: 'javascript',
  html: 'html',
}

const currentTechContent = computed(() => techContent[tech.value] || 'Other content')

watch(tech, (newvalue, oldvalue) => {
  console.log(`is changing`)
  console.log(tech.value)
})
</script>
<template>
  <div>
    <h2>currentTechContent: {{ currentTechContent.includes('node') }}</h2>

    <p v-if="isNode">is nodeJS</p>
    <p v-if="isJava">is isJava</p>
    <p v-if="isHTML">is isHTML</p>
    <hr />

    <input
      type="radio"
      name="tech"
      value="node"
      id="node"
      v-model="tech" />
    <label for="node">NodeJS</label>
    <input
      type="radio"
      name="tech"
      value="javascript"
      id="javascript"
      v-model="tech" />
    <label for="javascript">JavaScript</label>
    <input
      type="radio"
      name="tech"
      value="html"
      id="html"
      v-model="tech" />
    <label for="html">Html</label>

    <p>Selecionado: {{ tech }}</p>
    <template v-if="isNode">
      <div>
        <img
          src="https://usefulangle.com/img/thumb/nodejs.png"
          alt="" />
      </div>
    </template>
    <template v-else-if="isJava">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          alt="" />
      </div>
    </template>
    <template v-else-if="isHTML">
      <div>
        <img
          style="max-width: 10%"
          src="https://www.cnet.com/a/img/resize/92ebd806405ac2adf2e2b0f903b5feda822afe21/hub/2011/01/18/5aecbdd4-f0f7-11e2-8c7c-d4ae52e62bcc/HTML5_Logo_550px.png?auto=webp&fit=crop&height=900&width=1200"
          alt="" />
      </div>
    </template>
  </div>
</template>
<!-- only for this component -->
<style scoped>
div img {
  width: 100%;
  max-width: 20%;
  display: block;
}
label {
  cursor: pointer;
}
</style>
