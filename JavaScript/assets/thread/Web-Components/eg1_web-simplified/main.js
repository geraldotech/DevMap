const template = document.createElement("template");

template.innerHTML = `
<style>
label{
  color: red;
  display: block;
  padding: 10px 0;
}
.des{
  color: green;
}

</style>
<label>
<input type="checkbox" />
<slot></slot>
<span class="des">
<slot name="descript"></slot>
</span>
</label>
`;

class TodoItem extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
    /*  this.title = shadow.querySelector("[data-title]");
    this.title.innerText = this.innerText; */
  }
}
customElements.define("todo-item", TodoItem);
