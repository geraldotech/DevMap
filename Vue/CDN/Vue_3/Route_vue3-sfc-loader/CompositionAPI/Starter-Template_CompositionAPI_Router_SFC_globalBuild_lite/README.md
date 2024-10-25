- Router load .vue
- Router load string templates
- Type-module for better coding
- App as parent of subcomponentes melhor controle dos componentes baseado no Vue CLI
- myHeader is set CSS Global mode
- NavBar has router-links e no App.vue tem o router-view
- type-module pq vai precisar importar o rotas.js
- em inves de chamar o component `<MyHeader></MyHeader>` just call `<MyHeader />`

New Version condiderações:

```js
// old 
module.exports = {
  data() {
    return {
      name: 'Geraldo',
    }
  },
}
// Best with Composition API 
import { ref } from 'vue'
export default {
  setup() {
    const name = ref('Geraldo')

    return {
      name,
    }
  },
}

// super pro us using setup atrribute <script setup>.... 
import {ref} from 'vue'

const name = ref('Geraldo')

// the setup attrubte enable natives imports


// use jsx syntax
```

## Erros:

Fixied error:
"defineAsyncComponent()". Write "() => import('

https://stackoverflow.com/questions/67044999/how-to-use-createasynccomponent-in-vuerouter4-0-0-vue3
