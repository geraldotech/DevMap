new Vue({
  el: "#app",

  vuetify: new Vuetify({
    theme: { dark: true },
  }),
  data: {
    ativo: false,
    primo: "primary",
    mudar: false,
    loading: false,
    box: false,
    combo: "",
    radio: "",
    select: { state: "Florida", abbr: "FL" },
    items: [
      { id: 1, state: "Florida", abbr: "FL" },
      { id: 2, state: "Georgia", abbr: "GA" },
    ],
  },
  methods: {
    dados(e) {
      console.log(e.target);
    },
    classe() {
      this.primo = "primary";
    },
  },
  watch: {
    loading() {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
});
