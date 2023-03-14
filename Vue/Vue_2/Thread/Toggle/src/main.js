const vm = new Vue({
  el: "#app",
  data: {
    tema: false,
  },
  methods: {
    changeThema() {
      return (vm.tema = !vm.tema);
    },
  },
});

//dark theme
document.documentElement.style = `color-scheme:dark`;
document.title = `my website`;
