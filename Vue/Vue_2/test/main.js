const vm = new Vue({
  el: "#app",
  data: {
    prime: "Amazon",
    pconte: "novo para",
  },
  methods: {
    createEl() {
      const p = Object.assign(document.createElement("p"), {
        textContent: this.pconte,
      });
      document.body.appendChild(p);
      p.id = "novo";
    },
    removeEl() {
      const p = document.querySelector("#novo");
      if (p) {
        p.remove();
      }
    },
  },
});
