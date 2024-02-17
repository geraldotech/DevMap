import React from 'react'
import styles from './Menu.module.css'

/**
 * Challenge:
 * 1. Convert the Menu component to use props.children
 *    instead of taking an `items` prop. (We'll update
 *    the MenuButton and MenuDropdown components later.)
 *    See note inside the Menu.js file for more info
 *
 * 2. import MenuButton and MenuDropdown into THIS file "App.js"
 *    and render them as children of the Menu component.
 *    Remember to pass the buttonText and items array to
 *    the components that need those props to function.
 *    (We'll also be updating that soon!)
 *
 * NOTE: The functionality of the menu will be broken after
 * these changes, but that's okay! As such, don't worry
 * about moving the state or toggle function from the Menu;
 * there's more we need to learn before we can do that.
 */

/**
 * Challenge:
 * Part 1:
 * 1. Create new context here in the Menu component. Make sure
 *    to export it from this file as well.
 * 2. Wrap the `div` below with the Context Provider
 * 3. Give the Provider a value of the boolean `false` (represents
 *    the hardcoded `open` state for now - we'll fix this very soon.)
 */

const menuContext = React.createContext()

function Menu({ children }) {
  const [open, setOpen] = React.useState(false)
  const menuId = React.useId()

  function toggle() {
    console.log(`toggled menu.jsx`)
    setOpen((prevOpen) => !prevOpen)
  }

  return (
    <menuContext.Provider value={{ open, toggle, menuId }}>
      <div className={styles.menu} role="menu">
        {children}
      </div>
    </menuContext.Provider>
  )
}

export default Menu
export { menuContext }
