/* import Home from './Home.js'
import Login from './Login.js'
 */
const template = `

`

const Navbar = (props) => {
  return eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
}

export default Navbar
