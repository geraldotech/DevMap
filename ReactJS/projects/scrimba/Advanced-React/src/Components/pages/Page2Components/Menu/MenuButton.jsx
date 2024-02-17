import React from 'react'
import { menuContext } from './Menu'

const MenuButton = ({ children, className }) => {
  // no video onClick é substituido por toggle, porem aqui funcionou com onClick only

  let menuValueContext = React.useContext(menuContext)
  let { menuId } = menuValueContext

  return (
    <button
      onClick={menuValueContext.toggle}
      className={className}
      aria-expanded={open}
      aria-haspopup="true"
      aria-controls={menuId}>
      {children}
    </button>
  )
}

export default MenuButton
