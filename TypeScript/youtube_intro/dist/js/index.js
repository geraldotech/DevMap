"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
x = 18;
console.log(x);
let y = 12;
let z = 12;
let Firtname = "Geraldo";
console.log(Firtname);
Firtname = "Felipe";
console.log(Firtname);
const mynum = [1, 2, 3, 4];
console.log(mynum.length);
const users = {
    name: "Gerald",
    age: 29
};
console.log(users);
console.log(users.name);
let myTuple;
myTuple = [6, "oi", "ola"];
myTuple = [true, false, true];
let a = 0;
a = "test",
    a = 5;
a = true;
a = [];
let id = 10;
id = 11;
id = "Geraldo";
const user = 10;
const productId = "001";
var size;
(function (size) {
    size["P"] = "Pequeno";
    size["M"] = "Media";
    size["G"] = "Grande";
})(size || (size = {}));
const camisa = {
    name: "Camisa Gola V",
    size: size.G,
};
console.log(camisa);
console.log(`Geraldo veste ${size.G}`);
let teste;
teste = "atenticado";
teste = null;
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));
function sayhello(name) {
    return `Hello ${name}`;
}
console.log(sayhello("gecode.dev"));
function logger(msg) {
    console.log(msg);
}
logger("test!");
function greeting(name, greet) {
    console.log(`Olá ${greet} ${name}`);
}
greeting("Geraldo");
function greeting2(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
    }
    else {
        console.log(`Ola ${name}`);
    }
}
greeting2("Geraldo");
function greeting3(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Ola ${name}`);
}
greeting3("Costa");
function sumNum(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNum({ n1: 1, n2: 2 }));
function mul(nums) {
    return nums.n1 * nums.n2;
}
const multNums = {
    n1: 5,
    n2: 2
};
console.log(mul(multNums));
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`o numero é ${info}`);
        return;
    }
    console.log("nao foi passado um numero");
}
doSomething(1);
doSomething(true);
function showArrays(arr) {
    arr.forEach((item) => {
        console.log(`ITEM ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArrays(a1);
showArrays(a2);
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUsername() {
        console.log(`O nome do usuario é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`O nome do usuario é ${this.role}`);
            return;
        }
        console.log("informação restrita");
    }
}
const zeca = new User("zero", "admin", true);
console.log(zeca);
zeca.showUsername();
zeca.showUserRole(false);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand} `);
    }
}
const fusca = new Car("WV", 4);
console.log(fusca);
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
class Person2 {
    constructor(name) {
        this.name = name;
    }
}
const sam2 = new Person2("Sam");
console.log(sam2);
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person("Sam");
console.log(sam);
