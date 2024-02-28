

function getDog(){
  fetch('https://dog.ceo/api/breeds/image/random').then(req => req.json()).then(data => {
  //console.log(data.message)
    document.querySelector('figure').innerHTML = `<img src="${data.message}" alt='dog' />`
})
}

setInterval(() => {
  //getDog()
}, 2000) 


