const test = {
  template: `
      <div @click='testClick'>Test template - click this</div>
      <div>{{test}}</div>
      <div>{{abc}}</div>
  `,
  props: {
    abc: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      test: "hellooo"
    };
  },
  methods: {
    testClick() {
      console.log(
        "this is a test click from component",
      
      );
  
    }
  }
};

export default test;
