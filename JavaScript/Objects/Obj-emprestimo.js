//emprestimo obj propriedades
const base = {
    nome:"",
    city:"Rio",
    age: 29,
}
const person = {...base, nome:"Felipe"};

const person2 = {...base, nome:"Geraldo"}

console.log(person)
console.log(person2)

