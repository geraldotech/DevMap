const app = new Vue({
  el: "#app",
  data: {
    age: "",
  },
  created() {
    this.changeAge(age);
  },
  methods: {
    changeAge(value) {
      this.age = value;

      if (this.isUnderAge) {
        console.log("tem menos de 18");
        return;
      }
      if (this.isOld) {
        console.log("maior de 60");
        return;
      }
      console.log("É idade ok");
    },
  },
  computed: {
    isUnderAge() {
      return this.age < 18;
    },
    isOld() {
      return this.age > 60;
    },
  },
});
