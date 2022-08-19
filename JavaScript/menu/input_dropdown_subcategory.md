#### live demo => [https://codepen.io/geraldopcf/pen/dymKYXq](https://codepen.io/geraldopcf/pen/dymKYXq)

//html
```html
<table>
<thead>
    <tr>
        <th>Fabricante</th>
        <th>Categoria</th>          
    </tr>
</thead> 
<tbody>
</tbody>
</table>
<form>

<label for="category">Fabricante:</label>
<select id="category" size="1" onchange="makeSubmenu(this.value)">

<option value="" disabled selected>Fabricante:</option>
<option>Americanas</option>
<option>Nestle</option>
<option>PlusVita</option>
</select>
<br><br>
<label for="categorySelect">Categoria:</label>
<select id="categorySelect" size="1">
<option value="" disabled selected>Categoria produto</option>
<option></option>
</select>
</form>
</div>



<a href="https://www.studentstutorial.com/code-editor/?topic=js&file_name=show_subcategory">link</a>
```

//css
```css
*{
    background: black;
    color: white;
  }
```



//js

```js
function displaySelected() {
    var fab = document.getElementById("category").value;
    var pro = document.getElementById("categorySelect").value;
    alert(fab + "\n" + pro);
}

var subcategory = {
    Nestle: ["Achocolatado", "Sorteves", "Biscoitos", "Creme de Leite"],
    PlusVita: ["Pão de Forma", "Bolo Plus", "Pão Integral"],
    Americanas:["Chocolates","Smartphones","Eletronicos"]
}

function makeSubmenu(value) {
    if (value.length == 0) document.getElementById("categorySelect").innerHTML = "<option></option>";
    else {
        var citiesOptions = "";
        for (categoryId in subcategory[value]) {
            citiesOptions += "<option>" + subcategory[value][categoryId] + "</option>";
        }
        document.getElementById("categorySelect").innerHTML = citiesOptions;
    }
}

function resetSelection() {
    document.getElementById("category").selectedIndex = 0;
    document.getElementById("categorySelect").selectedIndex = 0;
}
```