<script setup>



const title = ref('JSX inside VueJS')
    const clickMessage = ref('THAT does sound good?')

    function onClick() {
      clickMessage.value = 'Sounds good!'
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


</script>