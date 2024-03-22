import myComponent from './components/MyComponent.js'
import Heading from './components/Heading.js'
import Test from './components/test.js'
import Counter from './components/Counter.js'

const { createApp, ref, onMounted } = Vue

export default createApp({
  components: {
    'my-component2': myComponent,
    Heading: Heading,
    Counter: Counter,
  },
  setup() {
    const message = ref('Hello World!')

    return {
      message,
    }
  },
  data() {
    return {}
  },
  component: {
// better use only top option...
  },
  template: `
  <p>{{message}}</p>
    <test abc="ABC"/>
    <Heading title="Welcome"/>
    <Counter/>
  `,
})
  .component('test', Test)
  .mount('#app')
