import { useState, useEffect } from 'react'
import styles from './Message.module.css'

const Message = ({ type, msg }) => {
  // comeca nao exibindo:false
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!msg) {
      setVisible(false)
      return
    }

    setVisible(true)

    const timer = setTimeout(() => {
      setVisible(false)
    }, 3000)

    // return () => clearTimeout(timer) // clean o timer
  }, [msg]) //ligar o useEffect a msn

  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
      )}
    </>
  )
}

export default Message
