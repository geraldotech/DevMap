import React from 'react'

const MenuButton = (props) => {
  return (
    <div onClick={props.onClick} className={props.className}>
      {props.buttonText}
    </div>
  )
}

export default MenuButton
