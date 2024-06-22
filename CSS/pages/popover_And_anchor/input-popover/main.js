const input = document.querySelector('input')


input.oninput = () => {
  const str = event.target.value;
  info.showPopover()
  console.log(str.length)
  if(str.length < 5){
  //  info.classList.remove('green')
   info.classList.add('red')
   info.classList.replace('green', 'red')
  } 
  
  if(str.length > 5){
   // info.hidePopover()
  info.classList.replace('red', 'green')
  }
  
}