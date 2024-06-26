import { createApp } from 'vue'
import './style.css'
import router from './router/index'


import App from './App.vue'
import store from './store'

createApp(App)
.use(store)
.use(router)
.mount('#app')
