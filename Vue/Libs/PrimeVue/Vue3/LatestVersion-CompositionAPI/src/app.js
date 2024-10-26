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

app.use(PrimeVue.Config, {
  theme: {
    preset: PrimeVue.Themes.Aura,
  },
})

app.mount('#app')
