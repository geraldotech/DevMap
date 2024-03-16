import { h } from 'vue'
export default {
  props: {
    seunome: String,
  },
  setup(props) {
    return () => h('h1', props.seunome)
  },
}
