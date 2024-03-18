import { h, ref } from 'vue'

export default {
  props: {
    yourname: String,
    password: String, // this props is passed to sharedProps component
  },
  setup(props) {
    // parent and children
    const nome = ref('Filho')

    function changeName() {
      console.log(`click`)
      nome.value = 'Costa'
    }

    console.log(props)

    //⚠️ never use a const/let to return a vnode, return it direct , because is make not reactive
    //❌ const vnode =

    
    // 👉 or ou can return a arrow FN 
    // const template = () => h(...........
    // 👉 and return will call this FN 
    // return () => template()


    // will be return in a h(...)
    const mycustomEl = () => <h2>My custom Element will be return with a h</h2>


    // sample prop 
    const mybestSong = ({songName}) => <p>My best songs is {songName}</p>

    // prop value is from parent
    const sharedProps = (props) => <h4>Your secret password is {props.password}</h4>

    return () =>  h('div', { id: 'id', class: 'classname' }, [
      '',
      h(
        'button',
        {
          onClick(event) {
            console.log(`was clicked`, event.target)
            event.target.innerHTML = 'New Value'
            nome.value = 'Petronilo'
          },
        },
        'clicked-me to make menu changes'
      ),
      h('p', 'Hello 2 '),
      h('button', { onClick: changeName }, 'click reactive form'),
      h('p', nome.value),
      h('h2', { id: 'barid', class: 'yourname' }, props.yourname),
      h(<mycustomEl/>),
      h(<mybestSong songName='Anti Hero'/>),
      h(<sharedProps password={props.password} />),
    ])
     
  },
}
