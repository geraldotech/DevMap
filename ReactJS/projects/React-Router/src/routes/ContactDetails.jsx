import { useParams, useNavigate } from 'react-router-dom'

const ContactDetails = () => {
  const { id } = useParams()

  // redirect
  // simulando redirecionar para home apos enviar o form

  const navigate = useNavigate()
  const handleContact = () => {
    console.log('Contato enviado')
    return navigate('/')
  }
  return (
    <div>
      <h1>Contacts</h1>
      <h2>Pagina: {id}</h2>
      <button onClick={handleContact}>Enviar</button>
    </div>
  )
}

export default ContactDetails
