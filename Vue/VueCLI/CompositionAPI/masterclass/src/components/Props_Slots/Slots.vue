<script setup>
import { onMounted, ref, useSlots } from 'vue'

const ele = ref()

const slots = useSlots()

onMounted(() => {
  console.log(slots)
})
</script>
<template>
  <div ref="ele">
    <p>
      <a href="https://vuejs.org/api/sfc-script-setup.html"
        >Usage of slots and attrs inside `script setup` should be relatively rare, since you can access them directly as $slots and $attrs in the template.</a
      >
    </p>
    <header class="header">
      <h1
        v-if="slots.title"
        class="title">
        <slot name="title" /> <br>
       <span>adicional text only display if slots.title</span>
      </h1>

      <div
        v-if="$slots.description"
        class="description">
        <slot name="description" />
      </div>

      <h3>
        <slot name=card></slot>
      </h3>

      <div class="default">
        <p>
          <slot />
        </p>
      </div>
    </header>
  </div>
</template>
<style scoped>
.header {
  background-color: #000;
  color: #fff;
  padding: 1rem;
  text-align: center;
}

.title {
  color: blue;
}

.description {
  color: coral;
}

.default {
  color: purple;
  margin-top: 1rem;
}
</style>
