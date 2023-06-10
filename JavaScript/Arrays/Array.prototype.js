const n = [1, 2, 3, 4, 5];

Array.prototype.NumerosPar = function (val) {
  return this.filter((val) => val % 2 == 0);
};

console.log(n.NumerosPar()); //2 ,4
