const { createApp, ref, onMounted, defineCustomElement, reactive } = Vue

const buttonImporAC = Vue.defineAsyncComponent(() => loadModule('./src/components/Button.vue', options))

// imports 1
const ButtonAlpha = imports('./src/components/Button.vue')

// autoimports 2
const ButtonBravo = autoimports('Whatis')
const Buttoncharlie = autoimports('Whatis')

const app = Vue.createApp({
  components: {
    Mbutton: Vue.defineAsyncComponent(() => loadModule('./src/components/Button.vue', options)),
    Zbutton: buttonImporAC,
    Buttonalpha: ButtonAlpha,
    custombutton: ButtonAlpha,
    whatisthat: imports('./src/components/Whatis.vue'),
    youtubecom: autoimports('Youtube'),
    goingto: ButtonBravo,
    nowyousee: 'ok',
    TableLite: TableLite

  },
  setup() {
    const message = ref('Hello World!')

    const table = reactive({
      isLoading: false,
      columns: [
        {
          label: "ID",
          field: "id",
          width: "3%",
          sortable: true,
          isKey: true,
        },
        {
          label: "Name",
          field: "name",
          width: "10%",
          sortable: true,
        },
        {
          label: "Email",
          field: "email",
          width: "15%",
          sortable: true,
        },
      ],
      rows: [],
      totalRecordCount: 0,
      sortable: {
        order: "id",
        sort: "asc",
      },
    });


    return {
      message, table
    }
  },
})

/* app.component + autoimports */
app.component('componenta', autoimports('Youtube'))

/* custom using object */
app.component('Buttoncharlie', {
  template: `Hello`,
})

/* autoload  3 + direct inject on app.vue */
autoload('Typescript')
autoload('Tablelite')

app.mount('#app')
