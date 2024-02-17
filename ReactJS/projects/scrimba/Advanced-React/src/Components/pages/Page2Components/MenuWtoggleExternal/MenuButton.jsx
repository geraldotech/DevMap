import React from 'react'
import Toggle from '../Toggle/index'

const MenuButton = ({ children, className }) => {
  return (
    <button
      className={className}
      aria-expanded={open}
      aria-haspopup="true">
      {children}
    </button>
  )
}

export default MenuButton
