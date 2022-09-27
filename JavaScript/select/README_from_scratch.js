// Basic example
    
<select id="lista">
<option value="red">Red</option>
<option value="blue">Blue</option>
<option value="coral">Coral</option>
</select>

<button onclick="getColor()">Check</button>

function getColor(){
    let x = document.getElementById("lista").value; //red, blue, coral
    console.log(x);
    //if(x == 'red') console.log('vermelho');
};


// by ID

<select id="lista">
    <option id="vermelho" value="red">Red</option>
    <option id="azul" value="blue">Blue</option>
    <option id="coral2" value="coral">Coral</option>
</select>

document.getElementById("lista").value; // vermelho, azul, coral2

// selectedIndex - get Index of itens
document.getElementById("lista").selectedIndex;
console.log(x); // 0 , 1 , 2


// Como só é possível selecionar apenas um item, por isso o index sempre será [0]
// selectedIndex - get value
document.getElementById("lista").selectedOptions[0].value; // red, blue, coral

// selectedIndex - getting id
document.getElementById("lista").selectedOptions[0].id; // vermelho, azul, coral2
document.getElementById("lista").selectedOptions[0].getAttribute('id'); // vermelho, azul, coral2

// getAttribute("data");
<select id="lista">
    <option data="verm" id="vermelho" value="red">Red</option>
    <option data="ilha" id="azul" value="blue">Blue</option>
    <option data="smart" id="coral2" value="coral">Coral</option>
</select>
document.getElementById("lista").selectedOptions[0].getAttribute("data");
console.log(x); // verm. ilha, smart


// querySelectorAll

<select name="planos">
<option value="1">Alpha</option>
<option value="2">Bravo</option>
<option value="3">Charlie</option>
</select> 

<select name="planos">
<option value="1">Alpha 2</option>
<option value="2">Bravo</option>
<option value="3">Charlie</option>
</select> 

/*
O querySelectorAll vai pegar o select com name = 'planos' com isso ele cria uma hirarquia de Nodelist, por exemplo de tivessimos outro select com mesmo nome o seu index seria select[1]
*/

const opt = document.querySelectorAll("select[name='planos']");
console.log(opt); //a prova está que opt[0] é o select[0]
// outro exemplo
console.log(document.querySelectorAll("select[name='planos']")[0][0].innerHTML); // Alpha */

console.log(document.querySelectorAll("select[name='planos']")[1][1].innerHTML); // Alpha 2 */


// querySelectorAll e addEventListener

// this.value
const opt = document.querySelectorAll("select[name='planos']");

opt.forEach(el => {
    el.addEventListener("change", function(e){
        console.log(this.value); // 1,2,3 display values
        console.log(e.target.value); // 1,2,3 display values
        console.log(this.selectedOptions[0].value); // 1,2,3 display values
        console.log(this.selectedIndex); // display Index 
        console.log(this.selectedOptions[0].getAttribute("data")); // display data Attributes
    });
});

// Também funciona com Array.from contudo não vejo necessidade, estamos tratando apenas 1 informação simples como id/value e não multiplos no caso de checkboxs;

const opt = document.querySelectorAll("select[name='planos']");

opt.forEach(el => {
    el.addEventListener("change", function(e){
        let arr = Array.from(opt);
        console.log(arr[0].selectedOptions[0].value);        
    });
});

/*
https://www.w3schools.com/jsref/prop_select_value.asp
*/