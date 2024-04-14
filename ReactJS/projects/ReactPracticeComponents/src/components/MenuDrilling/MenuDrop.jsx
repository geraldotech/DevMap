import React from 'react'

export default function MenuDrop({items, on}) {
  return (
    <nav>
      {on && items?.map((item) => {
        return <li key={item}>{item}</li>
      })}
    </nav>
  )
}
