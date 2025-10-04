const { createApp, ref, computed, watch } = Vue

const app = Vue.createApp({
  setup() {
    const state = ref({ isActive: true, align: true })
    const state2 = ref({ isActive: true })

    const shouldHighlight = ref(true)

    const css = ref({
      green: 'green',
      red: 'red',
    })

    return {
      state,
      state2,
      css,
      shouldHighlight,
    }
  },
}).mount('#app')
