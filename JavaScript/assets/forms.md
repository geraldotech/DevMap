<h1 align="center">Um resumo sobre forms from scratch</h1>
<a href="https://codepen.io/geraldopcf/pen/OJzqRKJ" target="_blank">form completo Estacio</a>

Com forms como o nome já sugere é usado para formulários e inputs de diversos tipos, dentro do forms temos os inputs que são as entradas de texto.

- e.g:

```html
<form name="" action="valida.php">
  <input type="text" name="username" />
  <input type="email" name="email" />
  <input type="submit" value="Enviar" />
  <input type="reset" value="Limpar" />
</form>
```

Alguns forms attributes - **[more in](https://www.w3schools.com/html/html_forms_attributes.asp)**

```js
`action="action.php"` para validar os dados no backend, support _target
`input type="reset"` limpar o form
`method` GET, POST
```

# input

### types of inputs [form_input_types](https://www.w3schools.com/html/html_form_input_types.asp)

Alguns:

- `text`
- `password`
- `number`
- `submit` enviar
- `reset` resetar
```html
[mesmo resultado]
<input type="submit" value="Send">
<button type="submit">Send 2</button>
<input type="reset" value="resetar">
<button type="reset">Resetar 2</button>
```

### attributes [form_attributes](https://www.w3schools.com/html/html_form_attributes.asp)

Alguns:

- `id` 
- `name` 
- `value` 
- `placeholder` 
- `required` 
- `readonly` 
- `size="2"` default 

### label for - required input id

`<label for="id">Your Age </label>`


### validações

- `pattern` - regular expression 
```
 pattern="[A-Za-z]{3}" title="somete 3 letras"
```
- `maxlenght` 
- `minlenght` 

## input size
é possível ajustar o input para um determinado size, contúdo prefira usar CSS
  `<input type="text" size="1">`

### input attribute placeholder with JavaScript and preventDefault()

```js
<form name="login"/>
<input type="text" name="username"/>
<input type="email" name="email"/>
<input type="button" value="Enviar" id="checkingUserName" />
</form>

/*
//Atribuindo placeholder
//https://developer.mozilla.org/en-US/docs/Web/API/Document/forms
*/
const forms = document.forms["login"];
forms.elements.email.placeholder = "test@example.com";
forms.elements.username.placeholder = "your login";

//getting data
document.getElementById("checkingUserName").onclick = function(e){
  e.preventDefault();
  let name = document.forms["login"].username.value;
  let email = document.forms["login"].email.value;
  console.log(name, email);
}
```

preventDefault inline

```html
 <form onsubmit="event.preventDefault(); return myfunction()">
      <input type="text" id="num" />
      <button type="submit">submit</button>
</form>
```

event.preventDefault <a href="https://codepen.io/geraldopcf/pen/VwXgqgQ" target="_blank">CodePen</a>

### Fieldset [tag_fieldset.asp](https://www.w3schools.com/tags/tag_fieldset.asp)

tag to group related elements in a form - pode usar para agrupar inputs relacionados em um form

```html
<form name="" action="valida.php">
  <fieldset>
    <legend>Preencha os campos!</legend>
    <input type="text" placeholder="your name" value="nome here" readonly />
    <input type="number" placeholder="your age" required />
    <input type="password" placeholder="your pass" />
    <input type="submit" value="Send" />
  </fieldset>
</form>
```


# form names

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