/* nomes de variaveis
availableWeekDays

compareYearAndMonth

blockedDatesResponse

usersStartingWithLetterD

// parametro da fn
users => user

*/

const users = ['Geraldo', 'Felipe', 'Isabella']
const usersStartingWithLetterD = users.filter((user) => {
  return user.startsWith('G')
})

/** CLEAN CODE - nao tem nada ver com tamanho da variavel
 * CLEAN CODE NÃO TEM NADA A VER COM CODIGO PEQUENO E MAIS MAIS LEGÍVEL
 * EVITE NOMES GENERICOS (data, response, list, args, params) falam sobre a estrutura de dados, mais nao sobre o dados em si
 */

function getUsers() {
  const users = usersStartingWithLetterD()

  return users
}

// BOOLEANOS
// sempre como se fosse uma pergunta / semântico
// is, does, has
// elegibilidade diferente

const isUserMajority = true
const isDisabled = true
const userHasGroup = false
const isLoading = true

// especifico ainda

// if loading ❌
// if user profile loading ✅
const isUserProfileLoading = true

if (isDisabled) {
}

// isFormSubmitting

/* CODIGO PRECISA SER EM INGLES, DO QUE EM PORTUGUES */

// loadPessoa ❌
// código que nao está em ingles, não é um código acessível
// misturar ingles e ptbr deixa o código menos limpo

/**
 *
 * EVITAR NEGAÇÕES - PQ FAZ UM SWITH NA NOVA CABECA
 */
const isUserYoungerThan18 = true
const doesUserLivesOutSideBrazil = true

// CONDICIONAIS SEM NEGACAO - SEMPRE QUE POSSIVEL
if (isUserYoungerThan18 && doesUserLivesOutSideBrazil) {
  console.log(`yes`)
}

/* early return vs else */
console.log(isUserOlderThan18(18))

const user = {
  age: 18,
}
function isUserOlderThan18(user) {
  if (!user) {
    return { error: true }
  }
  return user.age >= 18
}

// [Regras em condicionais] - Evite condicionais aninhadas exe: if dentro de ifs


// Parametros e desustruturação

/* sempre receber e enviar parametros nomeados ao inves de multiplos */

const rest23 = createUserRoute({
  body: { name: 'geraldo', email: 'gee@a.com', password: 'pass' },
  params: { id: 1 },
})

console.log(rest23)


function createUserRoute({ body, params }) {
  // validações
  const { name, email, password } = body
  const { id } = params

  return {
    body, params
  }
}


function createUserController(data){
  const {name, email, password} = data
  usersRepository.create(name, email, password)
}

const usersRepository = {
  create(data){
  }
}

const server = {
  ok: true,
  message: 'server is online',
}

console.log(checkserver({ ok: true, message: 'is online' }))

function checkserver(obj) {
  if (obj.ok) {
    return obj.message
  }
  return 'not noline'
}

// comentarios vs documentação
// comentario nao é documentação!



// Syntatic Sugars
const numberInString = '123434'

// const number = +numberInString
//const number = parseInt(numberInString)
const number = Number(numberInString)

console.log(number)

// boolean
//const isNumberNotNull = !!number
const isNumberNotNull = Boolean(number)
console.log(isNumberNotNull)

// string
//const numberAsString = `${number}`
const numberAsString = String(number)
console.log(numberInString)
















