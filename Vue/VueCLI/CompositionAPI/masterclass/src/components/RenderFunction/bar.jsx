import { ref, watch, h } from 'vue'

export default {
  setup() {
    const title = 'JSX inside VueJS 2'
    const clickMessage = ref('default')

    function onClick() {
      console.log(`dd`)
      clickMessage.value = 'was clicked'
    }

   const Aside = () =>{
      return <aside><h1>My aside</h1></aside>
    }

    watch(clickMessage, () => {
      console.log(`new value`)
      console.log(clickMessage.value)
    })
    return () => (
      <>
        <Aside/>
      <h1>{title}</h1>
        template
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates pariatur doloribus porro id in modi dolorem laudantium magnam, nulla</p>
        <button onClick={onClick}>onClick</button>
        <p>{clickMessage.value}</p>
      </>
    )
  },
}
