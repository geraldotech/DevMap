## [CodePen](https://codepen.io/geraldopcf/pen/QWmYrrR)

```html
<h4>Array display index e seu href baseado no index + custom name</h4>

<a id="root"></a>
```

```js
let names = ['Geraldo','Delta','Quebrec','Bravo','Charlie'];
let names2 = [];

function getx(){
    arr = [];    
    arr.push('Geraldo');
    return arr;
}


function indexs(arr){
    get = [];
    for(index of arr.keys()){
     get.push(index)
    }
    return get;
}
//chama os index arr.keys or index
ind = indexs(names);
console.log(ind);

h1 = names.map((value, ind) => {
    return `<ul><a href="${'item'+ind+value}">${value}</a> ${ind}</ul>`
}).join('')

document.getElementById("root").innerHTML = `<ol>${h1}</ol>`;


//mostra todos exceto o elemento Geraldo
g = names.filter((values) => { return values !== "Geraldo"})
console.log(g)

```