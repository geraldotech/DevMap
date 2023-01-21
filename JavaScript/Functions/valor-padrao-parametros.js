function say(msn = "Hi") {
  console.log(msn); //Hi, Geraldo
}
say();
say("Geraldo");

function say2(param = "novo") {
  console.log(param); //novo
}
say2();

function say3(msn) {
  //msn = typeof msn !== 'undefined' ? msn : 'Indefinido'
  msn = typeof msn !== "undefined" ? msn : "indefinfdfd";
  console.log(msn); //Indefinido
}

say3();
//https://ricardo-reis.medium.com/valor-padr%C3%A3o-de-par%C3%A2metros-em-javascript-34fcac38d88e
