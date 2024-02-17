import React from 'react'

const MenuDropdown = ({ items }) => {
  return (
    <nav>
      {items.map((item, ind) => (
        <li key={ind}>{item}</li>
      ))}
    </nav>
  )
}

export default MenuDropdown
