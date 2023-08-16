`this` se referente ao objeto do qual a função é uma propriedade, o valor vai depender do objeto que está invocando a function

```js
e.target.id === this.id;
e.target.value === this.value;
e.target === this;
```

```js
// object window
function doSomething() {
  console.log(this);
}
doSomething();

// button value
<button value="1">Esse</button>;

document.querySelector("button").addEventListener("click", function () {
  console.log(this.value);
});

// multiple buttons
document.querySelectorAll("button").forEach((val) =>
  val.addEventListener("click", function () {
    console.log(this.value);
  })
);

// input checked?
document.querySelector("input").addEventListener("click", function () {
  console.log(this.checked);
  console.log(this.textContent);
});

// this input
document.querySelector("input").addEventListener("input", function () {
  console.log(+this.value);
});

// this DOM
document.addEventListener("DOMContentLoaded", function () {
  console.log(this);
});

// this na function(this)
<button onclick="getx(this)">show</button>;
function getx(event) {
  console.log(this);
  console.log(this.event);
  console.log(event.innerHTML);
}
// this selected value direct in HTML
<select onchange="console.log(this.value)">
  <option></option>
  <option>one</option>
  <option>two</option>
</select>;
```
