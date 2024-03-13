/* 
pros here is diff from App.
*/
class HandleEvents extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      name: 'Geraldo',
    }

    // This binding is necessary to make `this` work in the callback
    // // https://pt-br.legacy.reactjs.org/docs/hooks-state.html
    this.handleClick = this.handleClick.bind(this)
    this.changeState = this.changeState.bind(this)
  }
  handleClick() {
    // this.setState({ count: this.state.count + 1 })
    console.log(`click`)
  }
  changeState() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div className="p-3 space-y-3">
        <p>
          Você clicou {this.state.count} vezes {this.state.name}
        </p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Clique aqui</button> |<button onClick={this.changeState}>Increment by FN</button>
        <hr></hr>
        <button onClick={this.handleClick}>increment</button>
      </div>
    )
  }
}

// https://pt-br.legacy.reactjs.org/docs/handling-events.html
