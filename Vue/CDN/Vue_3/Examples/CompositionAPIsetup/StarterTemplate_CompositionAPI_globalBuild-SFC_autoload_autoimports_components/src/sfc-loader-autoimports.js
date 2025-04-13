const options = {
  moduleCache: {
    vue: Vue,
  },
  async getFile(url) {
    const res = await fetch(url)
    if (!res.ok) throw Object.assign(new Error(res.statusText + ' ' + url), { res })
    return {
      getContentData: (asBinary) => (asBinary ? res.arrayBuffer() : res.text()),
    }
  },
  addStyle(textContent) {
    const style = Object.assign(document.createElement('style'), {
      textContent,
    })
    const ref = document.head.getElementsByTagName('style')[0] || null
    document.head.insertBefore(style, ref)
  },
}

/*
 * @Author: Geraldo Costa
 * @since: Novembro 2023
 */

/**  imports
 * @params - path - path do component
 * @usage - const ButtonAlpha = imports('./src/components/Button.vue')
 */
const imports = (path) => {
  return Vue.defineAsyncComponent(() => loadModule(path, options))
}

/** autoimports com path pre-defenido - './src/components/:name?.vue' - IDEAL PARA SETAR O LOCAL PADRÃO DOS COMPONENTS E A IMPORTACAO É FEITA DE FORMA AUTOMATICA
 * @params - componentName - nome do component
 */
const autoimports = (componentName) => {
  return Vue.defineAsyncComponent(() => loadModule(`./src/components/${componentName}.vue`, options))
}

/**  autoload + direct inject on app.vue com a const app
 * @params - componentName - nome do component
 */
const autoload = (componentName) => {
  app.component(componentName, autoimports(componentName))
}

const { loadModule } = window['vue3-sfc-loader']
