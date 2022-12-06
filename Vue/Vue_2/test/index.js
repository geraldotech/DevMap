var app = new Vue({
  el: "#app",
  data: {
    message: "Geraldo",
    link: "http://google.com",
    counter: 0,
    working: false,
    input_res: "",
    email: "geraldofilho@.com",
    mostrar_mail: true,
  },
  methods: {
    increase() {
      this.counter++;
    },
    decrease() {
      if (this.counter === 0) return;
      this.counter--;
    },
    clear() {
      this.counter = 0;
    },
    addn() {
      this.mostrar_mail = false;
      this.working = true;
    },
    submitForm(e) {
      e.preventDefault();
      this.name = this.input_name;
    },
  },
});

app.message = "Geraldo 2";
