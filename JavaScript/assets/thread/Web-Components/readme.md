<h1 align="center">Web Components</h1>

### Basic Web Component

```js
class TodoItem extends HTMLElement {
  constructor() {
    super(); //vai puxar tudo do HTMLElement tudo da DOM
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

    console.warn(shadow); // get shadowRoot #document-fragment
    console.log(this); //open the component discovery-item structure

    shadow.innerHTML = `
      <style> 
      p { 
        color: orange; 
        } 
      </style> 
      <p>shadow</p>`;
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

    console.log(this); //open the component discovery-item structure
    console.warn(this.shadowRoot); // get shadowRoot #document-fragmenttree.
  }
}
customElements.define("discovery-item", Discovery);
```

- Using querySelector[select DOM elements] to change text:

```js
// inside constructor(){... }
this.shadowRoot.querySelector("h1").innerText = `new text here`;
```

- Using `templates.content`:

```js
class TodoItem extends HTMLElement {
  constructor() {
    super();
    //create a template
    const template = document.createElement("template");
    template.innerHTML = `
    <style> 
    p { 
      color: orange; 
    } 
    </style> 
    <p>shadow</p>`;

    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content);
  }
}
customElements.define("todo-item", TodoItem);
```

- this.addEvent... and this...

```js
class TodoItem extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement("template");
    template.innerHTML = `
    <style>
    p {
        color: orange;
    }
    </style>
    <p>Using shadowDOM and templates</p>
    `;
    //this ref the component `TodoItem`
    console.log(this);
    console.log(this.innerText == "A"); //ref a TodoItem

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

- shadow.append(...)

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
        h1 {
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
       h1 {
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
  }
  connectedCallback() {
    console.log(`connected Hook`);
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style> 
        h1{
            color: dodgerblue;
        }
    </style>
    <h1>Hello using connectedCallback()</h1>
    `;
  }
}

customElements.define("mycomp-1", BlogPost);
```

- call methods:

```js
class BlogPost extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    console.log(`connected Hook`);
    //✨ Using this and const
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(this.conteudo(), this.styles());

    // const shadow = this.attachShadow({ mode: "open" });
    // shadow.append(this.styles(), this.conteudo());
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
    const template = document.createElement(`template`);
    template.innerHTML = `<h1>Hello from templates</h1>`;
    return template.content;
  }
}

customElements.define("mycomp-1", BlogPost);
```

This case como se trata de um `Hook` o mesmo será chamado novamente, evitar isso...
` this.shadowRoot.append(this.connectedCallback());`

# slots

- Apenas adicionar dentro do template

```js
<h1>
  <slot></slot>
</h1>

//html
<discovery-item>Testing Slot</discovery-item>
```

- Named slots

```js
<ul>
  <li>
    {" "}
    <slot name="notebook"></slot>
  </li>
</ul>
//html
    <discovery-item>
    Welcome default slots
    <slot slot="notebook">Dell G15</slot>
  </discovery-item>
```

&nbsp;

&nbsp;

### Links:

- [Web Dev Simplified](https://www.youtube.com/watch?v=2I7uX8m0Ta0)
- [Using_shadow_DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM)
