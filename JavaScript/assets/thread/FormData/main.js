console.log("verificar a URL");

//select the form
const form = document.querySelector("form");
//onsubmit
form.onsubmit = function (e) {
  //prevent if necessary,
  e.preventDefault();

  //Creates a new FormData object.
  const fdata = new FormData(form);

  //Getting data baseed in names and sum

  const [price, year] = [+fdata.get("price"), +fdata.get("year")];
  console.log(price + year);

  //FormData.append(name, value, filename)
  fdata.append("novo", "newValue");
  console.log(fdata.get("novo")); // new

  //GetAll
  const todos = fdata.getAll("price");
  console.log(todos);
  //Somando os valores
  const sum = todos.reduce((accumu, curren) => {
    return accumu + +curren;
  }, 0);
  console.log(sum);

  //has
  console.log(fdata.has("novo")); // name ?true
  console.log(fdata.has("preco", "2")); // false

  //exemples++ set(), keys(), values(), delete(), entries()  👉 https://developer.mozilla.org/en-US/docs/Web/API/FormData/set
};
