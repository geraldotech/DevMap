import {
  createApp,
  ref,
  reactive,
} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

const app = createApp({



  setup() {
    const message = ref('Hello Vue!')
    const person = reactive({
      name: 'Geraldo',
      children: true
    })


    function handlerClick(){
      console.log(`hello`)
    }

    return {
      message, person, handlerClick
    }
  },
  //template: '<p>Hello</p>',
})

app.mount('#app')