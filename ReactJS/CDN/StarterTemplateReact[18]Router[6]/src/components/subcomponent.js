'use strict'

class SubComponent extends React.Component {
  render(props) {
    return (
      <div>
        <span> SubComponent-is-working </span>
        <h1>Hello {this.props.name}</h1>
      </div>
    )
  }
}
