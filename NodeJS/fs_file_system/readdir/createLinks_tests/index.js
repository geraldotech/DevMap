
const links = ["about.html","foo.html","home.html","index.html","projects.html"]

 document.querySelector('#root').innerHTML = links.map((val) => {
   return `<a href="${val}">${val}</a>`
 }).join(' ') 