/* === Imports === */

/* === UI === */

/* == UI - Elements == */

/* === State  === */

/* === Main Code === */
/* === Functions === */


console.group('repeticao');
for(let i = 0; i <10; i++){
  console.log(i)


}
console.groupEnd();

console.group('Lista Numbers');
console.time("Tempo carregamento")

console.log([1,2,3,4,]) 




console.timeEnd("Tempo carregamento")
console.groupEnd()



// count
// https://developer.mozilla.org/en-US/docs/Web/API/console/count_static
console.count()
sayHello('Geraldo')
sayHello('Geraldo')
console.count()


const api = [
  {
    name: 'Geraldo',
    age: 31,
    children: true
  },
  {
    name: 'Felipe',
    age: 30,
    children: true
  }
]

console.log(api)
console.dir(api)
console.table(api)




function sayHello(name){
  console.log('Hello' + name)
  console.trace('Ponto rastreamento depuração')
}
