const {createApp} = Vue

const app = createApp({
  data(){
    return {
      test: 'geraldo',
      modal: false,
    }
  },
  methods: {
    modalOpen(){
      this.modal = !this.modal
    }
  }
}).mount(root)