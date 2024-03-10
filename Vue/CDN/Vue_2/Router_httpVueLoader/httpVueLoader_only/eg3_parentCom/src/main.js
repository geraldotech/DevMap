//assim requer declerar a tag <App></App>

/* const myapp = new Vue({
  el: "#app",
  data: {},
  components: {
    App: httpVueLoader("./App.vue"),
  },
});
 */
//modo export
//porém apenas one root element
new Vue({
  template: `<App></App>`,
  components: {
    App: httpVueLoader("./App.vue"),
  },
}).$mount("#app");
