//type annonation é quando definimos o dado manualmente
//type inferecen é quando o ts define de forma automática
//Os dados primitivos são => string, number and boolean;
function somar(a, b) {
    console.log("".concat(a + b));
}
somar(1, 2);
console.log(Math.PI.toFixed(2)); //depois da virgula
console.log(Math.PI.toPrecision(2)); //all numbers
var arr = [1, 2, 3, 4];
var arr2 = ['a', 'b', 'c'];
var arr3 = [12, 3, 23];
var arr4 = ['G', 'X', 'H'];
//7
var miarr = [123, 23, 's', 'd', '123'];
var miarr3 = [123, 'w', 'op'];
function algo(a) {
    console.log("".concat(a));
}
algo('as');
algo(123);
function tem(a, b, c) {
    if (c) {
        console.log("".concat(a, " : ").concat(b, " : ").concat(c));
        return;
    }
    console.log("".concat(a, " : ").concat(b));
}
tem(12, "12", true);
tem(12, "12");
function tipo(x, y) {
    console.log("".concat(x, " : ").concat(y));
}
tipo(2022, true);
tipo('sim', false);
var person = { name: "Feli", age: 2022 };
console.log(person);
var person2;
var pessoa = person2 = { char: "ORO", resets: 200 };
console.log(pessoa);
function mugnn(obj) {
    console.log("".concat(obj.name, " | ").concat(obj.vip));
}
var cell = { name: "MG", vip: true };
mugnn(cell);
var end = { id: 123, rua: "Paranapiacaba" };
console.log(end);
var Char = /** @class */ (function () {
    function Char(name, resets, vip) {
        this.name = name;
        this.resets = resets;
        this.vip = vip;
    }
    return Char;
}());
function showit(obj) {
    console.log("".concat(obj.name, " : ").concat(obj.resets, " : ").concat(obj.vip));
}
var novo = new Char("OROCHI", 2000, true);
showit(novo);
