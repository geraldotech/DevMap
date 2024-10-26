const api = 'https://api.github.com/users/geraldotech'

axios
  .get(api)
  .then(function (response) {
    // manipula o sucesso da requisição
    console.log(response)
  })
  .catch(function (error) {
    // manipula erros da requisição
    console.error(error)
  })
  .finally(function () {
    // sempre será executado
  })

// Quer usar async/await? Adicione o prefixo `async` na sua função/método
async function getUser() {
  try {
    const response = await axios.get(api)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

getUser()
