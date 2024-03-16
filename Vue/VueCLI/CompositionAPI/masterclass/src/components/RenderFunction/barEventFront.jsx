import barEvent from './barEvent.jsx'
//console.log(.title.value)
//console.log(bar())
export default function barEventFront() {
  //setup() {
    const { title, clickMessage, onClick } = barEvent.setup() 

    return (
      <>
        <h3>React JSX My bar is {title.value}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates pariatur doloribus porro id in modi dolorem laudantium magnam, nulla</p>
        <button onClick={onClick}>onClick</button>
        <p>{clickMessage.value}</p>
      </>
    )
  //},
}
