<script setup>
import { computed } from 'vue'

// add a const in defineProps to computed get it

const props = defineProps({
  variant: {
    type: String,
    // required: true
  },
  day: {
    type: String,
    default: 'defaultVariant',
  },
  filme: {
    type: Object,
    default: () => ({ title: 'Movie Title', year: 2000 })
  },
})


console.log(props.day)
const {title, year} = props.filme

const computedClass = computed(() => {
  return props.variant ? `alert-${props.variant}` : ''
})
</script>

<template>
  <div class="container">
    <h3 v-if="props.day">aqui deve remover o default da props para este text não ser exibido, Today is {{ props.day }}</h3>

    <p>
      for script setup checkout...
      <a href="https://vuejs.org/guide/components/props.html#props">https://vuejs.org/guide/components/props.html#props</a>
    </p>

    <ul class="filme">
      <li>{{ title }}</li>
      <li>{{ year }}</li>
    </ul>

    <div>      <slot name="head" />
    </div>

  <!--   <ul class="filmes">
      <li>
        {{ props.filme.title }}
      </li>
      <li>{{ props.filme }}</li>
    </ul> -->

    <div :class="`alert ${computedClass}`">Seu formulario foi enviado com sucesso</div>
    <slot />
  </div>
</template>
<style scoped>
.container {
  border: 1px solid;
  margin-top: 10px;
}
.alert {
  margin-top: 0.5rem;
  padding: 1rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 6px;
  color: #fff;
  background-color: #333;
  font-weight: bold;
}

.alert-success {
  background-color: #42b983;
}
.alert-danger {
  background-color: red;
}

.filme{
  font-size: 1rem;
  color: aquamarine;
  & li{
    padding: .5rem;
    background: #555;
  }
}
</style>
