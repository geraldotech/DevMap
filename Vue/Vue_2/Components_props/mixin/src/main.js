//define a mixim object
const mixin = {
  methods: {
    getUsers() {
      console.log(`getUsers!`);
    },
  },
};

//no components children  mixins: [mixin], e está apta a usar os recursos compartilhados
Vue.component("Nvidia", {
  template: `<div>
  <h1>GPU</h1>
  <button @click.stop.prevent="getUsers()">getUsers from Nvidia</button>
  </div>`,
  data() {
    return {};
  },
  mixins: [mixin],
});

const vm = new Vue({
  created() {},
  el: "#app",
  mixins: [mixin],
  data: {
    test: "I not",
  },
  //template: `<div>{{test}}</div>`,
  methods: {},
});

/* setTimeout(function () {
  vm.test = "";
}, 2000);
 */
