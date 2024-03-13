const template = `
<div className="">
    <h2>Components</h2>
    <h2>Feliz {props.msg}</h2>
</div>`

const Natal = (props) => {
  return eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
}

export default Natal

/* https://stackoverflow.com/questions/54018182/how-to-make-script-type-both-text-babel-and-module */
