import React from 'react'

// rest can be whatever name
const ButtonRest = ({ children, variant, ...rest }) => {
  console.log(rest)
  if (variant) {
    console.log(`variant actived`)
  }
  // run some code to change something based on the variant

  return <button {...rest}>{children}</button>
}

export default ButtonRest

/* another way is */

/*

const ButtonRest = ({ children, ...rest }) => {
  console.log(rest) 

  if (rest.variant) {
    console.log(`has variand`)
  }

    return <button {...rest}>{children}</button>
}
*/
