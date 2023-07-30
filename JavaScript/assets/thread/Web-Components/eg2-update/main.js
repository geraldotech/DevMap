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
    <h1>Hello from Discovery: <slot></slot></h1>
    
    <ul>
   <li> <slot name="notebook"></slot></li>

    </ul>
    `;
  }
}
customElements.define("discovery-item", Discovery);
//Root
class Discovery2 extends HTMLElement {
  constructor() {
    super();

    this._root = this.attachShadow({ mode: "closed" });
    this._root.innerHTML = `
    <style>
        h1{
            color: coral;
        }
    </style>
    <h1>Hello from Discovery 2: closed</h1>
   
    <h1>
    <slot></slot>
    </h1>


   
    `;
  }
}
customElements.define("discovery-item2", Discovery2);

const discovery = document.querySelector("discovery-item");
console.warn(discovery.shadowRoot); //

//modificando o slot: Testing Slot to open mode
/* discovery.innerText = `open mode`;

const discovery2 = document.querySelector("discovery-item2");
console.warn(discovery2.shadowRoot); // null
console.warn(discovery2._root); // null
discovery2.innerText = "aberto";
 */
