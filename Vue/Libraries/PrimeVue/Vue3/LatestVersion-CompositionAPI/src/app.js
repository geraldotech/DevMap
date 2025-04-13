const { createApp, ref, reactive, onMounted } = Vue

console.group('%c Todos os components', 'color: #66d9eb;font-size:1rem;background: #000c15')
console.log(PrimeVue)
console.groupEnd()

const app = createApp({
  setup() {
    const date = ref()
    const checked = ref(true)
    const checkedx = ref(true)
    const text = ref(null)
    const pizza = ref(['Peperoni'])
    const button = ref('button')
    const value4 = ref()
    const selectedPerson = ref()
    const selectedCity = ref()

    const products = ref([
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
      {
        id: '1001',
        code: 'nvklal433',
        name: 'Black Watch',
        description: 'Product Description',
        image: 'black-watch.jpg',
        price: 72,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'INSTOCK',
        rating: 4,
      },
      {
        id: '1002',
        code: 'zz21cz3c1',
        name: 'Blue Band',
        description: 'Product Description',
        image: 'blue-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 3,
      },
      {
        id: '1003',
        code: '244wgerg2',
        name: 'Blue T-Shirt',
        description: 'Product Description',
        image: 'blue-t-shirt.jpg',
        price: 29,
        category: 'Clothing',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
      {
        id: '1004',
        code: 'h456wer53',
        name: 'Bracelet',
        description: 'Product Description',
        image: 'bracelet.jpg',
        price: 15,
        category: 'Accessories',
        quantity: 73,
        inventoryStatus: 'INSTOCK',
        rating: 4,
      },
      {
        id: '1005',
        code: 'av2231fwg',
        name: 'Brown Purse',
        description: 'Product Description',
        image: 'brown-purse.jpg',
        price: 120,
        category: 'Accessories',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4,
      },
    ])

    const chartData = ref()
    const chartOptions = ref()

    const cities = ref([
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ])

    const brothers = ref([
      { id: 1, name: 'Geraldo' },
      { id: 2, name: 'Felipe' },
    ])

    const selectedToppings = ref([])

    const upper = () => (button.value = button.value.toUpperCase())

    onMounted(() => {})

    return {
      date,
      checked,
      checkedx,
      text,
      pizza,
      button,
      upper,
      selectedCity,
      cities,
      selectedToppings,
      value4,
      selectedPerson,
      brothers,
      products,
    }
  },
})

/* Prime Components Register */
app.component('p-datepicker', PrimeVue.DatePicker)

app.component('p-monthpicker', PrimeVue.Calendar)
app.component('Calendar', PrimeVue.Calendar)

app.component('p-buttoncheck', PrimeVue.Button)
app.component('p-button', PrimeVue.Button)

app.component('p-inputtext', PrimeVue.InputText)

app.component('p-checkbox', PrimeVue.Checkbox)

app.component('p-dropdown', PrimeVue.Dropdown)
app.component('Dropdown', PrimeVue.Dropdown)
app.component('p-menuitem-text', PrimeVue.Menuitem)

/* DATATABLES */

app.component('p-datable', PrimeVue.DataTable)
app.component('p-column', PrimeVue.Column)

app.use(PrimeVue.Config, {
  theme: {
    preset: PrimeVue.Themes.Lara, // Aura, Lara
    options: {
      prefix: 'p',
      //  disable dark mode completely using false or none
      darkModeSelector: false || 'none',
    },
  },
})

app.mount('#app')
