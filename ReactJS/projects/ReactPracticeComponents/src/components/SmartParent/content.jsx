import React from 'react'

import { ToggleContexto } from './Parent'

export default function Son() {
  const {on, saldo} = React.useContext(ToggleContexto)
  
  /* DA PRA FAZER MUITAS POSSIBILIDAES AQUI
  SE TEM SALDO RETURN UM OU OUTRO
  
  */

  const checkSaldo = typeof saldo === 'number'


  if(saldo || checkSaldo){
    return (
      on ? <div>TURN ON Your <b>Balance:{saldo}</b></div> : <div>TURN OFF  Your <b>Balance:{saldo}</b></div>
  )
  }
  return (
    on ? <p>TURN ON</p> : <p>TURN OFF</p>
)
  
}
