const meutem = `<p> {{name}} - {{age}} </p>`;

Vue.component("user-profile", {
  props: {
    name: {
      type: String,
      default: "Geraldo",
      //required: true, //se true requer informar o `name`
    },
    age: [Number, String],
  },
  //template: "<span> {{name}} - {{age}} </span>",
  template: meutem,
});

var app = new Vue({
  el: "#app",
  data: {
    obj: { name: "geraldoX", age: 28 },
  },
});
