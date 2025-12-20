const { createApp, ref, computed, watch } = Vue

const app = Vue.createApp({
  setup() {
    const bar = ref('my bar')
    const message = ref('Hello')
    const isChecked = ref(true)

    return {
      message,
      bar, isChecked
    }
  },
  data() {
    return {
      foo: 'Vue !',
    }
  },
}).mount('#app')

// https://vuejs.org/guide/quick-start.html#splitting-up-the-modules