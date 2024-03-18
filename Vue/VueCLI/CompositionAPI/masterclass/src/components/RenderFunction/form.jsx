import { h, ref } from 'vue'

export default {
  props: {
    yourname: String,
  },
  setup(props) {
    // parent and children
    const nome = ref('Filho')

    function changeName() {
      console.log(`click`)
      nome.value = 'Costa'
    }

    //⚠️ never use a const/let to return a vnode, return it direct , because is make not reactive
    //❌ const vnode =

    
    // 👉 or ou can return a arrow FN 
    // const template = () => h(...........
    // 👉 and return will call this FN 
    // return () => template()

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
    ])
     
  },
}
