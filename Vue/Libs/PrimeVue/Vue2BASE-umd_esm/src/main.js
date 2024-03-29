/* import Vue from "https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.esm.browser.js"; */

const vm = new Vue({
  el: '#app',
  data: {
    isa: 'Isabella',
    isChecked: false,
    isCalendar: null,
    selectedCity: null,
    textvalue: null,
    cityTravel: null,
    selectedCountry: null,
    isInvalid: '',
    inputswitch: false,
    errorToast: false,
    displayBasic: false,
    displayBasic2: false,
    visibleLeft: false,
    citiesbr: [
      { id: 1, name: 'New York', code: 'NY' },
      { id: 2, name: 'Rome', code: 'RM' },
      { id: 3, name: 'London', code: 'LDN' },
      { id: 4, name: 'Istanbul', code: 'IST' },
      { id: 5, name: 'Paris', code: 'PRS' },
    ],
    countries: [
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' },
    ],
    events: [
      { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0'},
      { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
      { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
      { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ],
  },
  methods: {
    onClick() {
      this.errorToast = !this.errorToast
    },
    openBasic: function(){
      this.displayBasic = true
    },
    hideSidebar(){
      console.log(`click`)
     // this.visibleLeft = false
    }
  },
  components: {
    'p-calendar': calendar,
    'p-checkbox': checkbox,
    'p-dropdown': dropdown,
    'p-inputtext': inputtext,
    radioinput: radiobutton,
    'p-button': button,
    'p-inputswitch': inputswitch,
    message: message,
    'p-timeline': timeline,
    card: card,
    divider: divider,
    'p-dialog': dialog,
    'p-sidebar': sidebar,
  },
  watch: {
    calendar() {
      console.log(this.calendar)
    },
  },
  // template: `<p>Hello</p>`,
})

document.documentElement.style = `color-scheme:dark`
