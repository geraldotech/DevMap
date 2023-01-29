const container = document.getElementById("root");

class App extends React.Component {
  getName = () => {
    console.log(this);
  };
  render() {
    return <button onClick={this.getName}>Click</button>;
  }
}

ReactDOM.render(
  <div class="main">
    <App />
  </div>,
  container
);
