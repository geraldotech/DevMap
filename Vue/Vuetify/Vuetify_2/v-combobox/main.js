new Vue({
  el: "#app",
  vuetify: new Vuetify({
    theme: { dark: true },
  }),
  data: {
    combo: [],
    operadoras: [
      { id: 1, name: "Vivo", plano: "12GB" },
      { id: 2, name: "TIM", plano: "10GB" },
    ],
  },
});
