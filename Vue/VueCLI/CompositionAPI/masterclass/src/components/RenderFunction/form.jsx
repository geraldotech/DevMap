import { h } from 'vue'

export default {
  props: {
    yourname: String,
  },
  setup(props) {
    // parent and children

    const vnode = h('div', { id: 'id', class: 'classname' }, [
      '',
      h(
        'p',
        {
          onClick(event) {
            console.log(`was clicked`, event.target)
          },
        },
        'Hello 1 clicked-me'
      ),
      h('p', 'Hello 2 '),
      h('p', 'Hello 3'),
      h('h2', { id: 'barid', class: 'yourname' }, props.yourname),
    ])

    return () => vnode
  },
}
