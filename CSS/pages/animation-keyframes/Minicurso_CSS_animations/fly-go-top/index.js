const root = document.querySelector('#root')


setInterval(() => {
  root.textContent = Math.random()
}, 500) 


/* function canDrink(person){
  if(person?.age != null){
    if(person.age < 18){
      console.log(`Node 🐣`)
    } else if(person.age < 21){
      console.log(`Not in the USA 😮`)
    } else {
      console.log(`Yes 🍺`)
    }
  } else {
    console.log(`You are not a person`)
  }
}
 */


/* v1 better code */
/* function canDrinkBetter(person){
  if(person?.age == null) {
    console.log(`you are not a person`)
    return
  } 

  if(person.age < 18){
    console.log(`Node 🐣`)
    return
  }

  if(person.age < 21){
    console.log(`Not in the USA 😮`)
    return
  }
  console.log(`Yes 🍺`)
}

canDrinkBetter(p) */

/* v2 better code */
function canDrinkBetter(person){
  if(person?.age == null) {
    console.log(`you are not a person`)
    return
  } 
  let  result
  if(person.age < 18){
    result = (`Node 🐣`)
    
  } else if(person.age < 21){
    result = (`Not in the USA 😮`)
  } else {
    result = `Yes 🍺`
  }

  console.log(result)
}
const p = {
  age: 22
}

canDrinkBetter(p) 



