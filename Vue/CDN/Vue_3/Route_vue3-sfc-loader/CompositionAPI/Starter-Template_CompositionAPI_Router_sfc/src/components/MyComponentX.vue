<script>
import { h, ref, resolveComponent, defineComponent, onMounted, getCurrentInstance, onBeforeMount, onBeforeUnmount } from 'vue'
import Cardcat from './cardcat.vue'
const MyAsyncComponent = Vue.defineAsyncComponent(() => Promise.resolve(MyTemplate));

//const MyTemplate = () => loadModule('./src/components/MyTemplate.js', options)

export default {
  components: {
    Cardcat,
    //call component and load a .js file
    MyTemplate: Vue.defineAsyncComponent(() => loadModule('../src/components/MyTemplate.js', options)),
    MyAsyncComponent,

    //  Fileis: () => load('./src/components/comjsx/cardMary.jsx'),
    /* cardMary, */

    //    CardMaryx: () =>
    //     loadModule('./src/components/sum.js', options)
    //
  },

  setup() {
    const name = ref('')
    const personData = ref('')
    const media = ref(0)

    function mediaDoAluno(x, y) {
      const soma = sum(x, y)
      return (media.value = soma / 2)
    }

    async function smartLoadScript(path) {
      // select the script
      const script = document.querySelectorAll('script[data-status]')

      // check script already exists, if not keep going...
      // void multiple appends
      if (!script.length) {
        const plugin = document.createElement('script')
        plugin.setAttribute('src', path, 'type')
        plugin.async = false

        return new Promise((resolve, reject) => {
          //  plugin.onload = resolve
          plugin.onerror = reject
          document.head.appendChild(plugin)

          plugin.addEventListener('load', () => {
            resolve()
            plugin.setAttribute('data-status', 'loaded')
            // works too console.log(sum(6, 4))
          })
        })
      }
    }

    onMounted(() => {
      /*   const instance = getCurrentInstance()
      console.log(instance.parent) */

      smartLoadScript('./src/components/sum.js').then(() => {
        console.log(sum(6, 4))
        // get name from loaded script
        name.value = person.name

        // calc sum, get dependece from sum.js
        mediaDoAluno(6, 10)

        console.log(person)
        personData.value = person
      })
    })

    return {
      name,
      media,
      personData,
    }
  },
}
</script>
<template>
  <div>
    <h1>MyComponentX</h1>
    <p>Name from script: {{ name }}</p>
    <p>FN from script: {{ media }}</p>
    <p>{{ personData }}</p>

    <Cardcat />

    <p class="test">
  <!--     <MyTemplate /> -->
    </p>

  <!--   <p>
      <MyAsyncComponent/>
    </p> -->

  </div>
</template>
