import styles from './Frase.module.css'

function Frase() {
  return (
    <div className={styles.frase_Container}>
      <p className={styles.fraseContent}>Component com uma frase</p>
    </div>
  )
}
export default Frase
