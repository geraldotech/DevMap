const { createApp, ref, computed, watch } = Vue;

const app = Vue.createApp({
  setup(){
    const message = ref('Hello Vue!')
    return {
      message
    }
  }
}).mount("#app")