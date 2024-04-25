function sweetAlert(){
  Swal.fire("SweetAlert2 is working!");
}
function sweetQuestion(){
Swal.fire({
  title: "The Internet?",
  text: "That thing is still around?",
  icon: "question"
});
}
function sweetError(){
Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
}

async function sweetInput(){
 	const { value: email } = await Swal.fire({
  title: "Input name",
  input: "text",
  inputLabel: "Enter your name",
  inputPlaceholder: "Enter your name"
});
if (email) {
  Swal.fire(`Entered name: ${email}`);
}
}

async function Select(){
  const { value: fruit } = await Swal.fire({
  title: "Select field validation",
  input: "select",
  inputOptions: {
    Fruits: {
      apples: "Apples",
      bananas: "Bananas",
      grapes: "Grapes",
      oranges: "Oranges"
    },
    Vegetables: {
      potato: "Potato",
      broccoli: "Broccoli",
      carrot: "Carrot"
    },
    icecream: "Ice cream"
  },
  inputPlaceholder: "Select a fruit",
  showCancelButton: true,
  inputValidator: (value) => {
 
    return new Promise((resolve) => {
       resolve(addText(`You selected: ${value}`))
    /*  if (value === "oranges") {
        resolve();
      } else {
        resolve("You need to select oranges :)");
      }  */
    });
  }
});
// if want show message after click
if (fruit) {
 // Swal.fire(`You selected: ${fruit}`);
}
function addText(txt){
  document.getElementById('res').textContent = txt;
}
}


function ToggleClassTest(){
  Swal.fire({
    title: "Custom animation with Animate.css",
    showClass: {
      popup: `
        animate__animated
        animate__fadeInDown
      `
    },
    hideClass: {
      popup: `
        animate__animated
        animate__bounceOutUp
      `
    }
  });
}


function checkOk(){
  
  // Trigger SweetAlert dialog
  Swal.fire({
    title: 'SweetAlert!',
    text: 'This is a SweetAlert dialog.',
    icon: 'success',
    confirmButtonText: 'OK'
}).then((result) => {
    // Check if the user clicked the "OK" button
    if (result.isConfirmed) {
        // Call your function here
        myFunction();
    }
});

// Define your function to be executed after confirmation
function myFunction() {
// Code to execute after the user clicks "OK"
console.log('User clicked OK');
}
}