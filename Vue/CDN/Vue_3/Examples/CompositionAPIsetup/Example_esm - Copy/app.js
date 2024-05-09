import { version, createApp, ref, reactive, onMounted  } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

console.log(version)


const app = createApp({
  
  setup() {
    const message = ref('Hello Vue!')
    const person = reactive({
      name: 'Geraldo',
      children: true,
    })

    function handlerClick() {
      console.log(`hello`)
    }


    onMounted(() => {
      fetch('http://apibr.gpdev.tech/posts', {
        headers:{
          psw: '9090',
          Authorization: 'Bearer GERALDODEVGPDEV'
        },
      }).then(r => r.json()).then(data => {
        console.log(data)
      })
    })

    return {
      message,
      person,
      handlerClick,
    }
  },
  //template: '<p>Hello</p>',
})

app.mount('#app')
