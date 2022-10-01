"use strict";
var age = 30;
var name = "Mark";
console.log("My name is ".concat(name, ", I am ").concat(age, " years old!"));
var Numbers = [1, 2, 3, 4];
console.log(Numbers.reduce(function (total, val) { return total += val; }));
