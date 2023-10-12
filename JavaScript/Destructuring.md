# 🔰 Destructuring

```js
function MouseMove(event) {
  /*  não faça assim
      const clientX = event.clientX;
      const clientY = event.clientY; 
      const x = event.clientX;
      const y = event.clientY;
*/
  // fazer assim - o nome da var dele ser igual
  const { clientX, clientY } = event
  console.log(clientX, clientY)
}

// mais resumindo ainda - destructiring directo no argumento
function MouseMove2({ clientX, clientY }) {
  // cuidado para não tirar o valor real clientX = "oi"
  console.log(clientX, clientY)
}

document.documentElement.addEventListener('mousemove', MouseMove)

//🟢 Arrays

const frutas = ['Banana', 'Uva']
// opt 1 item
const fruta1 = frutas[0]
console.log(fruta1)

// opt2 - better - varios itens
const [A, B] = frutas
console.log(A, B) // Banana, Uva

const lista = ['Geraldo', 'Filho']
const [a, b] = lista
console.log(a)
console.log(b)

//📌 swap the values of array
const meuarr = [1, 2]

// Mutate Arrays with Destructuring
;[meuarr[0], meuarr[1]] = [meuarr[1], meuarr[0]]
console.log(meuarr) // 2, 1

// doesn't mutate the original array

let st = ([meuarr[0], meuarr[1]] = [meuarr[1], meuarr[0]])
console.log(st) // 1 2

//🟢 Objects
const cursos = {
  front: 'VueJs',
  backend: 'Node',
  database: 'MongoDB',
}

// habitualmente para exibir esses objetos
console.log(cursos.backend) // e etc...

// contudo podemos atribuir um "apelido" para cada value
const { front: curso1, backend: curso2, database: curso3 } = cursos
console.log(curso3) // MongoDB

// exact name
const { front, backend, database } = cursos
console.log(front, backend, database) // VueJs Node MongoDB

// atribuindo uma const a um determinado obj
const qualquernome = cursos.front
console.log(qualquernome) // VueJS

// Destructuring a Array
//https://www.freecodecamp.org/news/destructuring-patterns-javascript-arrays-and-objects/

const arr = [{ id: 1, title: 'loremipsum', slug: 'lorem-ip' }]

const { id, title, slug } = arr[0]
console.log(id, title, slug)

// obj assign
const obj = Object.assign({}, ...arr)
console.log(obj)
```

# Map

```js
// instead
blog.map((post) => {
  return `<li>${post.id} - ${post.slug} - ${post.author}</li>`
*/
// do

 blog.map(({id, slug, author}) => {
  return `<li>${id} - ${slug} - ${author}</li>`
}).join(' ')

// get only some obj:
blog.map(({id, slug}) => {
  console.log(id, slug)
})

// same que - todos os object = const que tem os obj, nesse data o callback do map
blog.map((data) => {
  const {id, slug} = data
 console.log(id)
 console.log(slug)

})


```

# Filter

```js
blog.filter(({ id, slug, author }) => {
  return id == 1 && author == 'geraldox'
})
```
