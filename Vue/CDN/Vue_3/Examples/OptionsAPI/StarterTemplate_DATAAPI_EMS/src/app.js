import { createApp, version } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.4.21/vue.esm-browser.min.js'

const app = createApp({
  data() {
    return {
      greeting: 'Bem Vindo',
      faculdade: {
        status: `Active`,
        curso: `SI - Sistemas de Informacao`,
      },
    }
  },
  /* template: `<p>Curso: {{faculdade.curso}}</p>
<p>Status: {{faculdade.status}}</p>`, */
}).mount('#root')

console.log(version)
