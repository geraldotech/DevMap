const { createApp, ref, onMounted, h, resolveComponent, defineAsyncComponent } = Vue

const app = Vue.createApp({
  setup() {
    // Intercept when the component is mounted
    onMounted(() => {})

    return {}
  },
})
/* === carregar components */
autoload('Typescript')

app.mount('#app')
