<script setup lang="jsx">
import HelloWorld from './components/HelloWorld.vue'
import Xcomputed from './components/computed/computed.vue'
import Xcomputed2 from './components/computed/computedsetup.vue'

import Xwatch from './components/watch.vue'
import XLifeCycle from './components/LifeCycle/LifeCycle.vue'
import Bar from './components/RenderFunction/bar'
import RenderFN from './components/RenderFunction/RenderFN.vue'
import cssScopedModule from '@/components/cssScopedModule.vue'

import propsSlotsEmits from './components/Props_slots_emit/propsSlotsEmits.vue'


import DefineModelParent from '@/components/defineModel/defineModelParent.vue'
import DefineExposeX from '@/components/defineExpose.vue'
import DefineOptions from '@/components/defineOptions.vue'

console.log(DefineOptions)

import APISET from '@/components/API_setup_export/API_setup_Export_return.vue'

/* === VUE === */
import { ref, reactive, h, computed, onMounted } from 'vue'

const instance = ref()

onMounted(() => {
  console.log(instance.value.a)
})
</script>

<template>

<section>
  <h1>API setup export, props, components</h1>
  <APISET/>
</section>

  <h1>Have trust in the progress</h1>
  <section>
    <h1>computed</h1>
    <Xcomputed />

    <Xcomputed2 />
  </section>
  <section>
    <h1>watch</h1>
    <Xwatch />
  </section>
  <section>
    <h1>LifeCycle</h1>
    <XLifeCycle if="true" />
  </section>

  <section>
    <h1>RenderFN.vue</h1>
    <RenderFN />
  </section>

  <section>
    <h1>App.vue/bar.jsx</h1>
    <Bar />
  </section>

  <section>
    <h1>Props...</h1>
    <propsSlotsEmits />
  </section>

  <section>
    <h1>cssScopedModule.vue</h1>
    <cssScopedModule />
  </section>


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
