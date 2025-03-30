const h = document.querySelector("h1");
const btn = document.querySelector("button");
const btn2 = document.querySelectorAll("button")[1];
btn2.onclick = () => {
  h.classList.remove("b");
  h.id = "";
}

btn.addEventListener("click", function(){
  h.id ="rg";
  h.classList.add("b");
  console.log(h);
});

h.title = "novo"

h.dataset.martDicas = "Smartupdate";