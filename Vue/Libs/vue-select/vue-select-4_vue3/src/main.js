const { createApp, ref, onMounted, h, resolveComponent, defineAsyncComponent } = Vue

const app = Vue.createApp({
  components: {
    Typescript: autoimports('Typescript'),
    vSelect: window['vue-select'],
  },
  setup() {
    const options = ref([
      { title: "Old Man's War", code: 'BRL' },
      { title: 'The Lock Artist', code: 'BRA' },
      { title: 'HTML5', code: 'USA' },
      { title: 'Right Ho Jeeves', code: 'ITA' },
      { title: 'The Code of the Wooster', code: 'PRO' },
      { title: 'Thank You Jeeves', code: 'NB' },
    ])
    const selecionado = ref('')

    onMounted(() => {})
    return {
      options,
      selecionado,
    }
  },
})

console.log(app._component)

autoload('zbutton')

app.mount('#app')
