// 1 - void
function withoutReturn() {
    console.log("Esta função não tem retorno!");
}
withoutReturn();
// 2 - callback como argumento
function greeting(name) {
    return "Ol\u00E1 ".concat(name);
}
function preGreeting(f, userName) {
    console.log("Preparando a função");
    var greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Geraldo");
preGreeting(greeting, "Felipe");
