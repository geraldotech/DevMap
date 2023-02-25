### id, Class, tagName, byName, QuerySelector and QuerySelectorAll

👉HTMLCollection and NodeList and Array

```js
const tag = document.getElementsByTagName("p");
console.log(tag);

//forEach works in Nodelist e Array
const p = document.querySelectorAll("p");
console.log(p);

p.forEach((ele) => console.warn(ele.innerText));

const toAr = Array.from(p);
console.log(toAr);
toAr.forEach((ele) => console.warn(ele.innerText));
```

<a href="https://www.w3schools.com/js/js_htmldom_nodelist.asp" target="_blank">HTML Collection vs NodeList</a>

```html
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
```

```js
//👉 GetElementById:
document.getElementById("test"); //return single element

//👉 getElementsByTagName and forEach
Array.from(document.getElementsByTagName("a")).forEach((el,ind) =>{
    console.log(ind,el.textContent)
})

//👉 getElementsByTagName -
//returns a HTML Collection[x] required a Array.from
console.log(document.getElementsByTagName("a"));

//N of caracteres  in each Paragrah
console.log(p[0].innerText.length);
console.log(p[1].innerText.length);

//N of paragrah
const div = document.getElementsByTagName("div");
const pOfdiv = div[0].getElementsByTagName("p");
console.log(pOfdiv.length); //1

const pOfdiv2 = div[1].getElementsByTagName("p");
console.log(pOfdiv2.length); //2


//👉 getElementsByClassName - return a HTML Collection[x]
const menu = document.getElementsByClassName("menu");
console.log(menu);  menu[0].innerHTML = "Hello World!";

//👉 byName() return NodeList
 https://www.w3schools.com/jsref/met_doc_getelementsbyname.asp
/*
Dica: Array.from convert HTML Collection and NodeList to Array
*/

//👉querySelector - the Super Selector!! class, id, attributes, tags, subclasses, subtags...
console.log(document.querySelector(".oi")); //return class
console.log(document.querySelector("#hello").innerHTML); //return id


// querySelector - selecionando input by name
<input type="text" name="one" placeholder="ola"/>
<input type="text" name="two" placeholder="hello"/>

const input = document.querySelector("input[name='one']");
console.log(input.placeholder); // ola

//👉 querySelector selecionando button inside tags
<section>
  <button>btn inside section</button>
  <button data="btn2">btn number 2 inside section</button>
</section>

const btnSection = document.querySelector("section button");
console.log(btnSection.innerHTML); //"btn inside section"

//👉 querySelector selecionando um segundo button inside tags, adicionar um "name" ou "data"
const sbtn = document.querySelector("section button[data='btn2']");
const Calc = document.querySelector("dialog button[name='ok']");

//👉 querySelector selecionando class e tag dentro dessa classe
const el = document.querySelector(".secao span");
el.textContent = "novo";

//👉 querySelector and nth-child
 const p = document.querySelector("p:nth-child(3)"); //lembrando regras de CSS se não existir o tipo tipo p `3` vai retornar `null`
 const p = document.querySelector("p:nth-of-type(2)");


//👉 querySelectorAll - support forEach
console.log(document.querySelectorAll(".menu")); //return a NodeList()

const link = document.querySelectorAll("a"); //return all tags
console.log(link); //return a NodeList()

link.forEach(el => {
    el.classList.add("linkr");
  el.href = "http://technotesbr.blogspot.com";
  el.setAttribute("target","_blank");
  el.setAttribute("title","open new tab");
});

//👉 - 👉Alterando vários elements
const todos = document.querySelectorAll("div, section");

todos.forEach((item) => {
  item.style.backgroundColor = `red`;
  item.style.color = "pink";
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
