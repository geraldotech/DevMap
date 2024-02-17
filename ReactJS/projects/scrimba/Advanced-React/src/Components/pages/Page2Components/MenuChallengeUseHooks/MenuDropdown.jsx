import React from 'react'
import { MenuContext } from '../MenuChallengeUseHooks/Menu'

const MenuDropdown = ({ children }) => {
  const { open } = React.useContext(MenuContext)
  return <nav>{open && children}</nav>
}

export default MenuDropdown
