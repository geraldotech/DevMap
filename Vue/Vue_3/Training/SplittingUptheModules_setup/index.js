const { createApp, ref, computed, watch } = Vue;

const app = Vue.createApp({
  setup(){
    const message = ref('Hello')
    return {
      message
    }
  },
  data(){
   return {
    foo: 'Vue !'
   }
  }
}).mount("#app")