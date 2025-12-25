const template = `

<div>
<h1 className="bg-blue-400 text-4xl my-5">About Page</h1>
<h2>{props.msg}</h2>
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={changeState}>changeState</button>
<h2>{os}</h2>

<Natal msg="Natal" /> 
</div>`

export default template