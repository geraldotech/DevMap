import React from 'react'

const Buttoneventprops = ({ children, onClick, onMouseOver }) => {
  return (
    <button onClick={onClick} onMouseOver={onMouseOver}>
      {children}
    </button>
  )
}

export default Buttoneventprops
