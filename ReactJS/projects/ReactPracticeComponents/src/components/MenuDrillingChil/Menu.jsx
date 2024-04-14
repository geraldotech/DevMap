import React from 'react'

export function MenuChildren({children}) {
  const [open, setOpen] = React.useState(false)

  function toggle(){   
    setOpen((prevopen) => !prevopen)
  }
  return (
   <div onClick={toggle}>
  {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          open,
          toggle,
        })
      })}
   </div>
  )
}
