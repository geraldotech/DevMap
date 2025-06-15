const { createApp, ref, onMounted, h, resolveComponent, defineAsyncComponent } = Vue

const app = Vue.createApp({
  setup() {
    const obj = ref({
      name: 'Geraldo',
      age: 30
    })
    // Intercept when the component is mounted
    onMounted(() => {})

    return {obj}
  },
})
/* === carregar components */
autoload('Typescript')

app.mount('#app') // or const rootDiv = document.querySelector('#root') app.mount(rootDiv)
