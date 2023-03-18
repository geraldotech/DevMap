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
      // get id
      console.log(
        $event.target.options[$event.target.options.selectedIndex].dataset.id
      );
      // get Index by gmapx.com
      console.warn($event.target.options.selectedIndex);
      // como visto em https://github.com/geraldotech/DevMap/blob/main/JavaScript/select/README_from_scratch.js
      console.warn($event.target.selectedOptions[0].dataset.id);
      console.warn($event.target.selectedOptions[0].getAttribute("data"));
    },
  },
});

//dark theme
document.documentElement.style = `color-scheme:dark`;
