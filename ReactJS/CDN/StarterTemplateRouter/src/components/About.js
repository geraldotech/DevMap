import Natal from './Natal.js'

const template = `
<div>
<h2>About Page</h2>
<h2>{props.msg}</h2>
<button onClick={changeState}>changeState</button>
<h2>{os}</h2>

<Natal msg="Natal" /> 
</div>`

const { useState } = React
const { useEffect } = React

const About = (props) => {
  const [os, setOs] = useState('Estado')

  useEffect(() => {
    return changeState()
  }, [])

  function changeState() {
    setOs((prevOs) => prevOs + 'Atual')
  }

  return eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
}

export default About
