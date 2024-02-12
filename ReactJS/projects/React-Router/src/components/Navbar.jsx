import { Link } from 'react-router-dom'
import styles from '../components/Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.menu}>
      <Link to={'/'}>Home</Link>
      <Link to={'/contact'}>Contacts</Link>
    </nav>
  )
}

export default Navbar
