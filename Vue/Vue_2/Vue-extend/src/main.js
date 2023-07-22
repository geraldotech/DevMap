/* Global Config
https://v2.vuejs.org/v2/api/#Global-Config
*/

//Suppress all Vue logs and warnings.
Vue.config.silent = true;

/* 
Vue.extend also creates an instance of Vue
Extends funcionando similar ao `new Vue` com a própria ordem de $mount, porém também funcionam como Components, sendo comentário ao declrar components o Vue under the hood chama o extends.
*/

/* definindo um extend com $mount */
const Perfil = Vue.extend({
  template: `<p>{{hello}}</p>`,
  data: function () {
    return {
      hello: `Ola from Vue extend one`,
    };
  },
});
new Perfil().$mount("#al");

/* definindo outro vue.extend com $mount e será usado como Component e aproveitando esta chamando um component que foi definido acima em Vue.extend */
const RTX = Vue.extend({
  template: `<p>{{hello}} - <MyPerfil></MyPerfil> </p>`,
  data: () => {
    return {
      hello: `Ola from Vue extend RTX two`,
    };
  },
  components: {
    MyPerfil: Perfil, // Extend chamada outro Extend como component
  },
});
new RTX().$mount("#rtx");

// também podemos $mount usando `el`
const elmounta = Vue.extend({
  data() {
    return {
      msn: "Hello from #elmount Adicional:",
      adicional: "99",
    };
  },
  template: `<p>{{msn}} {{adicional}}</p>`, // esse object nao existe no data porem vamos preencher a informacao na montagem, onde overwrite o data() se houver
});
/* new elmounta({
  el: "#elmount",
  data: { adicional: "InfoDireta no new" },
}); */
new elmounta({ data: { adicioxnal: 1233 } }).$mount("#elmount");

//eg extender a extender
//Nesse nodo extendes vou pegar os dados do `elmounta`

const elmountAndSo = elmounta.extend({
  data: () => {
    return {
      songs: 1000,
      artist: "Taylor",
      adicional: "100", // obj definido do extends[elmounta]
    };
  },
  template: `<div>Hello from extender a extender:
  <p>{{adicional}}</p>
  <p>{{msn}}</p> como essa obj existe do outra extends a informacao foi herdada, porem basta definir novo valor no data()
  </div>`,
});
new elmountAndSo({ el: "#elmountAndSongs" });

/* 
comment on stackoverflow
I think the confusion is because extend & component are closely connected. To create a component Vue calls extend internally: */

//thanks: https://stackoverflow.com/questions/40719200/what-is-vue-extend-for
//
const vm = new Vue({
  el: "#app",
  data: {},
  template: `<p>Hello from default instance Vue  {{hi}} <testExtende></testExtende></p>`,
  components: {
    testExtende: RTX, //call the vue.extend here
  },
});

//dark theme
document.documentElement.style = `color-scheme:dark`;
