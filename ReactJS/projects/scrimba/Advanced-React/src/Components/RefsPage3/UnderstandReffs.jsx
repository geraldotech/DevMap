import React from 'react'

export default function Main() {
  const [on, setOn] = React.useState(false)
  const renderCount = React.useRef(0)

  //console.log(renderCount) // returns  a current.value / value definido by default

  function forceRender() {
    setOn((prevOn) => !prevOn)
  }

  function incrementRenderCount() {
    renderCount.current++
  }

  React.useEffect(() => {
    //  console.log(`Rendered`)
    renderCount.current++
  })

  return (
    <div>
      <h1>Understand Refs</h1>
      <button onClick={forceRender}>Force-me re-render w/ state change</button>
      <button onClick={incrementRenderCount}>Increment Ref Count</button>
      <h4>Render count: {renderCount.current}</h4>
    </div>
  )
}
