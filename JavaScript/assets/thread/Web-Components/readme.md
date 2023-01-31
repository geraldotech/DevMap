# Web Components

Basic way to doing this, now in HTML call <todo-item></todo-item>

```js
class TodoItem extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "Hi, I am custom";
  }
}
customElements.define("todo-item", TodoItem);
```

Get custom text

`this.innerHTML =`<h3>${this.innerText}</h3>`;

[Web Dev Simplofied](https://www.youtube.com/watch?v=2I7uX8m0Ta0)
