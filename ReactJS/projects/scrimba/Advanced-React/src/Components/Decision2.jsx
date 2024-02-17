import React from 'react'

export default function Decision({ render }) {
  const [goingOut, setGoingOut] = React.useState(true)

  // re-render

  function toggleGoingOut() {
    setGoingOut((prev) => !prev)
  }

  return (
    <div>
      <p>onClick will trigger function so change state of goingOut</p>
      <button onClick={toggleGoingOut}>Change mind</button>
      <span>Aqui vai o return: {render(goingOut)}</span>
    </div>
  )
}
