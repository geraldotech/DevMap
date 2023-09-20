const obj = [
  { id: 1, title: 'Super Nintendo Games', published: true, pinned: true },
  { id: 2, title: 'Alimentos', published: true },
  { id: 3, title: 'Foo', published: false },
  { id: 4, title: 'Blak Friday', published: true },
]

// filter all published posts except the negative post.pinned
const busca = obj.filter((post) => post.published && !post.pinned)
console.log(busca) // [2]

// Noww find the pinned
//find if key exists in object using Object.keys && published is true

const findPinned = obj.find(
  (post) => post.published && Object.keys(post).includes('pinned')
)

console.log(findPinned)

/* only show if pinned has lenght
Object.keys turn to Array and get length
hasOwnProperty - check exists properties like: id, 
hasOwn - turn */

/*  <section class="pinned" v-show="Object.keys(pinned).length">
 <section class="pinned" v-show="pinned.hasOwnProperty('id')">  */
