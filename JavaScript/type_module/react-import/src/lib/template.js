import Header from './header.js'
import Footer from './footer.js'

console.log(Footer)

export default function Container() {
  return `
  ${Header()}
  <main>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus labore ab a eligendi repudiandae enim possimus libero nobis? Repellendus placeat doloribus minus dignissimos explicabo voluptatum, aperiam eius consectetur nesciunt libero!</p>
  </main>
  ${Footer}
 
  `
}
