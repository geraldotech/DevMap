import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.esm.browser.js'

const vm = new Vue({
  created() {
    this.getpersons()
  },
  mounted(){
    this.getPerson3()
  },
  el: '#app',
  data() {
    return {
      person: {},
      persons: [],
      chars: [],
      loaded: false,
      loading: false,
    }
  },
  methods: {
    dados() {
      fetch('./src/db.json')
        .then((req) => req.json())
        .then((data) => (this.person = data.person))
    },
    async getpersons() {
     
     // await new Promise((resolve) => setTimeout(resolve, 2000))
      try {
        fetch('./src/persons.json')
          .then((res) => res.json())
          .then((data) => (this.persons = data))
      } catch (err) {
        console.log(err)
      } finally {
        this.loaded = !this.loaded
      }
    },
    async getPerson3() {
      this.loading  = !this.loading
      //await new Promise((resolve) => setTimeout(resolve, 2000))
      fetch('./src/persons.json')
        .then((res) => res.json())
        .then((data) => 
        this.chars = data
        )
        this.loading  = !this.loading
    },
  },
  computed:{
    onlyGeraldo(){
      return this.chars.find(person => person.age == 31)
    }
  }
})

//dark theme
//document.documentElement.style = `color-scheme:dark`;
