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

- Using `shadowRoot`:

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

- Using templates.content:

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
    this.onclick = functin(){
      console.log(`click`);
    }

    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content);
  }
}
customElements.define("todo-item", TodoItem);
```

&nbsp;

&nbsp;

### Links:

- [Web Dev Simplified](https://www.youtube.com/watch?v=2I7uX8m0Ta0)
