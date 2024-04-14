import React from 'react'

export  function MenuDropdown({open , children, toggle}) {
  return open ? <nav>
  {React.Children.map(children, (child) => {
    return React.cloneElement(child, { toggle, open })
  })}
</nav> : null
}
