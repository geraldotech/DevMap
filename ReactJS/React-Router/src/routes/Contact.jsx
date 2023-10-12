import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <p>
        <Link to="/contact/1">Contato</Link>
      </p>
      <p>
        <Link to="/contact/2">Contato 2</Link>
      </p>
      <p>
        <Link to="/contact/3">Contato 3</Link>
      </p>
    </div>
  )
}

export default Contact
