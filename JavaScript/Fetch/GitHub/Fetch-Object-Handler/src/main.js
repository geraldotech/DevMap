const template = document.querySelector('template')
const root = document.querySelector('#root')
const root2 = document.querySelector('#root2')
const Git = template.content.cloneNode(true)
const load = document.querySelector('.load')
const api = 'https://api.github.com/users/geraldotech'

async function handlerData(url) {
  
  try { 
    // set a delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    const req = await fetch(url)
    const res = await req.json()
    return res
  } catch (err) {
    console.log(err)
    return null
  } finally{
    load.classList.add('hide')
    
  }
}


handlerData(api).then((data) => {
  console.log(data)
  Git.querySelector('h3').textContent = data.name
  Git.querySelector('#login').textContent = data.login
  Git.querySelector('#bio').textContent = data.bio
  Git.querySelector('#blog').textContent = data.blog
  Git.querySelector('#location').textContent = data.location
  root.appendChild(Git)
})


handlerData(api).then((data) => {

const h3 = document.createElement('h3')
// single 
h3.innerHTML = 'Name: '+ data['name']
root2.appendChild(h3)



/*
 destructure the data object directly in a loop to create <li> elements for each property, you can't do it directly because destructuring doesn't work within a loop like that. However, you can achieve something similar by using an array of property names and then looping through that array to create the <li> elements. Here's how you can do it:

*/
//In this approach, we define an array called properties containing the names of the properties we want to iterate over. 

 const properties = ['bio', 'location', 'login']
  properties.forEach(property => {
    const li = document.createElement('li')

    li.textContent = `${property}: ${data[property]}`
    root2.appendChild(li)
  }) 

  // Works but how can I use a loop?
const  {bio, location, login}  = data

console.log(bio)

// Better for individual cases



}) 


