<span id="res"></span>;

// 👉while statemet
let txt = "";
let n = 0; // start n 0
while (n < 10) {
  console.log("hello"); // print 10x
  txt += `hello <br>`;
  n++; //
}
document.getElementById("res").innerHTML = `${txt}`;

//👉do whie

let z = 1;
do {
  console.log("Bloody Hell");
  z++; // do not forget to increase the variable, otherwise the loop will never end!
} while (z <= 10);

//👉for
var total = 0;
var num = [1, 2, 3];

for (i = 0; i < num.length; i++) {
  total += num[i];
}
console.log(total); // 6

//👉chamar a fun com loop
for (let i = 0; i <= 5; i++) {
  ola(i, "Geraldo");
}

function ola(n, val) {
  console.log(val);
}
