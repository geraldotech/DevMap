document.querySelector('h1').onclick = gerarId

let arr = []

function gerarId(){
  let uuid = self.crypto.randomUUID()
  alert(uuid)
  arr.push(uuid)
  localStorage.setItem('arr', arr)
}

function loadDados() {
  let dados = localStorage.getItem('arr')
  console.log(arr)
  console.warn(dados)
}


console.log(crypto.randomUUID())