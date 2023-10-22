
const links = ["folder1","folder2"]

 document.querySelector('#root').innerHTML = links.map((val) => {
   return `<a href="${val}">${val}</a>`
 }).join(' ') 