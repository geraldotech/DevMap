<script setup>
import { useStore } from 'vuex'
import { ref, computed } from 'vue'



// const to
const props = defineProps({
  product: Object,
})
const store = useStore()
const itensCard = ref(0)

function addProduct() {
  // commit to state
  // debug from checkout VueDevTools
  store.commit('addProduct', props.product)
  count()
}

const removeProduct = () => {
  console.log(props.product.id)
  store.commit('removeProduct', props.product.id)
  count()
}

const count = () => {
  // this if handler with empy array, so reduce nao consegue fazer o if e update o itensCard.value to 0
  if (store.state.cart.length === 0) {
    itensCard.value = 0
  }
  store.state.cart.reduce((acc, obj) => {
    if (obj.id === props.product.id) {
      acc++
    }
    return (itensCard.value = acc)
  }, 0)
}

const checkItemCart = computed(() => {
  // checkout this item has in cart
  const check = store.state.cart.findIndex((obj) => obj.id == props.product.id)

  return check != -1 ? true : false
})
</script>
<template>
  <div class="cart">
    <p class="proinfo">Product: {{ product.name }} - Price: {{ product.price }}</p>
    <p class="quant">Quant: {{ itensCard }}</p>
    <nav>
      <button
        v-show="checkItemCart"
        @click="removeProduct">
        Remove
      </button>
      <button @click="addProduct">Add</button>
    </nav>
  </div>

</template>
<style scoped>
.cart {
  display: grid;
  grid-template-rows: 1;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 10px;
  margin: 5px auto;
  background: bisque;
  padding: 5px;
  color: #000;
}
.cart nav {
  place-self: end;
}

.cart .proinfo {
  place-self: start;
}
</style>
