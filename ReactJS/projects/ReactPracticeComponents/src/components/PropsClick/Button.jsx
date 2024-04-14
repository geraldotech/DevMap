import PropTypes from 'prop-types'
import React from 'react'

export function Button({onClick, text = 'Default', age}) {

  
  // tem age and typeof age == number? entao return age || senao this message 

  const checkage = age && typeof age === 'number' && age || 'define a number please'

  // inside a function return results
  function checkAge(age){
    if(age && typeof age === 'number'){
      return age
     } 
     return  'define a number please'
  }
  
  // console.log(checkAge(5))
  // console.log(checkAge('5'))
  // console.log(checkAge(true))

  return (
   <button onClick={onClick}>{text} - {checkAge()} <br></br> {checkage}</button>
  )
}


Button.propTypes = {
  text: PropTypes.string.isRequired,
  
}