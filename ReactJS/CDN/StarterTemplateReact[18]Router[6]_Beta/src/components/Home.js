const template = `
<div className="bg-blue-400 mt-5 p-2">
    <h2 className="text-4xl">Home</h2>
    <Linkin name="Musics is good Home.js" />
</div>`

const Home = (props) => {
  return eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
}

export default Home

/* https://stackoverflow.com/questions/54018182/how-to-make-script-type-both-text-babel-and-module */
