export default class FooterItem extends HTMLElement {
  constructor() {
    super()

    const template = document.createElement('template')
    const style = document.createElement('style')
    const shadow = this.attachShadow({ mode: 'open' })

    style.innerHTML = `
    footer{
        color: red;
        text-align: center;
    }
    `
    template.innerHTML = `
    <footer>
      <p>copyright 2024xx</p>
    </footer>
      `

    shadow.append(template.content, style)
  }
}
customElements.define('footer-i', FooterItem)
