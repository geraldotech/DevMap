//Array from example

<ul>
  <li class="item">Arroz</li>
  <li class="item">Feijão</li>
  <li class="item">Batata</li>
</ul>;

const itens = Array.from(document.getElementsByClassName("item"));
console.log(itens);

itens.forEach((item) => {
  item.addEventListener("click", onItemClick);
});

//Spread alternativa to Array.from()
[...itens].forEach((item) => {
  item.addEventListener("click", onItemClick);
});

function onItemClick(event) {
  console.log("clickk", event.target.innerText);
}

// With itemtype html
<ul>
  <li class="item" itemtype="arroz">
    Arroz
  </li>
  <li class="item" itemtype="feijao">
    Feijão
  </li>
  <li class="item" itemtype="batataxx">
    Batataxx
  </li>
</ul>;

const itens = Array.from(document.getElementsByClassName("item"));
console.log(itens);

itens.forEach((item) => {
  item.addEventListener("click", onItemClick);
});

function onItemClick(event) {
  console.log("clickk", event.target.attributes.itemtype.value);
}

//Mais info deixar apenas, event e dar um click no element
console.log("clickk", event);

//function 2 alternative

function onItemClick(event) {
  log("clickk", event.target.attributes.itemtype.value);
  const value = event.target.attributes.itemtype.value;
  if (value == "feijao") log("tropeiro?");
  if (value == "arroz") log("arroz");
}

{
  /* <input type="radio" name="calc" value="html" id="one" />
<label for="one">HTML</label>

<input type="radio" name="calc" value="js" id="js" />
<label for="js">JavaScript</label>

<button onclick="check()">checkout</button>

function check() {
  const inputs = document.querySelectorAll("input[type='radio']");
  let opt = "";
  inputs.forEach((value) => {
    if (value.checked) {
      opt = value.id;
    }
  });
  console.log(opt);
}
 */
}

// Array.from[...] loop

function test() {
  const star = (_, id) => {
    console.log(`hello`, id + 1); //hello 1,2,3,4,5
  };
  return Array.from({ length: 5 }, star);
}
test();

// declare a function
function message(_, id) {
  console.log(`Sunday`, id + 1); // Sunday 1 2 3 4 5
}
// and with Array.from
Array.from({ length: 5 }, message);
