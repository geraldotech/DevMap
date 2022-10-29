[Code Pen](https://codepen.io/geraldopcf/pen/NWYmmoB)

<details>
<summary>CSS</summary>

```css
:root{
    color-scheme: dark;
    }
    .isa {
    color: purple;
    font-size: 2rem;
        }

        .sim {
            background: red;
            width: fit-content;
        }

        .num {
            background: coral;
            width: fit-content;
        }
        .pages{
      color: red;
      font-size: 2rem;
    }
    .links{
        text-decoration: none;
        color: coral;
        font-size: 2rem;
    }
    .linkr{
      color: rgb(216, 115, 0);
      font-size: 2rem;
      text-decoration: none;
      display: block;
    }
        .beta{
        color: red;
      }

      .demo{
        color: blue;
      }
```
</details>

<details>
<summary>HTML</summary>

```html
    <h2 class="isa sim" id="son">ISABELLA (click this txt)</h2>
    <p id="cpf">084.000.000-70</p>


    <h2>Button disabled</h2>
    <button id="btn2">Download</button>

    <h2>forEach setstyle, and attrs target_blank</h2>
    <a href="#">link 1</a>
    <a href="#">link 2</a>
    <a href="#">link 3</a>
    <a href="#">link 4</a>
   

    <h2>forEach</h2>

<app>para</app>
<app>para</app>
<app>para</app>

    <h2>for in loop</h2>
    <p id="pp">para</p>
<p id="pp">para</p>
<p id="pp">para</p>

<hr>
<div class="beta" onclick="change(this)">geraldo class.toggle()</div>

```
</details>

```js
let isa = document.getElementById("son");
isa.addEventListener("click", function () {
//isa.setAttribute("class","isa");
//isa.classList.add("isa");
//isa.removeAttribute("class");
isa.classList.remove("isa", "sim"); //remove multiple class
        })

//add
let a = document.getElementById("cpf");
a.classList.add("num")
//remove
let b = document.getElementById("cpf");
//b.classList.remove("num");
btn = document.querySelector("button#btn2");
btn.setAttribute("disabled", "");

/*foreach*/

const pp = document.querySelectorAll("a");

console.log(pp.length);
pp.forEach(el => {
el.classList.add("linkr");
el.href = "http://technotesbr.blogspot.com";  
el.setAttribute("target","_blank");
el.setAttribute("title","open new tab");
}); 


//forEach 
//https://bobbyhadz.com/blojavascript-change-style-of-all-elements-with-class

function changelinks2(css){
let aa = document.querySelectorAll("app");

aa.forEach(bs => {
  bs.classList.add(css);
});
}
changelinks2("pages");

         //for in /* contem erros but works*/
function changelinks(css){
let pp = document.querySelectorAll("p");
 for(let i = 0 ; i <= pp.length; i++){
  pp[i].classList.add(css);
} 
}
changelinks("links");


//toggle
 function change(x){        
       x.classList.toggle("demo");
      }

```