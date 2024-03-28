/* const pessoas = {
  name: 'Geraldo'
}

const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

console.log(`MyTemplate.js`) */


const msn = 'message'

function mytemplate(){
  return () => Vue.h('div', 'Your test coming here');
}


mytemplate()