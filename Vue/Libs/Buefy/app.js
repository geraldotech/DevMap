new Vue({
  el: '#app',
  data:{
    name: '',
    activeTab: 0,
    showBooks: false
  },
  methods: {
    prompt() {
      this.$buefy.dialog.prompt({
          message: `What's your name?`,
          inputAttrs: {
              placeholder: "e.g. Walter",
              maxlength: 10
          },
          trapFocus: true,
          onConfirm: value =>
              this.$buefy.toast.open(`Your name is: ${value}`)
      });
  },
  }
})