class ChatGTP extends React.Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    console.log(`click`)
  }

  render() {
    const name = 'Geraldo'
    return (
      <div>
        <h1>chatGPT{name}</h1>

        <button onClick={this.onClick}>click</button>
      </div>
    )
  }
}
