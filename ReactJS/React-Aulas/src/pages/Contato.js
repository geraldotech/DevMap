import { useState } from 'react'
import Statelift from '../components/Statelift'
import Saudacao from '../components/Saudacao'

function Contato() {
  // page Contato component pai
  // Statelift component X
  // Saudacao component Y
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
