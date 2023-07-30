class TodoItem extends HTMLElement {
  constructor() {
    const template = document.createElement("template");
    template.innerHTML = ` 
    <style> 
    p{ 
        color: orange;    
    } 
    </style>
    <p>Using shadowDOM and templates</p>  
    `;
    super();

    this.addEventListener("click", function () {
      console.log(`click`, this);
    });
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content);
  }
}
customElements.define("todo-item", TodoItem);

//Root
class Discovery extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
        h1{
            color: dodgerblue;
        }
    </style>
    <h1>Hello from Discovery</h1>`;
  }
}
customElements.define("discovery-item", Discovery);
