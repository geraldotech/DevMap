const baixar = `
<div>
<p>{{we}}</p>
<ul>
  <li v-for="(item, index) in list" :key="item.name">{{item.name}}</li>
</ul>
<p>{{$route.path}}</p>

</div>
`;

const baixe = Vue.component("myd-content", {
  template: baixar,
  data() {
    return {
      we: "Download Page",
      list: [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" },
      ],
    };
  },
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route.params.username;
    },
  },
});

export default baixe;
