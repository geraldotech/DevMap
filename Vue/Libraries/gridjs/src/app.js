const { createApp, ref, computed, watch, onMounted } = Vue

const app = Vue.createApp({
  /* components: { EasyDataTable: window['vue3-easy-data-table'] }, */

  setup() {
    const posts = ref([])
    const name = ref('ok')

    function fetchData() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((req) => {
          if (!req.ok) {
            throw new Error('Erro na resiquicao', req.status)
          }
          return req.json()
        }).then((res) => {
          console.log(res[0])
          posts.value = res

          const grid = new gridjs.Grid({
            search: true,
            columns: [{
              name: 'Body',
              formatter: (cell) => html(`<b>${cell}</b>`)
            }, "id", "title", "userId"],
            // data: posts.value,
            data: posts.value.map((post) => {
              return [post.body, post.id, post.title, post.userId]
            }),
            fixedHeader: true,
            height: '400px',
            resizable: true,
            sort: true,
            pagination: {
              limit: 20,
              summary: false
            },
            language: {
              'search': {
                'placeholder': '🔍 Search...'
              },
              'pagination': {
                'previous': '⬅️',
                'next': '➡️',
                'showing': '😃 Displaying',
                'results': () => 'Records'
              }
            }
          }).render(document.getElementById("wrapper"));


          console.log(grid)

          /* click events */
          grid.on('rowClick', (...args) => console.log('row: ' + JSON.stringify(args), args));
          grid.on('cellClick', (...args) => console.log('cell:', args))

        })
    }

    onMounted(() => {
      fetchData()



    })

    return {
      posts, name
    }
  },

}).mount('#app')

// https://vuejs.org/guide/quick-start.html#splitting-up-the-modules
