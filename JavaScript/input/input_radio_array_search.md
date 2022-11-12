[Live Demo](https://gmapdev.netlify.app/demo/array_input_radio_search/index.html)

<details>
<summary>HTML</summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Array Filter</title>
    <script src="https://unpkg.com/feather-icons"></script>
   <link rel="stylesheet" href="./assets/style.css">
  </head>
  <body>
    <div class="container">
    <h1>Array</h1>
    <div class="array">
      <span id="meuarr"></span>
    </div>
    <h1>Custom Filter</h1>
    <fieldset>
      <legend>Busca:</legend>
      <form>
        <input type="radio" name="opt" id="by_name" />
        <label for="by_name">By Name:</label>
       
        <input type="radio" name="opt" id="by_state" />
        <label for="by_state">By Estado:</label>

        <input type="text" id="search_name" placeholder="search" />
      
      </form>
    </fieldset>
 
    <div class="emoji_icon">    
      <span id="emoji"></span>
     </div>
   <div class="search_results">    
  
    <div class="tres">
      <span id="res"></span>
    </div>
   </div>
 
    <footer>
      <p> <i data-feather="terminal"></i>Copyright 2022</p>   
     
    </footer>

  </div>
  
<script src="./assets/script.js"></script>
      <script>
        feather.replace()
      </script>
  </body>
</html>
```
</details>

<details>
<summary>CSS</summary>

```css
body{
    height: 130vh;       
  }
  .array {
    margin: auto;
    width: fit-content;
    font-size: 1rem;
    background: rgb(11, 11, 46);
    color: rgb(255, 255, 255);        
    border-radius: 10px 10px;
    padding: 10px;        
  }
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 100px;      
  }

  h1{
    text-align: center;
  }

.search_results div  {
    display: flex;
    width: 100%;
    justify-content: center;
  } 

  .search_results li{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;        
    margin-top: 15px;
  }

 ul li{
    list-style: none;
    padding-left: 0;
    margin: auto;
  }

  footer{
    margin-top: 100px;
  }
  input{
    margin-top: 10px;
    
  }
  form{
    text-align: center;
  }
  .emoji_icon{
    width: 100px;
    text-align: center;
    margin-top: 10px;
  }

  @media screen and (max-width: 650px){
    .container{
      margin: auto;
    }
  }
```

</details>

<details>
<summary>JS</summary>

```js
const person = [
  { nome: "GERALDO", idade: 29, Estado: "RJ" },
  { nome: "FELIPE", idade: 25, Estado: "AL" },
  { nome: "ISABELLA", idade: 5, Estado: "RJ" },
  { nome: "CAMILLY", idade: 10, Estado: "SP" },
  { nome: "ISA", idade: 28, Estado: "RS" },
];

const search_name = document.querySelector("#search_name");
search_name.addEventListener("input", search);

const res = document.getElementById("res");
const emoji = document.querySelector("#emoji");

function search() {
  const str = this.value.toUpperCase();
  let gtxt = "";

  if (document.querySelector("#by_name").checked) gtxt = getname(str);
  if (document.querySelector("#by_state").checked) gtxt = getstate(str);

  if (!gtxt) alert("Select a option!");

  function getstate(el) {
    const resuls = person.filter((el) => el.Estado === str);
    const some = resuls.some((el) => el.Estado);
    emojis();
    if (some === false) {
      return (res.textContent = "filtering...");
    }
    return emojisHappy(), [resuls];
  }

  function getname(el) {
    const temNomes = person.filter((el) => el.nome === str);
    const someNames = temNomes.some((el) => el.nome);
    emojis();
    if (someNames === false) {
      return (res.textContent = "filtering...");
    }
    return emojisHappy(), [temNomes];
  }
  res.innerHTML = `<li>${JSON.stringify(gtxt)}</li>`;
}

function emojis() {
  const msg = (res.textContent = "filtering...");
  const Thinking =
    (emoji.innerHTML = `<img src="./assets/img/1f610.png" alt="">`);
}

function emojisHappy() {
  const smile = (emoji.innerHTML = `<img src="./assets/img/1f603.png" alt="">`);
}

const divarr = document.getElementById("meuarr");
divarr.insertAdjacentHTML("beforebegin", "<code><pre>const person = [ ");
divarr.insertAdjacentHTML("afterend", "<code> ];</code>");
person.innerText = person.map((ele) => {
  const body = document.createElement("code");
  const p = document.createElement("p");
  body.innerHTML = `{nome:"${ele.nome}", idade:"${ele.idade}", Estado:"${ele.Estado}"},<br>`;
  divarr.appendChild(body);
});


```

</details>