const url = 'https://api.github.com/users/geraldotech/repos'

fetch(url).then((req) => req.json()).then((data) => {
  console.log(data)
  Render(data)
})
 

function Render(arr){
   arr.forEach((item) => {
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.href = item.html_url
    a.setAttribute('target', '_blank')
    a.textContent = item.name
    li.append(a)
    ul.append(li)
    document.body.append(ul)
  }) 
}