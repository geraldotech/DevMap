import React from 'react'
import { BsStar, BsStarFill } from 'react-icons/bs'

import { ToggleContext } from './Toggle'

export default function Star() {
  /* tentar pegar o estado do parent Toggle */
  // const [starred, setStarred] = React.useState(false)

  // context fica totalmente dependendo do Toogle parent
  const { on, toggle } = React.useContext(ToggleContext)

  
  function toggle2() {
    setStarred((prev) => !prev)
    console.log('Star.jsx state toggled')
  }

  return on ? (
    <BsStarFill
      className="star filled"
      onClick={toggle}
    />
  ) : (
    <BsStar
      className="star "
      onClick={toggle}
    />
  )
}
