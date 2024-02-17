import React from 'react'

export default function Decision3({ children }) {
  const [goingOut, setGoingOut] = React.useState(true)

  function toggleGoingOut() {
    setGoingOut((prev) => !prev)
  }

  return (
    <div>
      <p>onClick will trigger function so change state of goingOut</p>
      <button onClick={toggleGoingOut}>Change mind</button>
      {children(goingOut)}
    </div>
  )
}
