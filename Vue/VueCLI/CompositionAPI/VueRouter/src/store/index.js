import { createStore } from 'vuex'
import productsModule from './module/products'

export default createStore({
  // states..
  state: {
    user: {
      name: 'defaultName',
      city: 'defaultCity',
    },
    products: [
      {
        id: 1,
        name: 'Bola',
        price: 100,
      },
      {
        id: 2,
        name: 'Chuteira',
        price: 200,
      },
      {
        id: 3,
        name: 'Meia',
        price: 50,
      },
    ],
    cart: [],
  },
  // works like a computed
  getters: {
    total(state) {
      // dependencia
      // return a value
      // evita ficar calculando valor total
      //dentro dos components
      // dentro do component basta resgastar esse getter
      return state.cart.reduce((total, item) => (total += item.price), 0)
    },
  },
  // mutações // mudar / atualizar dados // vuex vai atualizar em cascata
  // synchronous functions  that directly mutate the state
  mutations: {
    storeUserFel(state, data) {
      //console.log(data)
      // console.log(`storeUser: someone call me`)

      //👉 individual update
      state.user.name = data.name
      state.user.city = data.city

      // ⚙️ entire update
      //state.user = data
    },
    storeBella(state, data) {
      console.log(data)
      //❌ MIX individual with entire state with object can bug, freezen
      //👉 individual update
      state.user.name = data.name
      state.user.city = data.city

      // ⚙️ entire update
      //state.user = data
    },
    cleanUserData(state) {
      //👉 individual update
      // state.user.name = ''
      // state.user.city = ''

      // ⚙️ entire update
      //⚠️ About Mix it will transform user{obj} in a string
      // when other fn update state.user.name
      // TypeError: Cannot create property 'name' on string ''
      // to fix that clean it individual
      state.user = ''
    },
    addProduct(state, data) {
      state.cart.push(data)
    },
    removeProduct(state, id) {
      const index = state.cart.findIndex((obj) => obj.id == id)
      if (index !== -1) {
        return state.cart.splice(index, 1)
      }
    },
  },
  actions: {
    // 👉 looks like mutations
    // 👉 é assincrono, returna uma promessa != de mutations que é sincrona
    // 👉 context obj do vuex, acesso outras camadas
    // 👉 rootGetters e  rootState e qdo usa o vuex em modules
    storeMyUser(context, data) {
      console.log(`context`, context, 'data', data)
      console.log(context.getters.total)

      // ⚙️ update user direct works but...
      // const {name, city} = data
      // context.state.user.name = name
      // context.state.user.city = city

      //⚙️ mesmo resultado, ... concentrar na mutation
      // only in mutations para nao se perder o controle
      // como se vc estivesse chamando o fn de dentro do component
      context.commit('storeUserFel', data)
    },
    // if you can destrucruting a object, javascript...
    // and pass a new Promise...
    storeMyUserIsa({ commit }, data) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
          commit('storeUserFel', data)
        }, 3000)
      })

      /*   setTimeout(() => {
     console.log(`hello`)
    }, 3000) */
    },
  },
  modules: {
    allproducts: productsModule
  },
})
