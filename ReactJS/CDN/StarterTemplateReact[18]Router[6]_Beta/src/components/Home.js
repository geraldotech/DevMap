const template = `
<div className="mt-5 p-2">
<h2 className="bg-blue-400 text-4xl">Home</h2>

<section  className="bg-gray-900 text-white">
<h1 className="text-red-500 font-bold text-4xl p-3">handlingEvents: Events -  useState -  Props</h1>
    <HandleEvents />
</section>
<Linkin name="Musics is good Home.js" />
</div>`

const Home = (props) => {
  return eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
}

export default Home

/* https://stackoverflow.com/questions/54018182/how-to-make-script-type-both-text-babel-and-module */
