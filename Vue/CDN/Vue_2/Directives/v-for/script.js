const app = new Vue({
  el: "#app",
  data: {
    list: [
      { id: 1, name: "Geraldo" },
      { id: 2, name: "Felipe" },
      { id: 3, name: "Milly" },
      { id: 4, name: "Isa" },
    ],
    categories: {
      android: 2,
      zeta: 1,
      uncategorized: 1,
      youtube: 1,
      upload: 1,
      downloads: 2,
    },
    numbers: [1, 2, 3, 4, 5],
  },
  computed: {
    evenNum() {
      return this.numbers.filter((val) => val % 2 === 0);
    },
  },
});
