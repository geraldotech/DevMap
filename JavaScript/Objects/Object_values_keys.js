const person = {
name: 'Geraldo',
age: 29,
city: 'Maceio',
}
console.log(person);
//show all with div
document.getElementById("objeto").innerHTML = Object.values(person);
//concatenar
document.write(person.name+" mora na cidade de "+person.city);
//concatenar
document.getElementById("objeto2").innerHTML = person.name +" idade atual: "+person.age;
//show values and keys
document.write(Object.values(person))+'<br>'; // Geraldo,29,Maceio
document.write(Object.keys(person)); // name, age, city

//multiple variables in one line
const persons = {
    nome:"Geraldo",
    surname:"Filho"
}

console.log(persons.nome);
console.log(persons.surname);


//forma resumida atribuir a uma const
const {nome, surname} = persons;
console.log(nome);
console.log(surname);
