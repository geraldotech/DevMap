<h1>Boolean</h1>
<p>x * y = 81 ?</p>
N1:<input type="number" id="n" />
<p></p>
N2:<input type="number" id="n2" />
<button onclick="get()">Confirm</button>
<span id="res"></span>


//script
function get() {
  n = +document.getElementById("n").value;
  n2 = +document.getElementById("n2").value;

  const x = Boolean(n * n2 == 81);
  console.log(x);
  x == true ? (res.innerText = "dev") : (res.innerText = "try again!");
  //*n * n2 == 81 ? (res.innerText = "dev") : (res.innerText = "try again!");
}


//example 2 user need Enter a n res = 32 to be true
//2^5 = ?
<p>x² = 32</p>
<input type="number" id="n" />

<button onclick="get()">Confirm</button>
<span id="res"></span>

//script
function get() {
  let n = +document.getElementById("n").value;
  let x = Math.pow(2, n);
  let a = Boolean(x == 32);
  //inline
  let check = Boolean(Math.pow(2, n) == 32);
  //na vdd nem precisa de Boolean, supondo que seja true
  let check2 = Math.pow(2, n) == 32;
  document.getElementById("res").innerHTML = check2;
}