
const { ref } = Vue

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
