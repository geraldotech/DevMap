import React from 'react'
import styles from './Menu.module.css'

function MenuToggle({ children }) {
  return (
    <div
      className={styles.menu}
      role="menu">
      {children}
    </div>
  )
}

export default MenuToggle
