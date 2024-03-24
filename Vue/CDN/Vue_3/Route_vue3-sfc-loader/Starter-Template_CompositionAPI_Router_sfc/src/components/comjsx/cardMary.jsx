import {ref, h} from 'vue'

export default {
  setup() {

    const name = ref('Geraldo')

    const changeName = () => {
      name.value = 'Felipe'
    }

    
    //const foo = h('h1', { onClick: changeName }, name.value)

    return () => (
      <>
      <h1>Hello </h1>
       <h2 onClick={changeName}>{name.value}</h2>
  
      </>
    )
}
}