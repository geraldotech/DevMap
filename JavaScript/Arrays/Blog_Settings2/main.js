const blog = [
  { id: 1, category: 'zeta', title: 'Post three' },
  { id: 2, category: 'android', title: 'Post one' },
  { id: 3, category: 'download', title: 'Post two' },
  { id: 4, category: 'android', title: 'Post three' },
  { id: 5, title: 'Post three' },
  { id: 6, category: 'monday', title: 'Post Monday' },
]

//👉Render all posts in html
/* blog.forEach(
  (val) => (blogpost.innerHTML += "<br>" + Object.entries(val).join(" "))
); */

//👉render only values or keys
/* blog.forEach(
  (val) => (blogpost.innerHTML += "<br>" + Object.values(val).join(" "))
); */

/* //👉`For in with empty string`
let html = "";
for (const key in blog) {
  html += ` ID: ${blog[key].id} <br> Title: ${blog[key].title}  <br> Category: ${blog[key].category} <hr>`;
}
blogpost.innerHTML = html; */

//👉`For in with empty string no variavel - quase um v-for`
/* for (const key in blog) {
  blogpost.innerHTML += ` ID: ${blog[key].id} <br> Title: ${blog[key].title}  <br> Category: ${blog[key].category} <hr>`;
} */

//👉`for of` by geraldoX
for (const x of blog) {
  blogpost.innerHTML += `ID: ${x.id} Title: ${x.title} Category: ${x.category} <hr>`
}

console.log('all posts', blog)

//📌1 Get only Categories in this Array
//📌👉Using filter
const cater = blog.filter((val) => val.category)
console.log('categories', cater)

cater.forEach((val) => {
  console.log('forEach', val.category)
})

//📌👉Using map
//🧐get categotries map seria melhor que filter....

const novo = blog.map((val) => val.category)
console.log('map cat', novo)
mapcat.innerHTML = novo

//📌2 conter duplicate values

//📌👉Using forEach
const conter = {}
novo.forEach((ele) => {
  conter[ele] = (conter[ele] || 0) + 1
})

console.log('conterFor', conter)

//📌👉Using Using Reduce

const contador = novo.reduce(
  (cont, item) => ((cont[item] = cont[item] + 1 || 1), cont),
  {}
)
console.log('cont reduce', contador)

//📌3 Remove duplicados
const duplicado = novo.filter(
  (val, ind) => novo.indexOf(val) == ind && val != undefined && val != ''
)
console.log(duplicado.sort())

// other example
const blog3 = [
  {
    id: 1,
    published: true,
    article: 'my article one',
    slug: 'one',
    author: 'geraldox',
  },
  {
    id: 2,
    published: false,
    article: 'my article two',
    slug: 'two',
    author: 'geraldox',
  },
  {
    id: 3,
    published: true,
    article: 'my article three',
    slug: 'three',
    author: 'geraldox',
    opt: '',
  },
  {
    id: 5,
    published: true,
    article: 'my article four',
    slug: 'four',
    author: 'geraldox',
    op: '',
  },
]

for (let i = 0; i < blog3.length; i++) {
  //quick verification who in article includes
  const titlesearch = blog[i].article.includes('four') //3x false, 1x true
  if (titlesearch) {
    console.log('existe no index:', i, 'blog id:', blog[i].id, blog[i].author)
    // ou use  entries to get all
    console.log(Object.entries(blog[i]))
  }
}

// for of

console.log(blog3[0])

for (const key of blog3) {
  const Inclui = Object.keys(key).includes('op') // 3x false, 1x true
  // console.log(Object.keys(key).article.includes('op')) // 3x false, 1x true
  console.log(Inclui)
}

const acha = blog3.find((val) => val.article.includes(''))
console.log(acha)
/* { id: 1,
  published: true,
  article: 'my article one',
  slug: 'one',
  author: 'geraldox' } */
