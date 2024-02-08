import { bebidas, limpeza, dados } from './estoque.js'

console.log(bebidas)
console.log(limpeza)
console.log(dados.empresa)
console.log(dados.cnpj)

/* Custom import */
import * as meumercado from './estoque.js'

/* Custom import */
empresa.innerText = meumercado.dados.empresa
/* General import */
cnpj.innerText = dados.cnpj
since.innerText = dados.since

const company = document.querySelector('#Company')
for (let i in meumercado.dados) {
  //company.innerHTML += `<ul>${i} = ${dados[i]}</ul>`
  let li = document.createElement('li')
  li.innerHTML += i + ': ' + meumercado.dados[i]
  company.append(li)
}
