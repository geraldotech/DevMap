// modules/products.js
export default {
  namespaced: true, // Enable namespacing

  state: {
    items: [
      {id: 1, name: 'Geraldo'}
    ],
    senha: '*****'
  },

  mutations: {
    addProduct(state, product) {
      state.items.push(product)
    },
  },

  actions: {
    addProduct({ commit }, product) {
      // Simulate asynchronous operation
      setTimeout(() => {
        commit('addProduct', product)
      }, 1000)
    },
  },

  getters: {
    getProductCount(state) {
      return state.items.length
    },
  },
}
