System.register(["vue"], () => {
  let Vue;
  return {
    setters: [(v) => (Vue = v.default)],
    execute() {
      new Vue({
        el: "#app",
        data: {
          a: "in console Type: <ul><li>System.resolve('vue')</li><li>System.has(System.resolve('vue'))</li> <li>System.get(System.resolve('vue'))</li> <li> for(let i of System.entries()){    console.log(i)}</li></ul> ",
        },
      });
    },
  };
});
console.clear();
