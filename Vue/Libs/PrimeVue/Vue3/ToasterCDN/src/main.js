const { createApp, ref, computed, onMounted, onUnmounted } = Vue
const { useToast } = primevue.usetoast

createApp({
  setup() {
    const toast = useToast()

    function showToast() {
      toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 })
    }

    return {
      showToast,
    }
  },
  components: {
    'p-toast': primevue.toast,
  },
})
  .use(primevue.config.default)
  .use(primevue.toastservice)
  .mount('#app')
