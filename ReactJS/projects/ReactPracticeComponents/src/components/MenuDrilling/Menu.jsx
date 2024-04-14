import React from 'react'
import MenuButton from '../MenuDrilling/MenuButton'
import MenuDropDown from '../MenuDrilling/MenuDrop'

export function MenuDrilling() {
  const [on, setOn] = React.useState(false)
  const menu = [1,2,3,4]

  function toggle(){
    setOn(prev => !prev)
  }

  return (
    <div>
      <MenuButton onClick={toggle} />
      <MenuDropDown items={menu} on={on} />      
    </div>
  )
}
