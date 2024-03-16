import './assets/main.css'
import '@/assets/BaseCard.css'

import { createApp } from 'vue'
import App from './app.vue'
import router from './router'

const app = createApp(App)

//console.log(app.version)

app.use(router)

app.mount('#app')
