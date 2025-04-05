const { createApp, ref, onMounted, defineCustomElement } = Vue

const buttonImporAC = Vue.defineAsyncComponent(() => loadModule('./src/components/Button.vue', options))

// imports 1
const ButtonAlpha = imports('./src/components/Button.vue')

// autoimports 2
const ButtonBravo = autoimports('Whatis')
const Buttoncharlie = autoimports('Whatis')

const app = Vue.createApp({
  components: {
    Mbutton: Vue.defineAsyncComponent(() => loadModule('./src/components/Button.vue', options)),
    Zbutton: buttonImporAC,
    Buttonalpha: ButtonAlpha,
    custombutton: ButtonAlpha,
    whatisthat: imports('./src/components/Whatis.vue'),
    youtubecom: autoimports('Youtube'),
    goingto: ButtonBravo,
    nowyousee: 'ok',
  },
  setup() {
    const message = ref('Hello World!')

    return {
      message,
    }
  },
})

/* app.component + autoimports */
app.component('componenta', autoimports('Youtube'))

/* custom using object */
app.component('Buttoncharlie', {
  template: `Hello`,
})

/* autoload  3 + direct inject on app.vue */
autoload('Typescript')

app.mount('#app')
