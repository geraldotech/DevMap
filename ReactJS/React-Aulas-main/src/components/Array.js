function Array(props) {
  function hello() {
    return props.nome.toUpperCase()
  }

  return (
    <div>
      <p>Fala ai {props.nome.toUpperCase()} !!</p>
      <p>{hello()}</p>
    </div>
  )
}

export default Array
