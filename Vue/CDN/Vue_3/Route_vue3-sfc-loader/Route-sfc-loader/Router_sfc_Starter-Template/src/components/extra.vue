<template>
  <div>
    <h4>Extra Vue {{ name }}</h4>
  </div>
</template>

<script>
const { ref } = Vue
module.exports = {
  setup() {
    const name = ref('Geraldo')


    return {
      name,
      
    }
  },
  data: function () {
    return {
      who: 'world',
      gp: 'Geraldo',
    }
  },
}
</script>
<style scoped>
h4 {
   color: coral;
}
</style>
