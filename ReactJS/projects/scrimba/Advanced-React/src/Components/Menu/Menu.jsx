import React, { useState } from 'react'
import MenuButton from './MenuButton'
import MenuDropdown from './MenuDropdown'
import styles from './Menu.module.css'

function Menu({ items, buttonText }) {
  const [open, setOpen] = useState(false)

  function toggle() {
    setOpen((prevOpen) => !prevOpen)
  }

  return (
    <div className={styles.menu}>
      <MenuButton
        className={styles.button}
        buttonText={buttonText}
        onClick={toggle}
      />

      {open && <MenuDropdown items={items} />}
    </div>
  )
}

export default Menu
