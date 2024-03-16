import { ref, watch } from 'vue'

export default function bar() {
  const title = 'JSX inside VueJS'

  const clickMessage = ref('default')

  function onClick() {
    clickMessage.value = 'was clicked'
  }

  watch(clickMessage, () => {
    console.log(`new value`)
  })

  return (
    <>
      <h3>React JSX My bar is {title}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates pariatur doloribus porro id in modi dolorem laudantium magnam, nulla</p>
      <button onClick={onClick}>onClick</button>
      <p>{clickMessage.value}</p>
    </>
  )
}
