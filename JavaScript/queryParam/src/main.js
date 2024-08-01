/* === Imports === */

/* === UI === */

/* == UI - Elements == */

/* === State  === */

/* === Main Code === */
/* === Functions === */

const root = document.querySelector('#root')

const queryString = window.location.search
console.log(queryString)

const params = new URLSearchParams(queryString)
const page = params.get('page') // Get value of 'page' query parameter
const size = params.get('size')

console.warn(`params`, params)
console.log(page, size)


const queryString2 = '?page=1&size=10'
const mparams = new URLSearchParams(queryString)

const mpage = params.get('page')
const msize = params.get('size')

console.log(`Page: ${mpage}, Size: ${msize}`)

function setNewURLBrowser() {
  window.history.pushState({}, '', decodeURIComponent(`?page=1&size=1000`))
}

// Function to update query parameter in URL
function updateQueryParam(key, value) {
  var url = new URL(window.location.href)
  var params = new URLSearchParams(url.search)
  params.set(key, value)
  window.history.pushState({}, '', decodeURIComponent(`${url.pathname}?${params}`))
}

function cleanQueryParams() {
  //var url = new URL(window.location.href)
  //var params = new URLSearchParams(url.search)
 // params.set(key, value)
 window.history.pushState({}, '', window.location.pathname);

}
// constroi a paginacao by query params
