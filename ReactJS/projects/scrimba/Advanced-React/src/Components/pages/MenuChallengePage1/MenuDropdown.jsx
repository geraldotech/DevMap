import React from 'react'

const MenuDropdown = ({ children, open, toggle }) => {
  /** Discovery Challenge:
   * Make it so the children of MenuDropdown also have
   * access to toggle and open.
   */
  //V1//
  // return open ? <nav>{children}</nav> : null
  // V2 // now open, toggle in MenuItem nao é mais undefined
  return open ? (
    <nav>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { toggle, open })
      })}
    </nav>
  ) : null
}

export default MenuDropdown
