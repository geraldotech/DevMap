<script setup>
import { ref, reactive, watch, watchEffect } from 'vue'

/*  API */
const name = ref('')
const pageCount = ref(5)
const data = ref(null)
const redCar = ref(false)
const blueBall = ref(false)
const foo = ref(false)

const user = reactive({
  name: '',
  last: '',
})

const admin = ref({
      name: 'admin',
      last: 'master',
    })


/* FNs */
const saveUserName = () => {
  console.log('save', name)
}

function changePage() {
  console.log(`pagination`)
}

const changeAdmin = () => admin.value.name = 'Geraldo'

//Hooks
// https://vuejs.org/guide/essentials/watchers.html

// without deep true
watch(() => admin.value.name, () => {
  console.log(`admin has changed callback`)
})

// watch entire object
watch(admin, () => {
  console.log(`admin has changed`)
}, {
  deep: true // a ref only workis with deep, because is watching a entire object
})

watch(name, (newValue, oldValue) => {
  console.log(`alterando`)
  console.log(newValue, oldValue)
  if (newValue.length > 3) {
    saveUserName()
  }
})

watch(pageCount, () => {
  changePage()
})

watch(user, () => {
  console.log(`User changed`)
})

/* watch all toys*/

/*  specifically keep an eye on just one of your toys?*/

watch([redCar, blueBall], (newValue, oldValue) => {
  redCar.value && console.log(`someone has taken one of your toys away `)
  blueBall.value && console.log(`someone has taken one of your toys away `)

  if (redCar.value && blueBall.value) {
    console.log(newValue, oldValue)
    console.log('Somebody has taken both the red car and the blue ball!')
  }

  
  if(foo.value){
    console.log(`foo changed`)
  }
})

watchEffect(() => {
  redCar.value && console.log(`someone has taken one of your toys away `)
  blueBall.value && console.log(`someone has taken one of your toys away `)

  if (redCar.value && blueBall.value) {
    console.log('Somebody has taken both the red car and the blue ball!')
  }

  if(foo.value){
    console.log(`foo changed`)
  }
})

watchEffect(async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
  const data = await response.json()
  console.log(data)
})
</script>
3
<template>
  <h1>watch examples</h1>

  <div>
    <input
      type="text"
      v-model="name"  placeholder="watch a name ref"  />
    <p>{{ name }}</p>
  </div>

  <div>
    <p>watch a pageCount</p>
    <select v-model="pageCount">
      <option value="5">5</option>
      <option value="10">105</option>
      <option value="15">15</option>
    </select>
  </div>

  <div>
    <input
      type="text"
      v-model="user.name"
      placeholder="watch user.name" 
      />
      <br>
    <input
      type="text"
      v-model="user.last"
      placeholder="watch user.last" 
      />

    <p>{{ user.name }} - {{ user.last }}</p>
  </div>
  <hr />
  <input
    type="checkbox"
    id="red"
    v-model="redCar"
    placeholder="redCar" />
  <label for="red">Red Card</label>

  <input
    type="checkbox"
    id="blue"
    v-model="blueBall"
    placeholder="blueBall" />
  <label for="blue">Blue Car</label>


  <input
    type="checkbox"
    id="foo"
    v-model="foo"
    placeholder="Foo" />
  <label for="foo">Foo</label>


 <p>
  Test deep: true
  <button @click="changeAdmin">changeAdmin()</button>
 </p>

</template>
