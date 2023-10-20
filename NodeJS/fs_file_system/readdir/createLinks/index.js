
const links = ["about.html","home.html","index.html","projects.html"]
console.log(links.filter(v => v.startsWith('h')))

 document.querySelector('#root').innerHTML = links.map((val) => {
   return `<a href="${val}">${val}</a>`
 }).join(' ') 