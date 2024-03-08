const { createApp, ref, reactive } = Vue

const app = createApp({
  setup() {
    const date = ref()
    const checked = ref(true)
    const checkedx = ref(true)
    const text = ref(null)
    const pizza = ref()
    const button = ref('button')
    const value4 = ref()
    const selectedPerson = ref()

    const selectedCity = ref()
    const cities = ref([
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ])

    const brothers = ref([{id: 1, name: 'Geraldo'}, {id: 2, name: 'Felipe'}])

    const selectedToppings = ref([]);

    const upper = () => (button.value = button.value.toUpperCase())

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
      brothers
    }
  },
})

/* Prime Components Register */
app.component('p-datepicker', primevue.calendar)
app.component('p-monthpicker', primevue.calendar)
app.component('Calendar', primevue.calendar)

app.component('p-buttoncheck', primevue.button)
app.component('p-button', primevue.button)

app.component('p-inputtext', primevue.inputtext)

app.component('p-checkbox', primevue.checkbox)

app.component('p-dropdown', primevue.dropdown)
app.component('Dropdown', primevue.dropdown)
app.component('p-menuitem-text', primevue.menuitem)

app.use(primevue.config.default)

app.mount('#app')
