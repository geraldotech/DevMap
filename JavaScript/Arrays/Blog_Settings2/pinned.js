const posts = [
  { id: 1, title: 'Super Nintendo Games', published: true, pinned: true },
  { id: 2, title: 'Alimentos', published: true },
  { id: 3, title: 'Foo', published: true },
  { id: 4, title: 'Black Friday', published: true },
]

// get published exceto pinned: true
const published = posts.filter((post) => post.published && !post.pinned)
console.log(published)

// get published && pinned: true
const publishedPinx = posts.filter((post) => post.published && post.pinned)

console.log(publishedPinx)

// But if pinned has values: true/false ? e:g pinned: ""
// get published && pinned includes
const findPinnedObj = posts.filter(
  (post) => post.published && Object.keys(post).includes('pinned')
)

console.log(findPinnedObj)

const findprops = posts.filter((post) => Object.hasOwn(post, 'pinned'))
console.log(findprops)

const findpropown = posts.filter((post) => post.hasOwnProperty('pinned'))
console.log(findpropown)
console.log(Object.keys(findpropown).length)

/* 
only show if pinned has lenght
Object.keys turn to Array and get length
hasOwnProperty - check exists properties like: id, 
hasOwn - turn 

*/

/*  VueJS
<section class="pinned" v-show="Object.keys(pinned).length">
<section class="pinned" v-show="pinned.hasOwnProperty('id')">  
 
 */
