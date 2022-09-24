### O que é JavaScript?

<details>
<summary>open content</summary>

É uma linguagem de programação de alto nível que manipula o DOM - Document Object Model do HTML.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1200px-DOM-model.svg.png" style="max-width: 50%">

</details>

## window and document

<img src="./img/BkAjU.jpg" alt="example" style="width:50%">

## window [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window)

- window - manipula o BOM "Browser Object Model", é a primeira coisa que é carregada no browser, object global, não é atoa que `alert()` originalmente pode ser declarado como `window.alert("dev");` aqui também obtemos o Height e Width da janela, e.g:

```js
console.log("height",window.innerHeight, "Width",window.innerWidth);

```
Como exemplo também temos o window.localStorage, console, window.print, prompt entre outros visitar a MDN.

- Mostrar tudo:
`console.log(window)`

- A seguir podemos chamar o document:
`console.log(window.document)`

- Get a Element by ID:  
`<div id="fibra">Speed</div>` 
`console.log(window.fibra);`


## document | [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document) => [MDN - DOM tree](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core)


- document - contains the DOM represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.

```js
console.dir(document);  //#document
console.log(document); //#document
```


- Para manipular o DOM, precisamos "falar" com os elementos, começamos por:

`window.document.<something>` ou apenas `document.<something here>` ou 

- Para começo de tudo vamos falar com object global ROOT do DOM: 
**rootElement**:
`document.documentElement` 

```js
 const root = document.documentElement; 
 console.log(root); // a saida será todas as propriedades do document

 //Podemos ainda "falar" diretamente com:

console.log(window);
console.log(document);
console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.URL);
console.log(document.lastModified);

Mais possibilidades em: https://www.w3schools.com/jsref/dom_obj_document.asp ou checkout a saide com console.log(document)

```

- A tag form com names:

```js
<form  name="test">teste</form> 
console.log(document.test);
console.log(document.test.innerHTML);

```
- Two names:

```js
<form name="JS">
<input type="text" name="vall" value="TypeScript">
</form>

document.JS.onclick = function(){
let val = document.JS.vall.value;
console.log(val); //TypeScript
}
```
- get PointerEvent e.g simples, outros consultar a page README

```js
<form name="credito">credito</form>

document.credito.onclick = function(event){
    console.log(event);
  }

//onclick Event and target 
  document.credito.onclick = function(event){
      console.log(event.target); // <form name="credito">credito</form>
    }
```

# Refs:
####  [stackoverflow - windows vs document](https://stackoverflow.com/questions/9895202/what-is-the-difference-between-window-screen-and-document-in-javascript)


