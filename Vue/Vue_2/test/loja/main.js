const vm = new Vue({
  el: "#app",
  data: {
    price: 65,
    total: 0,
    desconto: 10,
    sel: "",
    cupom: "",
    acupom: 0,
    cupom_msn: "",
    codigo: "",
    secret: "bora",
    classcss: false,
  },
  methods: {
    credito() {
      return (this.price * this.total - this.acupom).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
    pix() {
      return (
        this.price * this.total -
        (this.desconto * this.price * this.total) / 100 -
        this.acupom
      ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    },
  },
  watch: {
    /* 
      watch a var `total` case == -1 return = 0
      */
    total() {
      if (this.total == -1) {
        return (this.total = 0);
      }
    },
    cupom() {
      if (this.cupom == this.secret) {
        return (this.acupom = 10);
      }
      if (this.cupom != this.secret) return (this.acupom = 0);
      if ((this.cupom = this.secret)) {
        return (this.classcss = true);
      }
    },
  },
  computed: {
    applyCupom: {
      // getter
      get() {
        if (this.cupom == this.secret) {
          return "Cupom Aplicado! - 10";
        }
        if (this.cupom != this.secret) {
          return "";
        }
        if (this.cupom == this.secret) {
          return (this.classcss = true);
        }
      },
      // setterg
      set(newValue) {
        [this.cupom] = newValue.split(" ");
      },
    },
  },
});
//default radio
//vm.sel = "1";
