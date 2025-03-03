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
    const grupos_selected = ref(null)
    const grupos = ref([])
    const selected_country = ref(null)
    const selecao = ref(null)

    function onSearch(search, loading) {
      if (search.length) {
        console.log(search)
        loading(true)
        searchfetch(loading, search)
      }
    }

    function searchfetch(loading, search) {
      fetch(`https://api-restful-json.vercel.app/entregasuporte/?title_like=${escape(search)}`)
        .then((res) => {
          if (!res.ok) {
            console.error(res)
            return
          }
          res.json().then((response) => {
            console.log(response)
            //grupos.value = response

            // make custom label
            /*  grupos.value = response.map((v) => ({
              id: v.id,
              title: v.title,
              custom: `${v.id} - ${v.title}`,
            })) */
            grupos.value = response.map(({ id, title, slug, custom }) => {
              return { id, title, slug, custom: `${id} - ${title}` }
            })
          })

          loading(false)
        })
        .catch((error) => {
          console.error('Erro ao buscar', error)
          loading(false)
        })
    }

    onMounted(() => {})
    return {
      options,
      selecionado,
      onSearch,
      grupos_selected,
      grupos,
      searchfetch,
      selected_country,
      selecao,
    }
  },
})

console.log(app._component)

/* console.log(app._component.components.vSelect.props) */

/* SETANDO COMPONENTS NO VUE-SELECT */
// Set the components prop default to return our fresh components
app._component.components.vSelect.props.components.default = () => ({
  Deselect: {
    render: () => h('span', '❌'),
  },
  OpenIndicator: {
    render: () => h('span', '🔽'),
  },
})

autoload('zbutton')

app.mount('#app')
