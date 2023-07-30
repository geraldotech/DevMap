<h1 align="center">Web Components</h1>

### Basic Web Component

```js
class TodoItem extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "Hi, I am custom";
  }
}
//nome precisa ser name-item
customElements.define("todo-item", TodoItem);
```

- on html call: `<todo-item></todo-item>`

- Get custom text: `<todo-item>Hello</todo-item>`

```js
class TodoItem extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<h3>${this.innerText}</h3>`;
  }
}
customElements.define("todo-item", TodoItem);
```

### ShadowDOM

- Using `const`:

```js
class TodoItem extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = ` <style> p{ color: orange; } </style> <p>shadow</p>`;
  }
}
customElements.define("todo-item", TodoItem);
```

- Using `this`: precisa chamar `attachShadow` and `shadowRoot`:

```js
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
    <h1>Hello from Discovery</h1>
    `;
  }
}
customElements.define("discovery-item", Discovery);
```

- Using `templates.content`:

```js
class TodoItem extends HTMLElement {
  constructor() {
    //create a template
    const template = document.createElement("template");
    template.innerHTML = ` <style> p{ color: orange; } </style> <p>shadow</p>`;

    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content);
  }
}
customElements.define("todo-item", TodoItem);
```

- this.addEvent...

```js
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
    console.log(this); //ref a TodoItem
    this.onclick = function () {
      console.log(`click`);
    };

    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content); //.cloneNode(true)
  }
}
customElements.define("todo-item", TodoItem);
```

# Methods:

```js
class StartRater extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    //adiciona os styles and o conteudo
    shadow.append(this.styles(), this.conteudo());
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
        h1{
            color: coral;
        }
    `;
    return style;
  }
  conteudo() {
    //mode 1 direct
    //this.shadowRoot.innerHTML = `<h1>Interno</h1>`;

    //mode 2 create elements
    /* const h1 = document.createElement(`h1`);
    h1.innerHTML = `Welcome - Internal`;
    return h1; */

    //mode 3 templates or div
    const template = document.createElement(`template`);
    template.innerHTML = `
    <div>
      <h1>Hello from templates</h1>    
    </div>
    `;
    return template.content;
  }
}

customElements.define("mycomp-1", StartRater);
```

- Using a `build` in constructor:

```js
class BlogPost extends HTMLElement {
  constructor() {
    super();
    this.build();
  }

  build() {
    console.log(`build importada`);
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.styles());
    shadow.append(this.conteudo());
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
       h1{
           color: coral;
       }
   `;
    return style;
  }
  conteudo() {
    //mode 3 templates or div
    const template = document.createElement(`template`);
    template.innerHTML = `<h1>Hello from templates</h1>`;
    return template.content;
  }
}

customElements.define("mycomp-1", BlogPost);
```

# Lifecycle Hooks

> connectedCallback() lifecycle hook fires when a component is inserted into the DOM

```js
class BlogPost extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    //adiciona os styles and o conteudo
    shadow.append(this.styles(), this.conteudo());
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
        .start-rater {
            background-color: #f00;
        }      
        h1{
            color: coral;
        }
    `;
    return style;
  }
  conteudo() {
    //mode 1 direct
    //this.shadowRoot.innerHTML = `<h1>Interno</h1>`;

    //mode 2 create elements
    /* const h1 = document.createElement(`h1`);
    h1.innerHTML = `Welcome - Internal`;
    return h1; */

    //mode 3 templates or div
    const template = document.createElement(`template`);
    template.innerHTML = `<h1>Hello from templates</h1>`;
    return template.content;
  }
}

customElements.define("mycomp-1", BlogPost);
```

This case como se trava de um Hook o mesmo será chamado novamente, evitar isso...
` this.shadowRoot.append(this.connectedCallback());`

&nbsp;

&nbsp;

### Links:

- [Web Dev Simplified](https://www.youtube.com/watch?v=2I7uX8m0Ta0)
