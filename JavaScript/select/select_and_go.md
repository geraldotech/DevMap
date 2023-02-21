```html
<h1>Select and go</h1>
<select name="menu" id="">
  <option value="">Select and go</option>
  <option value="1">Google</option>
  <option value="2">Microsoft</option>
</select>

<select name="menu2" id="">
  <option value="">Select and click</option>
  <option value="1">Google</option>
  <option value="2">Microsoft</option>
</select>
<button onclick="openPage()">Go</button>
```

Só podemos usar o this com o addEventListener, caso contrario use event

```js
document.querySelector("select[name='menu']").onchange = (e) => {
  const val = e.target.value;
  website(val);
};
```

```js
function openPage() {
  const menu2 = document.querySelector("select[name='menu2']");
  const val2 = menu2.selectedIndex;
  website(val2);
}
```

- function para os dois modos que compara os values
- para abrir na mesma janela remover o window.open()

```js
function website(el) {
  if (el == 1) {
    window.open().location.href = "http://google.com";
    return;
  }
  if (el == 2) {
    window.open().location.href = "http://microsoft.com";
    return;
  }
  alert("selecionar uma opção");
}
```

version 3 - adicionando links diretamente no DOM

```html
<select name="menu3">
  <option value=""></option>
  <option value="http://google.com">Google</option>
  <option value="http://youtube.com">Youtube</option>
</select>
```

e precisamos adicionar um evento de onchange neste select

```js
document.querySelector("select[name='menu3']").onchange = (e) => {
  window.open().location.href = e.target.value;
};
```

onchange direct in DOM - gmap

```html
<select onchange="location.href = this.value">
  <option value=""></option>
  <option value="http://google.com">Google</option>
  <option value="http://youtube.com">Youtube</option>
  <option value="http://linkedin.com">Linkedin</option>
</select>
```
