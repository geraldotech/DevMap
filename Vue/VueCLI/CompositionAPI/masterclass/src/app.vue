<script setup lang="jsx">
import HelloWorld from './components/HelloWorld.vue'
import Xcomputed from './components/computed.vue'
import Xwatch from './components/watch.vue'
import XLifeCycle from './components/LifeCycle.vue'
import Bar from './components/RenderFunction/bar.jsx'
import RenderFN from './components/RenderFunction/RenderFN.vue'
import Slots from './components/Slots.vue'
import cssScopedModule from '@/components/cssScopedModule.vue'
import PropsAlert from './components/PropsAlerta.vue'
import PropsAlertaComputed from './components/PropsAlertaComputed.vue'
import PropsAlertaEmit from './components/PropsAlertaEmit.vue'
import DefineModelParent from '@/components/defineModel/defineModelParent.vue'
import DefineExposeX from '@/components/defineExpose.vue'
import DefineOptions from '@/components/defineOptions.vue'

console.log(DefineOptions)

/* === VUE == */
import { ref, reactive, h, computed, onMounted } from 'vue'

const showheader = ref(false)
const showAlert = ref(true)
const filmeList = { title: 'Movie', year: 2029 }
const variant = 'danger'

const instance = ref()

const handleClose = (event) => {
  console.log('close', event.target)
  showAlert.value = !showAlert.value
}

onMounted(() => {
  console.log(instance.value.a)
})
</script>

<template>
  <h1>Have trust in the progress</h1>
  <section>
    <p>computed</p>
    <Xcomputed />
  </section>
  <section>
    <p>watch</p>
    <Xwatch />
  </section>
  <section>
    <p>lifecycle</p>
    <XLifeCycle />
  </section>

  <section>
    <p>RenderFN.vue</p>
    <RenderFN />
  </section>

  <section>
    <p>App.vue/bar.jsx</p>
    <Bar />
  </section>

  <section>
    <p>Slots.vue</p>

    <Slots>
      <template #title> Geraldo </template>
      <template v-slot:description>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae accusamus, perspiciatis corporis repellendus ex vitae tempore, hic consequuntur nulla ipsam quasi veniam, nostrum nam ut! Sit
          amet asperiores voluptatem harum.
        </p>
      </template>

      <template #card> your card number </template>

      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores a fuga ex ducimus deleniti nesciunt reiciendis consequuntur in. Aperiam mollitia error laboriosam numquam sed doloremque eos
      rerum at quaerat delectus?
    </Slots>
  </section>

  <section>
    <p>cssScopedModule.vue</p>
    <cssScopedModule />
  </section>

  <section>
    <p>Props...</p>

    <PropsAlert variant="" />
    <PropsAlert variant="success" />
    <PropsAlert variant="danger" />
    <h1>Props Computed</h1>
    <PropsAlertaComputed />
    <PropsAlertaComputed :variant="variant" /> -->

    <PropsAlertaComputed
      variant="success"
      day="Saturday"
      :filme="filmeList">
      // pass a inline object props always warn Expected Object, got String
      <h1>slots for content and props for behavior</h1>
      <template #head>
        <h1>Welcome</h1>
      </template>
    </PropsAlertaComputed>
  </section>

  <h2>
    for script setup checkout...
    <a
      href="https://vuejs.org/guide/components/props.html#props"
      target="_blank"
      >props.html#props</a
    >
    -
    <a
      href="https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits"
      target="_blank"
      >define Props / defineEmits
    </a>
  </h2>
  <PropsAlertaEmit
    v-if="showAlert"
    @close="handleClose" />

  <section>
    <h1>
      <a
        href="https://vuejs.org/api/sfc-script-setup.html#definemodel"
        target="_blank"
        >defineModel 3.4</a
      >
    </h1>
    <DefineModelParent />
  </section>

  <section>
    <h1>
      <a
        href="https://vuejs.org/api/sfc-script-setup.html#defineexpose"
        target="_blank"
        >defineExposed</a
      >
    </h1>
    <p>
      Components using scriptsetup are closed by default - i.e. the public instance of the component, which is retrieved via template refs or $parent chains, will not expose any of the bindings
      declared inside scriptsetup
    </p>
    <DefineExposeX ref="instance" />
    <p>{{ instance }}</p>
  </section>

  <section>
    <DefineOptions />
  </section>

  <header>
    <div class="wrapper">
      <!--       <HelloWorld msg="You did it!" /> -->
      <nav>
        <!--  <RouterLink to="/">Home </RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

h1 {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  padding: 3px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

div {
  padding: 1rem;
}
</style>
