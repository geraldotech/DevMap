import React from 'react'

const MenuItem = ({ children, open, toggle }) => {
  console.log(open, toggle)
  return <p>{children}</p>
}

export default MenuItem
