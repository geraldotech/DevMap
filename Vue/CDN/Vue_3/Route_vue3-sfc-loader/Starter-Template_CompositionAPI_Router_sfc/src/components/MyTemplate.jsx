// MyComponent.jsx
export default {
  name: 'MyComponent',
  setup() {
      return {
          message: 'Hello from MyComponent!'
      };
  },
  render() {
      return (
          <div>
              <h1>{this.message}</h1>
          </div>
      );
  }
};
