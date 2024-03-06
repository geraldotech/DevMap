new Vue({
  el: "#app",
  vuetify: new Vuetify({
    theme: { dark: true },
  }),
  data: {
    combo: [],
    operadoras: [
      { id: 1, name: "Vivo", plano: "12GB", color: "purple" },
      { id: 2, name: "TIM", plano: "10GB", color: "blue" },
      { id: 3, name: "Claro", plano: "13GB", color: "red" },
    ],
    depende: false,
    vivosub: "",
  },
});
