class ExpandableList extends HTMLUListElement {
  constructor() {
    super();
    this.div = document.createElement("div");
    this.div.innerHTML = `    
    <style>
    div{
        color: purple;
    }
    </style>
    <h1>Expandable List</h1>
    `;
    this.appendChild(this.div);
    /*  this.template = document.createElement("template");
    this.template.innerText = `<h1>title</h1>`;
    this.appendChild(this.template); */
  }
}
customElements.define("expandable-list", ExpandableList, {
  extends: "ul",
});
