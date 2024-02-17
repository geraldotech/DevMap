import React from 'react'

/**
 * Mini-quiz:
 * What are the 2 parameters in React.useEffect?
 * 1. Callback function
 * 2. Array of dependencies
 *
 * Mini-challenge:
 * Update our custom hook function to accept
 * the same parameters we talked about above
 */

export default function useEffectOnUpdate(effectFunction, deps) {
  const firstRender = React.useRef(true)

  React.useEffect(() => {
    /* resolve o bug de chamar o toggled na primeira renderizacao, only call when click button */
    if (firstRender.current) {
      firstRender.current = false
    } else {
      effectFunction()
    }
  }, deps)
}
