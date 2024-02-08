import * as lib from './lib/list.js'
import Template from './lib/template.js'

console.log(lib.somar(5, 2))

console.log(lib.subtrair(10, 9))

console.log(lib.numeros)

console.log(lib.somar(lib.numeros[0], lib.numeros[4]))


document.getElementById('root').innerHTML += `${Template()}`
