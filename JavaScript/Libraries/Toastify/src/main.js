/* === Imports === */

/* === UI === */

/* == UI - Elements == */

const input = document.querySelector('input')

/* === State  === */

/* === Main Code === */

input.addEventListener('input', () => {
  const inputValue = parseInt(event.target.value)

  

  if(isNaN(inputValue)) {
    return
  }


  const keys = [1,2,3,4,5];
  const check = keys.some((val) => [inputValue].includes(val))
  

  
 if(check){
    Toastify({
      text: 'Correct!!!',  
      duration: 2000,
      position: 'center',
    }).showToast()
  } 

  if(!check){

    Toastify({
      text: 'Wrong!!!',  
      style: {
        background: "red",
      },
      offset: {
        x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
        y: 0 // vertical axis - can be a number or a string indicating unity. eg: '2em'
      },
      duration: 2000,
     position: 'right',
    gravity: 'bottom'
    }).showToast()

  }



})



/* === Functions === */

/* = Functions - UI Functions - Mood = */

const btn = document.querySelectorAll('button')

btn[0].onclick = function () {
  Toastify({
    text: 'This is a toast',
    duration: 3000,
    destination: 'https://github.com/apvarun/toastify-js',
    newWindow: true,
    close: true,
    gravity: 'top', // `top` or `bottom`
    position: 'left', // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: 'linear-gradient(to right, #00b09b, #96c93d)',
    },
    onClick: function () {
      console.log(`ok`)
    }, // Callback after click - disable destination to work
  }).showToast()
}

btn[1].onclick = function () {
  Toastify({
    text: 'This is a toast with offset',
    offset: {
      x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
      y: 10, // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
    onClick: function () {
      console.log(`ok`)
    }, // Callback after click
  }).showToast()
}
btn[2].onclick = function () {
  Toastify({
    text: 'This is a toast',

    duration: 3000,
    position: 'center',
  }).showToast()
}
