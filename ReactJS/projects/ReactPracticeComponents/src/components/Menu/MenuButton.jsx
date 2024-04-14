import React from 'react'

import { MenuContext } from './Menu'

export default function MenuButton({children}) {

  const conte = React.useContext(MenuContext)


  return (
    <button onClick={conte.toggle}>{children}</button>
  )
}
