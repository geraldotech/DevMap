import React from 'react'
import { MenuContext } from '../MenuChallengeUseHooks/Menu'

const MenuButton = ({ children, className }) => {
  const {  toggleOpen } = React.useContext(MenuContext)

  return (
    <button
      className={className}
      onClick={toggleOpen}>
      {children}
    </button>
  )
}

export default MenuButton
