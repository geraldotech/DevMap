const { createApp, ref, onMounted, h, resolveComponent, defineAsyncComponent } = Vue

const app = Vue.createApp({})

autoload('Typescript')
const dvi = document.querySelector("div")
console.log(`dvi`, dvi.innerHTML)


console.log(dvi)
app.mount(dvi)


