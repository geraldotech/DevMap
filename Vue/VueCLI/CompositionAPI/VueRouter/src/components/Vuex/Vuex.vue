<script setup>
import AppProducts from './Products/AppProducts.vue'
import Moduletest from './Moduletest.vue'
import { useStore } from 'vuex'

// instance of VueEx
const store = useStore()
//console.log(store.state.user)

// to call fn use commit

const felData = {
  name: 'Felipe Costa',
  city: 'Maceio',
}

// first params is a func,
// second is a payloa to update
function updateFelipe() {
  store.commit('storeUserFel', felData)
}

const cleanUserData = () =>  store.commit('cleanUserData')

const updateAction = () => store.dispatch('storeMyUser', felData)

const updateAction2 = () => { store.dispatch('storeMyUserIsa', {name: 'Isabella Freitas', city: 'Palmeira'}).then(() => {
  console.log(`terminou a promessa`)
})
 }

</script>
<template>
  <p>How to Avoid Prop Drilling in Vue</p>
  <p>
    <a href="https://vuex.vuejs.org/api/#usestore">https://vuex.vuejs.org/api/#usestore</a>
  </p>
  <p>to install: <code>$ vuex vue add vuex</code></p>
  <!--  <p>{{ user.name }}</p> -->
  <section>
    <p>Name:{{ store.state.user.name }}</p>
    <p>city:{{ store.state.user.city }}</p>
    <button @click="updateFelipe">updateFelipe [Felipe]</button>
    <button @click="cleanUserData">cleanUserData [error]</button>
    
  </section>


  <section> 
    <AppProducts />
  </section>

  <section>
    <ul>
      <li><b>Mutations:</b> Mutations are synchronous functions that directly mutate the state. They are meant for making changes to the state in a predictable manner. Mutations should be used for simple, synchronous state changes. They are called using commit() method.

        <p>Use mutations when you need to directly mutate the state synchronously</p>
      </li>
      <li>
        <b>Actions:</b> Actions are asynchronous functions that can contain arbitrary business logic, including asynchronous operations such as API calls. They are meant for more complex operations, coordinating multiple mutations, or performing asynchronous tasks before committing mutations. Actions are called using dispatch() method.

        <p>Actions</p>
      </li>
    </ul>
  </section>

  <section>
    <h1>{actions} dispatch</h1>
    <p>Perform Promisses</p>
    <button @click="updateAction">update using Action [Fel]</button>
    <button @click="updateAction2">update using Action2 [obj]</button>
  </section>

  <section>
    <h1>{modules}</h1>
    <Moduletest />
  </section>
</template>
