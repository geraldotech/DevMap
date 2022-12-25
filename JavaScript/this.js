/*
this se referente ao objeto do qual a função é uma propriedade, o valor vai depender do objeto que está invocando a function
*/

//object window
function doSomething() {
  console.log(this);
}
doSomething();

//button value
<button value="1">Esse</button>;

document.querySelector("button").addEventListener("click", function () {
  console.log(this.value);
});

//multiple buttons
document.querySelectorAll("button").forEach((val) =>
  val.addEventListener("click", function () {
    console.log(this.value);
  })
);

//input checked?
document.querySelector("input").addEventListener("click", function () {
  console.log(this.checked);
});

//this input
document.querySelector("input").addEventListener("input", function () {
  console.log(+this.value);
});

//this DOM
document.addEventListener("DOMContentLoaded", function () {
  console.log(this);
});

//this na function(this)
<button onclick="getx(this)">show</button>;
function getx(event) {
  console.log(this);
  console.log(this.event);
  console.log(event.innerHTML);
}
