<script>
import { computed, watch, ref } from 'vue'
export default {
  setup() {
    const user = ref({
      name: 'Geraldo',
      last: 'Filho',
    })

    const fullName = computed(() => user.value.name + ' ' + user.value.last)

    watch(user, () => {
      console.log(`name changed`)
    }, {
      deep: true // because is watch a entire object
    })

    return {
      fullName,
      user,
    }
  },
}
</script>
<template>
  <section>
    <p>computedsetup.vue</p>
    <p>=> {{ fullName }}</p>

    <button @click="user.name = 'Felipe'">Change name</button>
  </section>
</template>
