const { createApp, ref, onMounted, h, resolveComponent, defineAsyncComponent } = Vue

const app = Vue.createApp({})

autoload('Typescript')
const body = document.querySelector("body")
console.log(body)
app.mount(body)


