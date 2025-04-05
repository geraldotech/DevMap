<script>
import { ref } from 'vue'

export default {
  props: {
    name: { type: String },
    idade: Number,
    propC: {
      type: String,
      required: true,
      default: 'valor padrao'
    },
    propD: {
      type: [String, null],
      required: true,
    },
    disabled: Boolean,
    disabledbutton: [Boolean, String],
  },

  // more props types like objcts, functions, validator here https://vuejs.org/guide/components/props.html
  setup(props) {
    const foo = ref(0)

    console.log(props.name ?? 'ok')

    return {
      foo,
    }
  },
}
</script>

<template>
  <div>
    <h1>{{ name }}</h1>
    <p>Eu tenho {{ idade }} anos.</p>

    <p>{{propC}}</p>
    <p>{{propD}}</p>
  </div>
</template>
