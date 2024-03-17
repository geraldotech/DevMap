/* import Vue from "https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.esm.browser.js"; */

const vm = new Vue({
  el: "#app",
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
    citiesbr: [
			{id: 1, name: 'New York', code: 'NY'},
			{id: 2, name: 'Rome', code: 'RM'},
			{id: 3, name: 'London', code: 'LDN'},
			{id: 4, name: 'Istanbul', code: 'IST'},
			{id: 5, name: 'Paris', code: 'PRS'}
		],
    countries: [
      {name: 'Australia', code: 'AU'},
      {name: 'Brazil', code: 'BR'},
      {name: 'China', code: 'CN'},
      {name: 'Egypt', code: 'EG'},
      {name: 'France', code: 'FR'},
      {name: 'Germany', code: 'DE'},
      {name: 'India', code: 'IN'},
      {name: 'Japan', code: 'JP'},
      {name: 'Spain', code: 'ES'},
      {name: 'United States', code: 'US'},
  ]
  },
  components: {
    'p-calendar': calendar,
    'p-checkbox': checkbox,
    'p-dropdown': dropdown,
    'p-inputtext': inputtext,
    'radioinput': radiobutton,
    'p-button': button,
    'p-inputswitch': inputswitch,
},
watch:{
  calendar(){
    console.log(this.calendar)
  }
}
 // template: `<p>Hello</p>`,
 
})



document.documentElement.style = `color-scheme:dark`;


