<span id="res"></span>;

// while statemet
let txt = "";
let n = 0; // start n 0
while (n < 10) {
  console.log("hello"); // print 10x
  txt += `hello <br>`;
  n++; //
}
document.getElementById("res").innerHTML = `${txt}`;

//do whie

let z = 1;
do {
  console.log("Bloody Hell");
  z++; // do not forget to increase the variable, otherwise the loop will never end!
} while (z <= 10);

// for of

function somar(...n) {
  let z = 0;
  for (let num of n) {
    z += num;
  }
  return console.log(z);
}
somar(1, 2, 3, 4);

// for of sum Array
const arr = [1, 2, 3];
let ab = 0;
for (let el of arr) {
  ab += el;
}
console.log(ab); //6

// for of

const interable = [10, 20, 30];
for (let value of interable) {
  value += 1;
  console.log(value); // 11, 21 ,31
}

const name = "GERALDO";
for (const vall of name) {
  console.log(vall);
  /*
             G
             E
             R
             A
             L
             D
             O
             */
}

//for of even
const arr = [1, 2, 3, 4, 5, 6];
for (val of arr) {
  if (val % 2 == 0) {
    console.log(val); // 2,4,6
  };
};

//for
var total = 0;
var num = [1, 2, 3];

for (i = 0; i < num.length; i++) {
  total += num[i];
}
console.log(total); // 6
