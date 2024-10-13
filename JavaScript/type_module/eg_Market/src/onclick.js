function icanFly(){
  console.log(`yes`)
}


// module type applied to your JavaScript, functions are scoped to the module and not available globally. you need register
window.icanFly = icanFly