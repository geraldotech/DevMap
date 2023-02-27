Simulando um blog posts using #find, #filter,
*/
const blog = [
  { id: 1, published: true, article: "my article one", slug: "one" },
  { id: 2, published: false, article: "my article two", slug: "two" },
  { id: 3, published: true, article: "my article three", slug: "three" },
];

//👉 1 filter publicados
const publicados = blog.filter((val) => val.published);
console.log(publicados);
//render in HTML using #map
post.innerHTML = publicados
  .map((val) => {
    return `<p>${val.article}</p>`;
  })
  .join("");
//👉 1.1 find slug in publicados
const getBlogPost = publicados.find((val) => val.slug == "three");
console.log(getBlogPost);

//👉2 find slug && check published is true
const OneFind = blog.find((val) => val.slug == "one" && val.published);
console.warn(OneFind);
//forEach do not work because find here return a {object}
//Remember use if to checkout if post exist, otherwise custom a error
if (OneFind) {
  console.log(OneFind.slug);
}
document.getElementById("post2").innerHTML = OneFind
  ? OneFind.slug
  : `404 post NotFound!`;
