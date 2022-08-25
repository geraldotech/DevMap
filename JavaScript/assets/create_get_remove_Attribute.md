<details>
<summary><ins>All CSS used in examples</ins></summary>

```css
        code {
            font-size: 2rem;
        }
        p {
            font-size: 1.2rem;
        }
        .header {
            color: rgb(255, 0, 64);
        }
        .filho {
            color: dodgerblue;
        }
        .isa {
            color: rgb(251, 22, 221);
            font-size: 3rem;
        }
```
</details>

[Examples.onclick=document.open(codepen...)](https://codepen.io/geraldopcf/pen/XWEQQMG)

### 1 - create and setAtributeNode
#### _-create.attribute uses setAttributeNode-_

`<div id="cell" title="mobil titulo">mobile</div>` 

```js
const div = document.getElementById("cell");
let attr = document.createAttribute("src");
attr.value = "Geraldo";
div.setAttributeNode(attr); //<div id="cell" title=" mobil titulo" src="Geraldo">mobile</div>
```

### Change Color
```js
<h1>Change Color</h1>

<button onclick="addClass()">change color</button>

//createAttributeNode and setAttributeNode
function addClass(){
    attr = document.createAttribute("class");
    attr.value = "header";
    myele = document.getElementsByTagName("h1")[0];
    myele.setAttributeNode(attr);
}
```

### 2 - getAttribute

```js
<p id="geral" class="filho">Geraldo.getAttribute("class"): <span id="attr" style="color: red;"></span>
</p>   

<button onclick="getattr()">display attribute</button>

<p>Se não existir return null</p>

//js
//getAttribute
const element = document.getElementById("geral");
let txt = element.getAttribute("class"); //
console.log(txt);
function getattr(){
    document.getElementById("attr").textContent = txt;
}

```

### 3 - removeAttribute

```js
<h2 class="isa">ISABELLA</h2>
<button onclick="rmattr()">Remover attr</button>

//js
//removeAttribute
function rmattr(){
isa = document.getElementsByClassName("isa");
isa[0].removeAttribute("class");
}

```

