import React, { useState } from 'react'
import { ThemeContext } from '../Page2'

const Button = () => {
  //const valueTheme = React.useContext(ThemeContext)

  /* desafio 4 */
  // destructuring ir check Header to get value.theme
  const { theme, toggleTheme } = React.useContext(ThemeContext)

  return (
    /*     <button
      className={valueTheme.theme + '-theme Buttontheme'}
      onClick={onClick}>
      Switch Theme
    </button> */

    /* desafio 4 */
    <button className={theme + '-theme Buttontheme'} onClick={toggleTheme}>
      Switch Theme
    </button>
  )
}

export default Button
