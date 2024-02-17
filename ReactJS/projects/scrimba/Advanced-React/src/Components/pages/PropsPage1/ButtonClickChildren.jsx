import React from 'react'

const ButtonClickChildren = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>
}

export default ButtonClickChildren
