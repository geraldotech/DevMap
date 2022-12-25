/*
this se referente ao objeto do qual a função é uma propriedade, o valor vai depender do objeto que está invocando a function
*/

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

//thi.input
document.querySelector("input").addEventListener("input", function () {
  console.log(+this.value);
});

//this DOM
document.addEventListener("DOMContentLoaded", function () {
  console.log(this);
});
