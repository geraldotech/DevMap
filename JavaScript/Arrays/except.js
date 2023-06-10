Array.prototype.except = function (keys) {
  return this.filter((x, index, arr) => {
    return typeof keys === "number"
      ? index !== keys
      : keys.indexOf(index) === -1;
  });
};

var arr = ["a", "b", "c", "d", "e"];

var result = arr.except([0, 1]);
console.log(`${result}
  `);

var result1 = arr.except(0);
console.log(`${result1}
  `);

//Lite version by gmap
function exceto(arr, keys) {
  return arr.filter((val, ind) => {
    return typeof keys === `number` ? ind !== keys : keys.indexOf(ind) === -1;
  });
}

console.log(exceto(api, [0, 1, 3, 4, 5])); // Barrao, oplz

//http://www.java2s.com/ref/javascript/javascript-array-except-keys.html
