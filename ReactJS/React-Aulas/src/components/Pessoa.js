function Pessoa(pro) {
  return (
    <div>
      <img src={pro.foto} alt={pro.nome} />
      <h2>Nome: {pro.nome}</h2>
      <h2>Idade: {pro.idade}</h2>
      <h2>Profissão: {pro.profissao}</h2>
    </div>
  )
}

export default Pessoa
