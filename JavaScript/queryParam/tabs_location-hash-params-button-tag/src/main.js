const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

function activateTab(tabId, updateHash = true) {
  tabs.forEach(tab => tab.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));

  document.querySelector(`.tab-btn[data-tab="${tabId}"]`)?.classList.add('active');
  document.getElementById(tabId)?.classList.add('active');

  // Atualiza o hash na URL sem rolar a página
  if (updateHash) {
    history.pushState(null, '', `#${tabId}`);
  }
}

// Verifica o hash na URL ao carregar a página
const currentHash = location.hash.substring(1);
if (currentHash) {
  activateTab(currentHash, false);
}

// Adiciona evento de clique nos botões
tabs.forEach(tab => {
  tab.addEventListener('click', function () {
    const tabId = this.getAttribute('data-tab');
    activateTab(tabId);
  });
});

// Atualiza a aba quando o usuário altera o hash manualmente na URL
window.addEventListener('hashchange', () => {
  const newHash = location.hash.substring(1);
  if (newHash) {
    activateTab(newHash, false);
  }
});