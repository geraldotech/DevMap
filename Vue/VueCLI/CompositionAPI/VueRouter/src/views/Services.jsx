import { ref, h } from 'vue'

export default {
  setup() {
    const name = ref('Geraldo')

    const changeName = () => {
      name.value = 'Felipe'
    }

    //const foo = h('h1', { onClick: changeName }, name.value)
    // or ...
    return () => (
      <>
        <h1>Services Template</h1>
        <h2 onClick={changeName}>{name.value}</h2>
      </>
    )
  },
}
