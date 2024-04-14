import React, { useContext, useState} from 'react'
import { ToggleContexto } from './Parent'

export default function Button({children}) {
/* BUTTON USE TOGGLE and show children content wrapped */
  const {toggle, saldo} = useContext(ToggleContexto)


  // fazer outra outra aproveitando o eClick
  function handleButtonClick(){
    console.log(`Sonbtn click`)    
      toggle()
  }

  

  return (
    <button onClick={handleButtonClick} className={saldo  && `balance`}>{children}</button>
  )
}
