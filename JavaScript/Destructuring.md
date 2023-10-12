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

//📌swap the values of array
const edibles = ['food', 'fruits']

// Mutate Arrays with Destructuring
//[edibles[0], edibles[1]] = [edibles[1], edibles[0]];

//  doesn't mutate the original array
let [p1, p2] = (edibles[(p2, p1)] = [p1, p2])
console.log(p1, p2)

//alternar para ver a Mutate
console.log(edibles)

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

//atribuindo uma const a um determinado obj
const qualquernome = cursos.front
console.log(qualquernome) // VueJS

//https://www.freecodecamp.org/news/destructuring-patterns-javascript-arrays-and-objects/

const arr = [{ id: 1, title: 'loremipsum', slug: 'lorem-ip' }]

const { id, title, slug } = arr[0]

console.log(id, title, slug)
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

// tbm é possivel pegar apenas alguns itens
const onlySomeItens = blog.map(({id, slug}) => {
  console.log(id, slug)
})

// same que - todos os object = const que tem os obj, nesse data o callback do map
const onlySomeItens = blog.map((data) => {
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
