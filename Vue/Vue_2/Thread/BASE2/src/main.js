const vm = new Vue({
  created() {},
  el: "#app",
  data: {
    test: "I not",
  },
  template: `<p>{{test}}</p>`,
});

setTimeout(function () {
  vm.test = "";
}, 2000);

//dark theme
//document.documentElement.style = `color-scheme:dark`;
