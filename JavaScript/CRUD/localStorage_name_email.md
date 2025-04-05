## [CodePen](https://codepen.io/geraldopcf/pen/xxWMzxX)



```css
        .error-message {
            color: red
        }
        .button-save {
            margin-top: 8px;
        }
```


```html
<body onload="init()">
 <div>
     <div>
         <div>Nome: <span id="saved-name">-</span></div>
         <div>Email: <span id="saved-email">-</span></div>
     </div>
     <hr />
 <div>
<input id="name" placeholder="Nome" />
<input id="email" placeholder="Email" type="email" />
<div id="error" class="error-message"></div>
<button class="button-save" onclick="save()">Salvar</button>

<h2>Delete</h2>
<button onclick="deleteItem()">Delete and reload</button>
</div>

```

```js
function save(){
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
if ( name && email ){
    document.getElementById('error').innerHTML = '';
    document.getElementById('saved-name').innerHTML = name;
    document.getElementById('saved-email').innerHTML = email;
    document.getElementById('name').innerHTML = '';
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
} else {
    const error = 'Preencha todos os dados';
    document.getElementById('error').innerHTML = error;
}
     }

     function init(){
         const name = localStorage.getItem('name');
         const email = localStorage.getItem('email');
         if (name){
             document.getElementById('saved-name').innerHTML = name;
         }
         if (email){
             document.getElementById('saved-email').innerHTML = email;
         }
     }

     function deleteItem() {
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  alert('itens deletados!');
  location.reload();
}
```