// 1 - Arrays
var numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers[2]);
var names = ["Geraldo", "Costa"];
console.log(names);
// 2 - outra sintaxe array
var arr = [100, 5, 23, 5];
console.log(arr[0]);
// 3 - any
var arr1 = ['test', 1, { nome: "Geraldo" }];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
// 4 - parametros tipados
function somar(a, b) {
    console.log(a + b);
}
somar(4, 2);
// 5 - tipo de retorno de funções
//bloquear esse tipo de retorno numero add :string afer ()
//function greeting(name:string):string {
function greeting(name) {
    return "Ola ".concat(name);
}
console.log(greeting("Geraldo"));
// 6 - função anonima
setTimeout(function () {
    var salarry = 1000;
    //console.log(parseFloat(salarry))
    //console.log(salarry)
}, 2000);
// 7 - tipos de objeto
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
var ObjCoord = { x: 329, y: 84.2 };
passCoordinates(ObjCoord);
var pessoaObj = { nome: "Geraldo", surname: "Filho" };
console.log(pessoaObj);
// 8 - Propriedades opcionais
/*
Para ter esse resultado devemos colocar uma interrogação:
{nome: string, sobrenome?: string}
*/
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) { //se tiver C imprime // isso tbm remove a mensagem de undefined
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(1, 2); //sem erros pq ao adicionar ? define que o C é opcional
// 9 - validando argumento opcional - validação de props opcionais
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return ("Ol\u00E1, ".concat(firstName, " ").concat(lastName, ", tudo bem?"));
    }
    return ("Ola, ".concat(firstName, ", tudo bem?"));
}
console.log(advancedGreeting("Geraldo", "Filho"));
console.log(advancedGreeting("Felipe"));
// 10 - Union types exclusido do TS
/*
- O Union type é uma alternativa melhor do que o any;
- Onde podemos determinar dois tipos para um dado;
- Onde podemos determinar dois tipos para um dado;
A sintaxe: number | string
*/
function showBalance(balance) {
    console.log("o saldo da conta \u00E9 R$".concat(balance));
}
showBalance(100);
showBalance("500");
var arr2 = [1, "tes"];
/*
11 - Avançando em union types

- Podemos utilizar condicionais para validação do tipo de union types;
- Com isso é possível trilhar rumos diferentes, baseado no tipo de dado;
-  Para checar o tipo utilizamos typeof; */
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuario não aprovado";
    }
    return "A fun\u00E7\u00E3o do usu\u00E1rio \u00E9 ".concat(role);
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log("O ID \u00E9 ".concat(id));
}
showId(1);
showId("300");
function showIP(ip) {
    console.log("Meu IP: ".concat(ip));
}
showIP("192.168.0.5");
function showCoords(obj) {
    console.log("X: ".concat(obj.x, " Y:").concat(obj.y, " Z:").concat(obj.z));
}
var coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
var somePerson = { name: "Geraldo", age: 29 };
console.log(somePerson);
/*
15 - Literal types

- é um recurso que permite colocar valores como tipos;
- Isso restringe o uso a não só tipos, como também os próprios valores;
- Este recurso é muito utilizado com Union types
_double check_
*/
//não tem muito nexo
var test;
test = "testando";
console.log(test);
//e.g com Union Type
function showDirection(direction) {
    console.log("A dire\u00E7\u00E3o \u00E9: ".concat(direction));
}
showDirection("left");
/*
16 - Non-null Assertion Operator

Às vezes o TypeScript pode evidenciar um erro, baseado em um valor
que no momento do código ainda não está disponível
Porém se sabemos que este valor será preenchido, podemos evitar o erro;
Utilizamos o caractere !
*/
var p = document.getElementById("some_p");
console.log(p.innerText);
console.log(p.innerText);
