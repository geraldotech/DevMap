const container = document.getElementById("root");

class App extends React.Component {
  getName = () => {
    console.log(this);
  };
  render() {
    return (
      <div>
        <h2>Hello from react.js</h2>
        <button onClick={this.getName}>Click</button>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(container);
root.render(
  <div className="main">
    <App />
  </div>
);
