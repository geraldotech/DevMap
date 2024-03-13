class Example extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      name: 'Geraldo',
    }
    const [fruit, setFruit] = useState('banana');
  }
  render() {
    function increment() {

      
      console.log(this.fruit)
    }

    return (
      <div>
        <p>
          Você clicou {this.state.count} vezes {this.state.name}
        </p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Clique aqui</button>

        <button onClick={increment}>increment</button>
      </div>
    )
  }
}

// https://pt-br.legacy.reactjs.org/docs/hooks-state.html
