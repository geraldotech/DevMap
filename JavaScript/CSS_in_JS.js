//write css inside JavaScript

//1

    document.head.innerHTML += `
    <style>
      img{ 
        width: 20%;
      }
      div{
       display: flex;
       height: 100vh;
       justify-content: center;
       align-items: center;
       flex-direction: column;
      }
    </style>
    `


//2
  const style = document.createElement("style")
style.textContent = "h1 { background-color: red; }"
document.head.appendChild(style)

//3 - external
  document.head.insertAdjacentHTML( 'beforeend', '<link rel=stylesheet href=/foo.css>' );