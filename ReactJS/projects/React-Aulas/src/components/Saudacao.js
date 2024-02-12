// Component Y
function Saudacao({ nome }) {
  function gerarSaudacao(somename) {
    return `Ola , ${somename}, tudo bem ?`
  }

  return <>{nome && <p>{gerarSaudacao(nome)}</p>}</>
}

export default Saudacao
