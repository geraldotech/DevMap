import React from 'react'

const MenuButton = ({ children, onClick, className, toggle }) => {
  // no video onClick é substituido por toggle, porem aqui funcionou com Onclick only
  return (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  )
}

export default MenuButton
