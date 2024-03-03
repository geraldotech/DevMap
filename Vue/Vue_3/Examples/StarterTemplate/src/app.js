
import myComponent from "./components/MyComponent.js"
import Heading from "./components/Heading.js"
import Test from './components/test.js'
import Counter from "./components/Counter.js"

const { createApp,  ref, onMounted } = Vue

export default createApp({ 
  data(){
    return {
      message: 'Hello'
    }
  },
  components: {
    'my-component2':  myComponent,
    'Heading': Heading,
    'Counter': Counter,
  },
  template: `
    <test abc="ABC"/>
    <Heading title="Welcome"/>
    <Counter/>
  `
})
.component("test", Test)
.mount('#app')