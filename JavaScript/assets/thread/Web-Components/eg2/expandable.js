class ExpandableList extends HTMLUListElement {
  constructor() {
    super();
    this.div = document.createElement("div");
    this.div.innerHTML = `<h1>Title</h1`;
    this.appendChild(this.div);
    /*  this.template = document.createElement("template");
    this.template.innerText = `<h1>title</h1>`;
    this.appendChild(this.template); */
  }
}
customElements.define("expandable-list", ExpandableList, {
  extends: "ul",
});
