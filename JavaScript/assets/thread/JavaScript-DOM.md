### O que é JavaScript?

<details>
<summary>open content</summary>

É uma linguagem de programação de alto nível que manipula o DOM - Document Object Model do HTML.

<div align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1200px-DOM-model.svg.png" style="width: 40%">
</div>

</details>

## console.log

Permite executar `snippets of code` no navegador, muito usado para testar a saída de códigos, o mais usado é o .log porém existem outros.

<a href="https://developer.mozilla.org/en-US/docs/Web/API/console" target="_blank">Todos os tipos de consoles</a>

e.g básico

```js
const person = [{ nome: "Geraldo", age: 30 }];

console.warn(person); //warning
console.log(person); //log
console.dir(person); //disclosure direto ao ponto, melhor para leitura
console.table(person); // beatiful way to show tables
```

## window and document

<div align="center">
<img src="./img/BkAjU.jpg" alt="example" style="width:50%">
<img src="http://www.cs.ucc.ie/~gavin/javascript/05_img01.gif" alt="" style="width:70%"/>

[fonte img](http://www.cs.ucc.ie/~gavin/javascript/05_JS4.html)

</div>

<hr>
- <a href="https://codepen.io/geraldopcf/pen/jOKNwyM" target="_blank">_representação que fiz no CodePen</a>

## window [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window)

- window = interface global que contém o #document "DOM", BOM "Browser Object Model" window e o JavaScript e seus objetos, Arrays, functions... Primeira coisa que começa a ser carregada, a função alert() originalmente pode ser chamada por como window.alert()

  👉[img eg](https://javascript.info/article/browser-environment/windowObjects.svg)

- É incomum chamar o window, basta chamar o nome do object ou função, exemplos são apenas para contextualizar o conceito do window e suas propriedades.

```js
console.log(window); //same input ou digite `window` diretamente no console do browser
console.log(window.window); //same input
console.log(window.document) // #document
console.log("height",window.innerHeight, "Width",window.innerWidth);
console.log(window) - display all objects in window
window;
window.localStorage;
window.console.log same | console.log
window.screen.height
window.innerHeight
window.innerWidth
window.open(); // abre nova janela - 3 params opcionais
              - syntax //👉 https://developer.mozilla.org/en-US/docs/Web/API/Window/open#syntax
              -  open("https://developer.mozilla.org/", "_blank", "width=500, height=300");
              //open window + write text
              - open("", "", "width=500, height=300").document.write("JS");
              - open("js.html", "", "width=500, height=300");
window.prompt() // get prompt text
window.print();
window.confirm();
window.location - vai retornar uma lista de objetos, algums são:
                - .pathname
                - .href 👉 "new url to redirect"
                - .reload() 👉 "reload page"
window.onload = function (){...}
window.onresize = function(){...}
//tudo que acompanhar nome + parênteses() são funções nativas, você também pode criar as suas.
```

<hr>

## document | [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document) => [MDN - DOM tree](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core)

- document - contains the DOM represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.

```js
console.dir(document); //#document Why .dir ? https://developer.mozilla.org/en-US/docs/Web/API/console/dir
console.log(document); //#document
```

- Para manipular o DOM, precisamos "falar" com os elementos, pegando o valor atual ou definindo um novo valor começamos por:

`window.document.<something>` ou apenas `document.<something here>` ou

- From scratch vamos falar com object global ROOT do DOM:
  **rootElement**:

```js
 //  HTML objects
- document; // #document
- document.documentElement // #rootElement #html
- document.head);
- document.body);
- document.URL);
- document.lastModified);
- document.title; // currently value
- document.title = "new title"; // set new value for title
- document.write("gmap"); // write text in DOM
- document.domain
- document.URL
- document.all
- document.styleSheets //return a list of stylesheets
- ❌document.onload 👉 document.body.onload ✔
```

Mais propriedades e a versão do DOM em que foram adicionadas:

- [properties and JS events methods | js_htmldom_document.asp](https://www.w3schools.com/js/js_htmldom_document.asp)

Aqui o uso de da palavra <span style="color:red">document é required</span>, exemplo usando uma função do `window` com `document`, vai abrir nova janela e escrever o texto.

```js
function abrenovaJanela() {
  open().document.write("oi");
}
```

<hr>

## Get a Element by ID direct way:

Todo ID declarado no document é elevado ao scopo global, então é possível chamar diretamente:

```js
<div id="fibra">Speed</div>;

console.log(window.fibra); // div#fibra
console.log(fibra); // div#fibra - todos os outros objetos acessíveis pelo espaço global
```

apesar de funcionar prefira a boa pratica na page README em <ins>getElements and querySelector</ins>

<hr>

## DOM - Events

- HTML DOM Events Attribute: `on + event_name` [DOM - Attributes](https://www.w3schools.com/tags/ref_eventattributes.asp)
- JS Event: `addEventListener("event", function(e){...})` - [DOM - Events](https://www.w3schools.com/jsref/dom_obj_event.asp)

> > mais comuns

- click | onclick
- change | on..
- mousemove | on..
- mouseover | on..
- mouseleave | on..
- keypress | on..
- error | on..
- input | oninput

```js
<form name="credito">credito</form>;

document.credito.onclick = function (event) {
  console.log(event);
};

//onclick Event and target
document.credito.onclick = function (event) {
  console.log(event.target); // <form name="credito">credito</form>
};
```

- get PointerEvent e.g simples, outros consultar a page README
- formas de chamar uma function com `onclick`

```js
<button onclick="btn()">btn1</button>
<button id="btn2">btn2</button>
<button name="btn3">btn3</button>

//onclick in html
function btn(){
  alert("hello");
}

//direct
const btn2 = document.getElementById("btn2").onclick = function (){
  alert("hello");
}

//button name
const btn3 = document.querySelector("button[name='btn3']");
btn3.onclick = function (){
  alert("hello");
}

//inline
<button onclick="console.log(`gge`)">gge</button>
//chama o javascript sem reload page
<a href="javascript:console.log('javascript')">Link</a>
<a    id="color"
      href="javascript:void(document.getElementById('color').style.backgroundColor = `green`)">Color</a>

  <button onclick="document.getElementById(`res`).textContent = `okay`">
      Okay
    </button>
```

# Local do script

- Na header será carregado antes do DOM o que pode causar erros, a menos que defina o `defer`
- Final do body vai carregar quando praticamente todo DOM tiver siado loaded e parsed

# Boolean [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)

## defer

Attribute set para o browser que o script vai ser executado depois que o document foor parsed "analisado", ou seja o script é carregado em background.

```js
<script src="main.js" defer></script>
```

## async

```js
<script src="content.js" async></script>
```

- normal [=== parse going on DOM ===] => "fetch script" => "executa script" => [=== continua parse DOM ===]
- async [=== parse going on DOM ===] => "fetch script" => [=== "executa script" em sincronia com o parse DOM que ainda acontece ===] => [=== continua parse DOM ===]
  the async não garante a ordem de executação do script
- defer [=== parse going on DOM ===] "fetch script" => [continua *parsing DOM" => "completou parse DOM]"] => executa script
  [video ajuda](https://www.youtube.com/watch?v=IrHmpdORLu8)

## [DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event)

A documentação diz que o event `fires` when o HTML foi completamente loaded and parsed "carregado e analisado" sem esperar por stylesheets, images ou subframes.

- Basic usage

```js
window.addEventListener("DOMContentLoaded", function () {
  console.log(this);
});

document.addEventListener("DOMContentLoaded", function () {
  console.log(this);
});
```

- Então usando DOMContentLoaded podemos add um conteúdo na DOM que sem defer retornaria um erro. [live example](https://gmapdev.netlify.app/docs_demo/DOMContentLoaded/eg1/ContentLoaded.html)

- Partindo desse princípio eu fiz 2 scripts, um _*main.js*_ com attr `defer` que cria 2 elementos HTML com id usando _`createElement`_ em fim... O segundo script _`content.js`_ deve alterar os valores criados pelo primeiro script.
  [live example](https://gmapdev.netlify.app/docs_demo/DOMContentLoaded/eg2/ContentLoaded.html)

Ordem de declaração:

```js
<script src="main.js" defer></script>
<script src="content.js"></script>
```

content não precisa de defer pq estamos usando `document.addEventListener("DOMContentLoaded"` que vai chamar a func que vai sobreescrever os valores do primeiro script.

- Considerações se o content.js não tivese o DOMContentLoaded e fosse atribuído o defer, matendo a ordem dos scripts, obviamente o resultado seria o mesmo.

# onload vs onreadystatechange vs DOMContentLoaded

```js
//who is faster ?

//3
window.onload = function () {
  console.warn("window loaded");
};

//2
document.onreadystatechange = function (e) {
  console.warn("document.onready", document.readyState);
  console.log(document.readyState == "complete");
};

//1
document.addEventListener("DOMContentLoaded", () => {
  console.warn("DOM Loaded");
});
```

# javascript:void(0)

[\_javascript-void-0-em-javascript](https://www.freecodecamp.org/portuguese/news/o-que-significa-o-javascript-void-0-em-javascript/)

Evita o reload da página e chama uma function caso houver

```js
<a href="javascript:void(0)" onclick="openInNewTab(`http://google.com`)">
  Google
</a>;

function openInNewTab(url) {
  open(url, "", "width=500, height=300");
}

//by geraldoX null works too
<a href="javascript:null" onclick="openInNewTab()">
  Link
</a>;
```

### Useful links:

- [Learn-DOM-Manipulation](./Learn-DOM-Manipulation/)
- [CSS Object Model](./CSSOM/README.md)
- [onbeforeunload.html](./assets/thread/Learn-DOM-Manipulation/onbeforeunload.html)
- [HTML Objects | dom_obj_document.asp](https://www.w3schools.com/jsref/dom_obj_document.asp)
- [stackoverflow - windows vs document](https://stackoverflow.com/questions/9895202/what-is-the-difference-between-window-screen-and-document-in-javascript)
- [Evitando poluir o objeto-global](http://devfuria.com.br/javascript/objeto-global/)
- [https://en.wikipedia.org/wiki/DOM_events](https://en.wikipedia.org/wiki/DOM_events)
