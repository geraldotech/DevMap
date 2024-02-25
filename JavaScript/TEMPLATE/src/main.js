/* == UI - Elements == */

const template = document.querySelector('template')
const renderPosts = document.getElementById('renderPosts')

// clone the template.content
const newTemplate = template.content.cloneNode(true)



/* === Main Code === */

const imageElement = newTemplate.querySelector('img')
imageElement.onload = function() {
  console.log(`loaded img`)
  renderPosts.appendChild(newTemplate); // Append the template after the image is loaded
};

imageElement.src = 'http://placekitten.com/g/400/300'

// Modify other elements
newTemplate.querySelector('.header').textContent = 'New Header'
newTemplate.querySelector('p').textContent = 'lorem para'

const p = document.createElement('p')
p.textContent = 'Hello'

newTemplate.appendChild(p)
newTemplate.appendChild(imageElement)
renderPosts.appendChild(newTemplate)
