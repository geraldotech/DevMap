import myComponent from './components/MyComponent.js'
import Heading from './components/Heading.js'
import Test from './components/test.js'
import Counter from './components/Counter.js'

//import { createApp,   onMounted } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import { createApp, onMounted, ref } from './vue.esm-browser.min.js'

export default createApp({
  components: {
    Counter: Counter,
    'my-component2': myComponent,
    Heading: Heading,
  },
  setup() {
    const message = ref('Hello')

    return { message }
  },

  data() {
    return {
      gpx: 'GeraldoCostaX'
    }
  },
  template: `
  <h1>vuejs {{gpx}}</h1>
  <p>{{message}}</p>
  <test abc="ABC"/>
  <Heading title="Welcome"/>
  <Counter/>

  `,
})
  .component('test', Test)
  .mount('#app')
