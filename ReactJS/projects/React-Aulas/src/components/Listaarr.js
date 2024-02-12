function Listarr({ itens }) {
  return (
    <>
      <h3>Lista de itens</h3>
      {/*  jsx usar () ao inves de {} 
      usando index como :key do Vue, como o arr não tem id
      */}
      {itens.length > 0 ? (
        itens.map((item, index) => <p key={index}>{item}</p>)
      ) : (
        <p>Não existem itens</p>
      )}
    </>
  )
}

export default Listarr

/* Parent Component
import Listarr from './components/Listaarr'

  const Itens = ['React', 'Vue', 'Angular']


     <Listarr itens={Itens} />
      <Listarr itens={[1, 2, 3, 4]} />
      <Listarr itens={[]} />
*/
