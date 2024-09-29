import { bebidas, limpeza } from './estoque.js'
import info from './company.js'
import * as pessoa from './estoque.js'

console.log(info)
console.log(bebidas)
console.log(limpeza)
console.log(pessoa.responsavel.nome)

const estoque = document.querySelector('#estoque')
estoque.innerHTML += `
<li>${bebidas}</li>
<li>${limpeza}</li>
`

/* Custom import */
const estoqueDados = document.getElementById('estoqueDados')
for (let person in pessoa.responsavel) {
  estoqueDados.innerHTML += `<li>${person} - ${pessoa.responsavel[person]}</li>`
}

/* NA DOM CADA OBJECT TEM UM ID */
/* Named exports */
empresa.innerText = info.Empresa
/* General import */
cnpj.innerText = info.Cnpj
since.innerText = info.Since

/* NA DOM APENAS UMA UL que recebera os dados  */
const company = document.querySelector('#Company')
for (let i in info) {
  //company.innerHTML += `<ul>${i} = ${dados[i]}</ul>`
  let li = document.createElement('li')
  li.innerHTML += i + ': ' + info[i]
  company.append(li)
}

// /* LI com id */
empresax.innerText = 'Empresa:' + info.Empresa


