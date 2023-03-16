const vm = new Vue({
  el: "#app",
  data: {
    valor: "",
    attr: "",
  },
  methods: {
    myfun($event) {
      console.log($event);
    },
  },
});

//dark theme
document.documentElement.style = `color-scheme:dark`;
