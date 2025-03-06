const tabs = document.querySelectorAll('.tab')
const contents = document.querySelectorAll('.tab-content')

function activateTab(tabId) {
  // remove de todos
  tabs.forEach((tab) => tab.classList.remove('active'))
  contents.forEach((content) => content.classList.remove('active'))

  document.querySelector(`.tab[href="#${tabId}"]`)?.classList.add('active')
  document.getElementById(tabId)?.classList.add('active')
}

// Verifica o hash na URL ao carregar a página
const currentHash = location.hash.substring(1) // Remove o '#'
if (currentHash) {
  activateTab(currentHash)
}

// Adiciona evento de clique nas abas
tabs.forEach((tab) => {
  tab.addEventListener('click', function () {
    const tabId = this.getAttribute('data-tab')
    activateTab(tabId)
  })
})

// Atualiza a aba quando o usuário altera o hash manualmente na URL
window.addEventListener('hashchange', () => {
  const newHash = location.hash.substring(1)
  if (newHash) {
    activateTab(newHash)
  }
})
