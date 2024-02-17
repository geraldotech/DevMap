import React from 'react'
import styles from './Menu.module.css'

import Toggle from '../Toggle/index'

function Menu({ children, onOpen }) {
  return (
    <Toggle onToggle={onOpen}>
      <div
        className={styles.menu}
        role="menu">
        {children}
      </div>
    </Toggle>
  )
}

export default Menu
