person = {
name: 'Geraldo',
age: 29,
city: 'Maceio',
}
console.log(person);
//show all infos
document.write(Object.values(person))+'<br>';
//show all with div
document.getElementById("objeto").innerHTML = Object.values(person);
//concatenar
document.write(person.name+" mora na cidade de "+person.city);
//concatenar
document.getElementById("objeto2").innerHTML = person.name +" idade atual: "+person.age;
