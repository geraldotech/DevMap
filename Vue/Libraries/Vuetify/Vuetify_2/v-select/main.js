new Vue({
  el: "#app",
  vuetify: new Vuetify({
    theme: { dark: true },
  }),
  data() {
    return{
      select: { state: 'Florida', abbr: 'FL' },
      items: [
        { state: 'Florida', abbr: 'FL' },
        { state: 'Georgia', abbr: 'GA' },
        { state: 'Nebraska', abbr: 'NE' },
        { state: 'California', abbr: 'CA' },
        { state: 'New York', abbr: 'NY' },],
    };
  },
});
