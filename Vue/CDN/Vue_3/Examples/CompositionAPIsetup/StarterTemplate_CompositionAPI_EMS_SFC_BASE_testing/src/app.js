import * as Vue from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import { loadModule } from 'https://cdn.jsdelivr.net/npm/vue3-sfc-loader@0.9.5/dist/vue3-sfc-loader.esm.js'

import * as VueTableLite from 'https://vue3-lite-table.vercel.app/assets/chunks/TableLite.bf914eb2.js'
import options from './sfc-loader.js'

const autoimports = (componentName) => {
  return Vue.defineAsyncComponent(() => loadModule(`./src/components/${componentName}.vue`, options))
}

console.log(VueTableLite)

window.Vue = Vue
window.VueTableLite = VueTableLite

const { createApp, reactive } = Vue

const TableLite = autoimports('Tablelite')

const app = createApp({
  components: {
    hello: autoimports('Header'),
    Tablelite: TableLite,
  },
  setup() {
    const table = reactive({
      isLoading: false,
      columns: [
        {
          label: 'ID',
          field: 'id',
          width: '3%',
          sortable: true,
          isKey: true,
        },
        {
          label: 'Name',
          field: 'name',
          width: '10%',
          sortable: true,
        },
        {
          label: 'Email',
          field: 'email',
          width: '15%',
          sortable: true,
        },
      ],
      rows: [
        {
          id: 1,
          name: 'jack',
          email: 'example@example.com',
        },
        {
          id: 2,
          name: 'gerakdo',
          email: 'maceio@example.com',
        },
        {
          id: 2,
          name: 'gerakdo',
          email: 'maceio@example.com',
        },
        {
          id: 2,
          name: 'gerakdo',
          email: 'maceio@example.com',
        },
        {
          id: 2,
          name: 'gerakdo',
          email: 'maceio@example.com',
        },
        {
          id: 2,
          name: 'gerakdo',
          email: 'maceio@example.com',
        },
        {
          id: 2,
          name: 'gerakdo',
          email: 'maceio@example.com',
        },
        {
          id: 2,
          name: 'gerakdo',
          email: 'maceio@example.com',
        },
        {
          id: 2,
          name: 'gerakdo',
          email: 'maceio@example.com',
        },
        {
          id: 2,
          name: 'gerakdo',
          email: 'maceio@example.com',
        },
        {
          id: 2,
          name: 'gerakdo',
          email: 'maceio@example.com',
        },
        {
          id: 2,
          name: 'gerakdo',
          email: 'maceio@example.com',
        },
        {
          id: 2,
          name: 'gerakdo',
          email: 'maceio@example.com',
        },
        {
          id: 2,
          name: 'gerakdo',
          email: 'maceio@example.com',
        },
        {
          id: 2,
          name: 'gerakdo',
          email: 'maceio@example.com',
        },
        {
          id: 2,
          name: 'gerakdo',
          email: 'maceio@example.com',
        },
        {
          id: 2,
          name: 'gerakdo',
          email: 'maceio@example.com',
        },
        {
          id: 2,
          name: 'gerakdo',
          email: 'maceio@example.com',
        },
        {
          id: 2,
          name: 'gerakdo',
          email: 'maceio@example.com',
        },
      ],
      totalRecordCount: 0,
      sortable: {
        order: 'id',
        sort: 'asc',
      },
      messages: {
        pagingInfo: 'Page {0} of {1}',
        pageSizeChangeLabel: 'Size:',
        gotoPageLabel: 'Ir para:',
        noDataAvailable: 'Sem dados',
      },
    })

    const rowClicked = (row) => {
      console.log(row)
    }

    /**
     * Row checked event
     */
    const updateCheckedRows = (rowsKey) => {
      console.log(rowsKey)
    }

    return {
      table,
      rowClicked,
      updateCheckedRows,
    }
  },
})

app.mount('#app')
