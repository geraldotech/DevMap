const template = `
<div>
    <h2 className="bg-blue-400 text-4xl mt-5">Home Component</h2>
</div>`

const Home = (props) => {
  return eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
}

export default Home

/* https://stackoverflow.com/questions/54018182/how-to-make-script-type-both-text-babel-and-module */
