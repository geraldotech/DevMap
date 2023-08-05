class BlogPost extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(this.connectedCallback());
  }
  connectedCallback() {
    this.shadowRoot.append(this.test(), this.article());
  }
  test() {
    console.log(`styles`);
    const styles = document.createElement("style");
    styles.textContent = `  
    div{
        color: red;
    }
    `;
    return styles;
  }
  article() {
    const div = document.createElement("div");
    div.textContent = `Hello`;
    return div;
  }
}

customElements.define("mycomp-1", BlogPost);
