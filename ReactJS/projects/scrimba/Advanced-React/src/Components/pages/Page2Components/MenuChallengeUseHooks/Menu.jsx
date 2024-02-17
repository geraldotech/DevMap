import React from 'react'
import styles from './Menu.module.css'
import useToggle from '../../../../hooks/useToggleCustomParams'

const MenuContext = React.createContext()
export { MenuContext }

function Menu({ children, onOpen }) {
  const [open, toggleOpen] = useToggle({
    initialValue: true,
    onToggle: onOpen,
  })

  return (
    <MenuContext.Provider value={{ open, toggleOpen }}>
      <div
        className={styles.menu}
        role="menu">
        {children}
      </div>
    </MenuContext.Provider>
  )
}

export default Menu
