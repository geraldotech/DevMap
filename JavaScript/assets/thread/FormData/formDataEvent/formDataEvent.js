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
  const {user, pwd} = data
  console.log(user, pwd)
}