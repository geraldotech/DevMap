import { Link } from 'react-router-dom'
import styles from './contact.module.css'

const Contact = () => {
  return (
    <div className={styles.contactlinks}>
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
