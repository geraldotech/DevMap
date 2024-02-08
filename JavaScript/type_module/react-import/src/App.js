import Header from './components/header.js'
import footerItem from './components/footer.js'

export default function App() {
  class App extends HTMLElement {
    constructor() {
      super()
      const shadow = this.attachShadow({ mode: 'open' })
      const template = document.createElement('template')
      const style = document.createElement('style')

      style.innerHTML = `
      p{
          color: dodgerblue;
          text-align: justify;
      }
      `
      template.innerHTML = `
      ${Header.Header}
      <main>
      <h1>App.js</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus labore ab a eligendi repudiandae enim possimus libero nobis? Repellendus placeat doloribus minus dignissimos explicabo voluptatum, aperiam eius consectetur nesciunt libero!</p>
      </main>
      <footer-i></footer-i/>      
      <footer-i></footer-i/>
        `
      shadow.append(template.content, style)
    }
  }
  customElements.define('app-item', App)
  return '<app-item></app-item>'
}
