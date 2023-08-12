/* Simulando um blog posts using #find, #filter, */

const blog = [
  {
    id: 1,
    published: true,
    article: "my article one",
    slug: "one",
    author: "geraldox",
  },
  {
    id: 2,
    published: false,
    article: "my article two",
    slug: "two",
    author: "geraldox",
  },
  {
    id: 3,
    published: true,
    article: "my article three",
    slug: "three",
    author: "geraldox",
  },
  {
    id: 4,
    published: true,
    article: "my article four",
    slug: "four",
    author: "geraldox",
  },
];

//👉 Changing author all objects

for (let i = 0; i < blog.length; i++) {
  blog[i].author = "gmap";
}

//👉 1 filter publicados
const publicados = blog.filter((val) => val.published);
console.log(publicados);
//render in HTML using #map
post.innerHTML = publicados
  .map((val) => {
    return `
  
    <p>ID: ${val.id} - Article: ${val.article} - Author: ${val.author}</p>
    `;
  })
  .join("");

//👉 1.1 find slug in publicados
const getBlogPost = publicados.find((val) => val.slug == "onex");
console.log(`getBlogPost`, getBlogPost);

//👉2 find slug && check published is true
const OneFind = blog.find((val) => val.slug == "one" && val.published);
console.warn(`OneFind`, OneFind);

//forEach do not work because find here return a {object}
//Remember use if to checkout if post exist, otherwise custom a error

//se essa const for true / else ...
if (OneFind) {
  console.log(`OneFind: `, OneFind.slug);
} else {
  console.log(`Not Found`);
}

document.getElementById("post2").innerHTML = OneFind
  ? OneFind.article
  : `404 post NotFound!`;

//👉 3 - Definindo uma function - Better Code Reuse of coruse!

function EncontraPost(myslug) {
  //const rece true ou false
  const EncontrA = blog.find((val) => val.slug == myslug && val.published);
  //se true vai return const.article or custom message
  return EncontrA ? EncontrA.article : "Not Found";
}

console.log(EncontraPost("onex"));
