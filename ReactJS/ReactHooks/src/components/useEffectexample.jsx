import React, { useEffect, useState } from 'react'

const useEffectexample = () => {
  const [value, setValue] = useState('initial value')
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    console.log('hello from useEffect')

    // return a function com array de dependencias vazios para visualizar a destruição do component quando for desmontado ir na pagina /about deste projeto
    return () => {
      console.log('hello from destruction')
    }
  }, []) // array de dependencias para executar apenas uma vez deixar apenas: []

  return (
    <div>
      <h2>useEffectexample</h2>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </div>
  )
}

export default useEffectexample
