//Learn DOM Manipulation In 18 Minutes
//includes Updates by: gmapdev

//Select the body
const body = document.body;

//👉 create elements is super simple
const div = document.createElement("div");
const h1 = document.createElement("h1");
const p = document.createElement("p");
const txt = document.createTextNode("Creating using createTextNode");

body.appendChild(txt); // ou append works too

//👉Contextualizando...
const para = document.querySelector("div");
//é necessário um pai englobando os elementos para ter o retorno explicado abaixo
console.log(para.textContent); //return ele alinhados includes indentation
console.log(para.innerText); //return ele visiveis igual na rederização do html
console.log(para.innerHTML); //return all ele + estrutura HTML

//p.textContent = "<strong>My text</strong>"; //<strong>My text</strong>
//render HTML
//p.innerHTML = "<strong>My text</strong>"; //My text in `bold`

/*
 */
const strong = document.createElement("strong");
strong.innerText = "My new Strong"; //My new Strong in `bold`
/*
👉append() Allows Us To Add Multiple Node Objects At Once, Arrays, strings, is better option
👉appendChild() only accepts Node Objects
*/
//body.append("My Test", " Strings");
div.append(strong);
body.append(div);

//remove elements
const div2 = document.querySelector(".div");
const Hi = document.querySelector("#hi");
const Bye = document.querySelector("#bye");

//remove +usado
Bye.remove();

//volta a adicionar
div2.append(Bye);

//removendo com o parent
div2.removeChild(Hi);

//Getting Attributes
console.log(Bye.getAttribute("id")); // bye
//ou shortcut

console.log(Bye.id); // bye
console.log(Bye.title); // Ola

//SetAttribute shortcutes

Bye.setAttribute("classe", "red");
Bye.id = "novoid";
Bye.title = "New Way";

//Remove Attr

Bye.removeAttribute("classe");

// data-test DOMStringMap
console.log(Bye.dataset); // no DOM:  data-test o return: test: "content
/*
data-long-beach="california" return longBeach:'california'
*/

// Access the data
console.log(Bye.dataset.test); //this is a test
console.log(Bye.dataset.longBeach); //california

//Setting data direct in JS

Bye.dataset.novoName = "Costa"; //DOM will updated data-novo-name="Costa"

//ClassList and remove
Bye.classList.add("novaclasse");
Bye.classList.remove("hi1");

//Toggle
Bye.classList.toggle("hi5", true);

//style
Bye.style.color = "red";

//favicon and CSS
/*
  removendo favicon
  usar  query para "link[rel='shortcut icon']"
*/
//icon
const icon = document.querySelector("link[rel='shortcut icon']");
icon.href = null;

//CSS
const css = document.querySelector("link[rel='stylesheet']");
console.log(css);

//Object.assign
const createEl = () => {
  const obj = Object.assign(document.createElement("p"), {
    textContent: "Novo par",
  });
  document.body.appendChild(obj);
};
