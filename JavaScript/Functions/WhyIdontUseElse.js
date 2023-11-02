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
function canDrinkBetter(person) {
  if (person?.age == null) {
    console.log(`you are not a person`)
    return
  }
  let result
  if (person.age < 18) {
    result = `Nope 🐣`
  } else if (person.age < 21) {
    result = `Not in the USA 😮`
  } else {
    result = `Yes 🍺`
  }

  console.log(result)
}
const p = {
  age: 18,
}

canDrinkBetter(p)

function canDrinkResponse(age) {
  if (age == null) return 'You are not a person'
  if (age < 18) return `Nope 🐣`
  if (age < 21) return `Not in the USA 😮`
  return 'Yes 🍺'
}

console.log(canDrinkResponse())
