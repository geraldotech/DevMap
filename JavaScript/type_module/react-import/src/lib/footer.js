/* export default function Footer() {
  class TodoItem extends HTMLElement {
    constructor() {
      super()
      const template = document.createElement('template')
      template.innerHTML = `
      <style>
      p {
          color: orange;
      }
      </style>
      <p>Using shadowDOM and templates</p>
      `
      const shadow = this.attachShadow({ mode: 'open' })
      shadow.append(template.content)
    }
  }
  customElements.define('todo-item', TodoItem)
  return `<todo-item></todo-item`
} */

class TodoItem extends HTMLElement {
  constructor() {
    super()
    const template = document.createElement('template')
    template.innerHTML = `
      <style>
      p {
          color: orange;
          font-weight: bold;
      }
      </style>
      <p>copyright 2024</p>
      `
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.append(template.content)
  }
}
customElements.define('todo-item', TodoItem)
export default `<todo-item>`
