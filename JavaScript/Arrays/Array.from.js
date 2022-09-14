//Array from example

<ul>
<li class="item">Arroz</li>
<li class="item">Feijão</li>
<li class="item">Batata</li>
</ul>

const itens = Array.from(document.getElementsByClassName("item"));
console.log(itens);

itens.forEach(item=>{
  item.addEventListener("click", onItemClick)
});

function onItemClick(event){
  console.log('clickk', event.target.innerText); 
}

// With itemtype html
<ul>
    <li class="item" itemtype="arroz">Arroz</li>
    <li class="item" itemtype="feijao">Feijão</li>
    <li class="item" itemtype="batataxx">Batataxx</li>
</ul>


const itens = Array.from(document.getElementsByClassName("item"));
console.log(itens);

itens.forEach(item=>{
  item.addEventListener("click", onItemClick)
});

function onItemClick(event){
    console.log('clickk', event.target.attributes.itemtype.value);
}

//Mais info deixar apenas, event e dar um click no element
console.log('clickk', event);