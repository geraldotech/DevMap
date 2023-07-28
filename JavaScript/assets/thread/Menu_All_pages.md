<h1 align="center">
Menu for All pages by `gmap`
</h1>

Make links with Array using `nav` and `select`, `object` tag and more...
you don't have to edit the code on every page when a change is made to the menu.

# e.g 0: tag `object`

Versão do princípio++ usando apenas HTML deveriamos ter conhecimento do poder essa tag que pode fazer o papel de includes [https://git.geraldox.com/HTML/#object](https://git.geraldox.com/HTML/#object)

# eg 1: Using Array, select, append

Definir a tag parent:  
`<nav id="list"></nav>`

Fazer um map, a div aqui serve para todos os links ser display:block, `.html` para definir a extensão, agora criar as pages HTML correspondentes.

```js
const arr = ["index", "about", "contact"];

document.getElementById("list").innerHTML = arr
  .map((val) => `<div><a href="${val}.html">${val}</a></div>`)
  .join("");
```

🔰e.g + Full Code: https://gmapdev.netlify.app/docs_demo/js_list_menu/eg1/

👉append version

```js
const res = document.getElementById("list");
arr.map((val, ind) => {
  const li = document.createElement("a");
  li.setAttribute("href", val.toLocaleLowerCase() + ".html");
  const div = document.createElement("div");
  div.append(li);
  li.append(val);
  res.append(div);
});
```

👉`select` version direct
parent depois um map colocando todos os itens no `option + value` + .html

```js
document.getElementById("list").innerHTML = `
    <select>
        ${arr
          .map((val) => `<option value="${val}.html">${val}</option>`)
          .join("")}
    </select>
     `;
```

Fazer às pages e atribuir um event no select, claro que no Array a string poderia ser "mypage.html" o que seria dispensável adicionar .html posteriormente.

```js
document.querySelector("select").onchange = (e) => {
  //open same window
  location.href = e.target.value;
  //open new window, concatenacao caso a extension não tiver sido definida no option.
  //location.href = e.target.value + ".html";
};
```

👉select HTML parent:

`<select id="list"></select>`

```js
document.getElementById("mylist").innerHTML = arr.map(
  (val) => `<option value="${val}">${val}</option>`
);
```

👉Definindo `onchange` para todos os select do DOM

```js
const todos = document.querySelectorAll("select");
console.log(todos);
todos.forEach((val) => {
  val.addEventListener("change", (e) => {
    location.href = e.target.value;
  });
});
```

Almost perfect! se não fosse pelo `index.html` no modo `select` sempre chamando ele mesmo , então na primeira posição do Arr vamos deixar vazio:  
`const arr = ["", "index", "about", "contact"];`

🙂Okay works!

🔰e.g + Full Code: https://gmapdev.netlify.app/docs_demo/js_list_menu/eg1_select/

👉Se quiser deixar tudo mais dinâmico, podemos criar a tag do nosso menu em todas as páginas e adotar esse padrão para os exemplos a seguir:

```js
//create nav + id em todas as páginas
const nav = document.createElement("nav");
nav.setAttribute("id", "list");
document.body.append(nav);
```

🔰e.g + Full Code: https://gmapdev.netlify.app/docs_demo/js_list_menu/eg1_createElement/

# eg 2: Array de Objetos

Vamos nosso Array mais formal personalizando os nomes e paths, fazendo um Array de Objetos, onde `Home` teria o `path: index.html`

```js
const menu = [
  { nome: "Home", path: "index.html" },
  { nome: "About", path: "about.html" },
  { nome: "Contact", path: "contact.html" },
];

document.getElementById("list").innerHTML = menu
  .map((val) => `<a href="${val.path}">${val.nome}</a>`)
  .join("");
```

🔰e.g 2 + Full Code: https://gmapdev.netlify.app/docs_demo/js_list_menu/eg2/

# eg 3:

🔰e.g 3 - solution `template literal` semi-automático, contudo sempre escrever toda estrutura do href, porém ainda é uma solução dinâmica, toda page criar uma chamada:

- `<nav id="list"></nav>`

```js
const mymenu = `<a href="index.html">Home</a> <a href="about.html">About</a> <a href="contact.html">Contact</a>`;
document.getElementById("list").innerHTML = mymenu;
```

🔰e.g 3 + Full Code: https://gmapdev.netlify.app/docs_demo/js_list_menu/eg3/

# e.g 4 usando multiple fun return and Object

```js
//Nested version by gmap
function valor(val) {
  return `${val}`;
}

function link(valN, fun) {
  return `<a href="${fun}">${valN}</a>`;
}

function getValores() {
  return {
    link1: link("Home", valor("index.html")),
    link2: link("Contact", valor("contact.html")),
    link3: link("Youtube", valor("http://youtube.com")),
    link4: link("About", valor("about.html")),
  };
}

console.log();

list.innerHTML = Object.values(getValores()).join("");
```

🔰e.g 4 + Full Code: https://gmapdev.netlify.app/docs_demo/js_list_menu/eg4/

# e.g 5 Template Literals

Além de menu dinâmico, pode incluir páginas a partir de strings com custom tags

```js
//components
const footer = `<p>My footer</p>`;
const menu = [
  { nome: "Home", path: "index.html" },
  { nome: "About", path: "about.html" },
];

//load data
const fo = document.querySelector("foo");

if (fo) {
  //se a tag existir
  fo.innerHTML = footer;
}

document.querySelector("nav").innerHTML = menu
  .map((val) => `<a href="${val.path}">${val.nome}</a>`)
  .join("");
```

Basta em cada página criar `<nav></nav> <foo></foo>`

🔰e.g 5 + Full Code: https://gmapdev.netlify.app/docs_demo/js_list_menu/eg5/

# e.g 6 using Ajax

Menu dinâmico, include .html files parece tão obvio, e não podemos deixar de listar essa recurso visite a session de Ajax [https://github.com/geraldotech/DevMap/tree/main/JavaScript/AJAX/Ajax_menu](https://github.com/geraldotech/DevMap/tree/main/JavaScript/AJAX/Ajax_menu)

# e.g 7 using Fetch

É uma versão mais conveninente do Ajax
[https://github.com/geraldotech/DevMap/tree/main/JavaScript/Fetch/fetch_html](https://github.com/geraldotech/DevMap/tree/main/JavaScript/Fetch/fetch_html)

# e.g 8 AngularJS

Versão antigas do AngularJS mesmo na versão CDN conta com o recurso de ng-includes

# e.g 9 VueJS Loader component

Mesmo na versão CDN podemos carregar um component de forma dinâmica

# e.g 10 [SmartVue Includes to VueCDN](https://github.com/geraldotech/DevMap/tree/main/Vue/Smart_Vue_Includes)

Adiciona o recurso de Ajax para incluir páginas html
