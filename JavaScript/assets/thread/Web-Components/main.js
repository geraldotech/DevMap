class BlogPost extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(this.connectedCallback());
  }
  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
   <style> 
       h1{
           color: dodgerblue;
       }
   </style>
   <h1>Hello using connectedCallback()</h1>
   `;
    return template.content;
  }
}

customElements.define("mycomp-1", BlogPost);
