const blog = [
  { id: 3, category: "zeta", title: "Post three" },
  { id: 1, category: "android", title: "Post one" },
  { id: 1, category: "download", title: "Post two" },
  { id: 1, category: "android", title: "Post three" },
  { id: 2, title: "Post three" },
  { id: 5, category: "monday", title: "Post Monday" },
];

console.log("all posts", blog);

//📌1 Get only Categories in this Array
//📌👉Using filter
const cater = blog.filter((val) => val.category);
console.log("categories", cater);

cater.forEach((val) => {
  console.log("forEach", val.category);
});

//📌👉Using map
//🧐get categotries map seria melhor que filter....

const novo = blog.map((val) => val.category);
console.log("map cat", novo);

//📌2 conter duplicate values

//📌👉Using forEach
const conter = {};
novo.forEach((ele) => {
  conter[ele] = (conter[ele] || 0) + 1;
});

console.log("conterFor", conter);

//📌👉Using Using Reduce

const contador = novo.reduce(
  (cont, item) => ((cont[item] = cont[item] + 1 || 1), cont),
  {}
);
console.log("cont reduce", contador);

//📌3 Remove duplicados
const duplicado = novo.filter(
  (val, ind) => novo.indexOf(val) == ind && val != undefined && val != ""
);
console.log(duplicado.sort());
