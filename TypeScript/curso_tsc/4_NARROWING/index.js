/*
Narrowing é um recurso de TS para identificar tipos de dados;
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1 type guard
/*
O type guard é basicamente uma validação do tipo utilizando o typeof;
● Desta maneira podemos comparar o retorno do operador com um
possível tipo;
● Todos os dados vem como string, exemplo: “string”, “number”,
“boolean
*/
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log('impossivel realizar a soma');
    }
}
sum("2", "2");
sum(24, 2);
sum(2, "2");
/* 2 - Checando se valor existe
*/
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            var sum_1 = arr.reduce(function (i, total) { return i + total; });
            console.log(sum_1);
        }
        else if (operation === "multiply") {
            var mul = arr.reduce(function (i, total) { return i * total; });
            console.log(mul);
        }
    }
    else {
        console.log("definir uma operacao");
    }
}
operations([1, 2, 3, 4], "sum");
operations([1, 2, 3, 4], "multiply");
// 3 - Operador instanceof
/*
Para além dos tipos primitivos, podemos trabalhar com instanceof
Checando se um dado pertence a uma determinada classe;
E ele vai servir até para as nossas próprias classes;
*/
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(name) {
        return _super.call(this, name) || this;
    }
    return SuperUser;
}(User));
var john = new User("John");
var eu = new SuperUser("Geraldo");
console.log(john);
console.log(eu);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log("Ol\u00E1, ".concat(user.name, " your is Admin Premium"));
    }
    else if (user instanceof User) {
        console.log("Ol\u00E1, ".concat(user.name));
    }
}
userGreeting(eu);
userGreeting(john);
// 4 - operador in
// O operador in é utilizado para checar se existe uma propriedade no objeto
var Dog = /** @class */ (function () {
    function Dog(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
    return Dog;
}());
var turca = new Dog("Turca");
var dod = new Dog("Bob", "Pastor Alemão");
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log("O cachorro \u00E9 da ra\u00E7a ".concat(dog.breed));
    }
    else {
        console.log("O cachorro \u00E9 um srd");
    }
}
showDogDetails(turca);
showDogDetails(dod);
//ts é preencher os requisitos que a gente mesmo difinou
