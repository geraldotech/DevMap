const vm = new Vue({
  el: "#app",
  data() {
    return {
      selecionado: "",
      selecionado2: "",
    };
  },
  methods: {
    myfun: function ($event) {
      console.log(
        $event.target.options[$event.target.options.selectedIndex].dataset.id
      );
      console.warn($event);
    },
  },
});

//dark theme
document.documentElement.style = `color-scheme:dark`;
