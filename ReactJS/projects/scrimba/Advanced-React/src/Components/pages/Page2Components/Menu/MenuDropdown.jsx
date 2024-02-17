import React from 'react'
import { menuContext } from './Menu'

const MenuDropdown = ({ children }) => {
  let { open, menuId } = React.useContext(menuContext)
  /** Discovery Challenge:
   * Make it so the children of MenuDropdown also have
   * access to toggle and open.
   */
  //V1//
  // return open ? <nav>{children}</nav> : null

  // V2 // now open, toggle in MenuItem nao é mais undefined
  /*  return open ? (
    <nav>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { toggle, open })
      })}
    </nav>
  ) : null */

  // V3 using React.context - no needs props anymore
  return open ? <nav id={menuId}>{children}</nav> : null
}

export default MenuDropdown
