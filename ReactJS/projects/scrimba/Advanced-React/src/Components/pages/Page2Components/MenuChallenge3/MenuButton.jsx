import React from 'react'
import Toggle from '../Toggle/index'

const MenuButton = ({ children, className }) => {
  // no video onClick é substituido por toggle, porem aqui funcionou com onClick only

  return (
    <Toggle.Button>
      <button className={className}>{children}</button>
    </Toggle.Button>
  )
}

export default MenuButton
