### O que é JavaScript?

<details>
<summary>open content</summary>

É uma linguagem de programação de alto nível que manipula o DOM - Document Object Model do HTML.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1200px-DOM-model.svg.png" style="max-width: 70%">

</details>


## window

[Window](https://developer.mozilla.org/en-US/docs/Web/API/Window)

- window - é a primeira coisa que é carregada no browser, objecto global, não é atoa que `alert()` originalmente pode ser declarado como `window.alert("dev");` aqui também obtemos o Height e Width da janela, e.g:

```js
console.log("height",window.innerHeight, "Width",window.innerWidth)

```


- Mostrar tudo:
`console.log(window)`

- A seguir podemos chamar o document
`console.log(window.document)`

- Get a Element by ID `<div id="fibra">Speed</div>`
`console.log(window.live);`


## document

[Document](https://developer.mozilla.org/en-US/docs/Web/API/Document) => [DOM tree](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core)

- document - contains the DOM represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.

```js
console.dir(document);  //#document
console.log(document); //#document
```


- Para manipular o DOM, precisamos "falar" com os elementos, começamos por:

`window.document.<something>` ou apenas `document.<something here>` ou 

- Para começo de tudo vamos falar com object global ROOT do DOM **rootElement**:
`document.documentElement` 

```js
 const root = document.documentElement; 
 console.log(root); // a saida será todas as propriedades do doccument

 //Podemos ainda falar com:
 document.title
 document.head

```

- Selecionando por nomes:

```js
<form  name="test">teste</form> 
console.log(document.test);
console.log(document.test.innerHTML);

```

- Selecionado by two names input

```js
<form name="JS">
  <input type="text" name="vall" value="TypeScript">
</form>

document.JS.onclick = function(){
let val = document.JS.vall.value;
console.log(val); //TypeScript
    }

//get PointerEvent

<form name="credito">credito</form>

document.credito.onclick = function(event){
    console.log(event);
  }
```

### Agora para falar com algum elemento com id:

`document.getElementById("test")`

### onclick Event and target 