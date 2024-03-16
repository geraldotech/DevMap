import { ref, watch } from 'vue'

export default  {
 setup() {
    const title = ref('JSX inside VueJS')
    const clickMessage = ref('xx')

    function onClick() {
      clickMessage.value = 'was clicked'
      console.log(`click`)
    }

    watch(clickMessage, (newValue) => {
      console.log(`New value: ${newValue}`)
    })

    return {
      title,
      clickMessage,
      onClick
    }
  }
}