import Button from './Eventos/Button'

function Evento() {
  function meuEvento(a) {
    console.log(a)
  }

  function segundoEvento(e, number) {
    console.log(`ativando segundo evento`, number)
  }

  return (
    <div>
      <p>clique para disparar um evento</p>
      <Button event={meuEvento} text="Primeiro Evento" />
      <Button event={(e) => segundoEvento(e, 20)} text="Segundo Evento" />
    </div>
  )
}

export default Evento
