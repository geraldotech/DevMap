import * as lib from './lib/list.js'
import App from './App.js'

document.getElementById('root').innerHTML = `
${App()}
${lib.somar(5, 2)}
`

console.log()
console.log(lib.subtrair(10, 9))
console.log(lib.numeros)
console.log(lib.somar(lib.numeros[0], lib.numeros[4]))
