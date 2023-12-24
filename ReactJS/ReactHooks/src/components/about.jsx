import { useState } from 'react'
import UseEffectExample from './useEffectexample'

const about = () => {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <>
      <h1>About Page</h1>
      <button onClick={() => setIsVisible(false)}>
        click para esconder o component
      </button>
      <button onClick={() => setIsVisible(!isVisible)}>
        click para toggle
      </button>
      {isVisible && <UseEffectExample />}
    </>
  )
}

export default about
