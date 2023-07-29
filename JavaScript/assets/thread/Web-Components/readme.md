# Web Components

### Basic

```js
class TodoItem extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "Hi, I am custom";
  }
}
customElements.define("todo-item", TodoItem);
```

in html call: `<todo-item></todo-item>`

Get custom text: `<todo-item>Hello</todo-item>`

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

- Using templates.content

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

[Web Dev Simplofied](https://www.youtube.com/watch?v=2I7uX8m0Ta0)
