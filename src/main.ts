import './assets/main.css'
import './assets/css/nucleo-icons.css'
import './assets/css/nucleo-svg.css'
import './assets/css/soft-ui-dashboard.css'
import 'https://kit.fontawesome.com/42d5adcbca.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
