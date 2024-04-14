import React from 'react'

export function MenuChilBtn({onClick, children}) {
  return (
   <div onClick={onClick}> 
        {children}
   </div>
  )
}
