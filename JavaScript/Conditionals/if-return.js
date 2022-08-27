//so funciona com functions
check(21);

function check(x){
    if(x === 82){
        return console.log('AL');
    }
    if(x === 21){
        return console.log("RJ");
    }
    if(x === 11){
        return console.log("SP");
    }
    return console.log('register now!');
}


//if return 

function idade(a){
    if(a === 30) {
      console.log('trinta')
      return;
    }
    if(a > 30) {
      console.log('maior trinta')
      return;
    }
    console.log('not condicional')
  }
  
  idade(31);