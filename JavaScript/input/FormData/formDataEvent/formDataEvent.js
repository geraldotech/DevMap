const form = document.querySelector('form')

form.onsubmit = () => {
  event.preventDefault()

  const formData = new FormData(event.target) // always return a empty {}
  console.log(formData.get("user"))

  const formObj = Object.fromEntries(formData)
  console.log(formObj)


  console.log(`==================`)

  // shorthands by gmapdev
  const data = Object.fromEntries(new FormData(event.target)) // or form tag
  console.log(data.user)


  //  destructuring
  const { user, pwd } = data
  console.log(user, pwd)
}


function setSelectedOption(value) {
  const selectCat = document.getElementById('selectCat');
  const options = selectCat.options;

  for (let i = 0; i < options.length; i++) {
    if (options[i].value === value) {
      options[i].selected = true;
      break;
    }
  }
}

// Set selected option to "Android"
setSelectedOption("Music");

/* =============================== */

const test001 = document.getElementById('test001')
test001.onsubmit = function (e) {
  e.preventDefault()
  const name = document.Formsman.yourname.value
  const selectedOption = document.Formsman.escola.value
  console.log(name, selectedOption)
}