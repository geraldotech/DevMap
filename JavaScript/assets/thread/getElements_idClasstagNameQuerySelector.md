### id, Class, tagName, byName, QuerySelector and QuerySelectorAll

<a href="https://www.w3schools.com/js/js_htmldom_nodelist.asp" target="_blank">HTML Collection vs NodeList</a>

```js
<a href="#">link 1</a>
<a href="#">link 2</a>
<a href="#">link 3</a>
<a href="#">link 4</a>

<ul>
    <li class="menu">A</li>
    <li class="menu">B</li>
    <li class="menu" id="c">C</li>
    <span class="oi"></span>
    <span id="hello">New York</span>
</ul>


/* Array.from(document.getElementsByTagName("a")).forEach((el,ind) =>{
    console.log(ind,el.textContent)
}) */


//👉GetElementById:
document.getElementById("test"); //return only the id

//👉getElementsByTagName -
console.log(document.getElementsByTagName("a")); //returns a HTML Collection[x] required a Array.from

//👉getElementsByClassName
const menu = document.getElementsByClassName("menu");
console.log(menu); //return a HTML Collection[x]  e.g menu[0].innerHTML = "Hello World!";

//Ainda temos o byName() https://www.w3schools.com/jsref/met_doc_getelementsbyname.asp
/*
Dica: Array.from convert HTML Collection to Array, manupulando todos os itens com forEach
*/

//👉querySelector - the Super Selector!! class, id, attributes, tags, subclasses, subtags...
console.log(document.querySelector(".oi")); //return class
console.log(document.querySelector("#hello").innerHTML); //return id


// querySelector - selecionando input by name
<input type="text" name="one" placeholder="ola"/>
<input type="text" name="two" placeholder="hello"/>

const input = document.querySelector("input[name='one']");
console.log(input.placeholder); // ola

// querySelector selecionando button inside tags
<section>
  <button>btn inside section</button>
  <button data="btn2">btn number 2 inside section</button>
</section>

const btnSection = document.querySelector("section button");
console.log(btnSection.innerHTML); //"btn inside section"

// querySelector selecionando um segundo button inside tags, adicionar um "name" ou "data"
const sbtn = document.querySelector("section button[data='btn2']");
const Calc = document.querySelector("dialog button[name='ok']");

// querySelector selecionando class e tag dentro dessa classe
const el = document.querySelector(".secao span");
el.textContent = "novo";

// querySelector and nth-child
 const p = document.querySelector("p:nth-child(3)"); //lembrando regras de CSS se não existir o tipo tipo p `3` vai retornar `null`
 const p = document.querySelector("p:nth-of-type(2)");


//👉querySelectorAll - support forEach
console.log(document.querySelectorAll(".menu")); //return a NodeList()

const link = document.querySelectorAll("a"); //return all tags
console.log(link); //return a NodeList()

link.forEach(el => {
    el.classList.add("linkr");
  el.href = "http://technotesbr.blogspot.com";
  el.setAttribute("target","_blank");
  el.setAttribute("title","open new tab");
});

//👉 querySelectorAll - selecionando by index
<section>
  <span>[0]</span>
</section>

<section>
  <span>[1]</span>
</section>
document.querySelectorAll("section span")[1];

//👉 select multiples elements and change values.
  document.querySelectorAll("#demo, #demo2").forEach((item) => {
    item.innerHTML = `DOM Loaded!`;
  });

//👉 select by Attribute
<p data>Data</p>
const p = document.querySelector("[data]");

//👉 multi Attributes
<p data>Data</p>
<p attr2>net</p>
const p = document.querySelectorAll("[data], [attr2]");
```
