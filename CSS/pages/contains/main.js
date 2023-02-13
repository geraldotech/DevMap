//document.querySelector("body").style.backgroundColor = "black";

const todos = document.querySelectorAll("div, section");

todos.forEach((item) => {
  item.style.backgroundColor = `red`;
});
todos.forEach((val) => {
  val.style.color = "pink";
});
//set default dark theme for all html
document.querySelector("html").style = `color-scheme: dark;`;
