const template = `
<div>
    <h2>Login</h2>
</div>`

const Login = (props) => {
  return eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
}

export default Login
