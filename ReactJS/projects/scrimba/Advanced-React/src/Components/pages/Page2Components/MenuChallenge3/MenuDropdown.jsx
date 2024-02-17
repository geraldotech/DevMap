import React from 'react'
import Toggle from '../Toggle/index'

const MenuDropdown = ({ children }) => {
  return (
    <Toggle.On>
      <nav>{children}</nav>
    </Toggle.On>
  )
}

export default MenuDropdown
