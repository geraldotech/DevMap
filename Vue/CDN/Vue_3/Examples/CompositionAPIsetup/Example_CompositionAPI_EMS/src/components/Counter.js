//import { createApp,  ref, onMounted } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import { ref } from '../vue.esm-browser.min.js'

export default {
  template: `<div>count is {{ count }}</div> 
  <button @click="increment">increment {{nota}}</button>
  `,
  setup() {
    const count = ref(10)
    const nota = ref(0)

    const increment = () => {
      nota.value++
      console.log(`click`)
    }

    return { nota, count, increment }
  },
  data() {
    return {}
  },
  methods: {},
}
