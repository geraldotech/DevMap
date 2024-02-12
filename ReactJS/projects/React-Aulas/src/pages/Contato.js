import { useState } from 'react'
import Statelift from '../components/Statelift'
import Saudacao from '../components/Saudacao'

function Contato() {
  // Contato component pai gerencia o state
  // Statelift component X com input
  // Saudacao component Y recebe o valor da input
  const [nome, setNome] = useState()

  return (
    <div>
      <h1>Contato</h1>
      <p>Conteudo da pagina</p>

      <Statelift setNome={setNome} />
      {nome}

      <Saudacao nome={nome} />
    </div>
  )
}
export default Contato
