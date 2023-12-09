import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  console.log('meu console')
  return <h1 className={styles.red}>Meu App</h1>
}
