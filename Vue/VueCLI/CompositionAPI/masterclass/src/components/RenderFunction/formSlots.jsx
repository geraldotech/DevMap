import { h } from 'vue'
// chatgtp
export default {
  props: ['message'],
  setup(props, { slots }) {

    // shortHand
    const {message} = props
    return () => {
      // Render function
      return h('div', [
        //   // Array of child elements

        h('h1', 'Welcome to My Component'), // Child element 1
        h('h2', message), // Child element 2
        
       
        
        // Slot example
        slots.default && slots.default(), // Rendering the default slot content


        
        // Footer slot
        slots.footer?.({exemploprops: 'This is the footer content'}) // Rendering the footer slot content
      ])
    }
  }
}