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
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content);
  }
}
customElements.define("todo-item", TodoItem);
