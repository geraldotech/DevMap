import React from 'react'

export default function Decision({ sayName }) {
  const [goingOut, setGoingOut] = React.useState(false)

  // re-render
  sayName(goingOut)

  function toggleGoingOut() {
    setGoingOut((prev) => !prev)
  }

  return (
    <div>
      <p>onClick will trigger function so change state of goingOut</p>
      <button onClick={toggleGoingOut}>Change mind</button>
      <h1>Am I going out tonight?? {goingOut ? 'Yes!' : 'Nope...'}</h1>
      <p>Abaixo o btn get event </p>
      <button onClick={sayName}>Click me</button>
    </div>
  )
}
