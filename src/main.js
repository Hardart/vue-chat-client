import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import '@/assets/scss/main.scss'
import router from './router'
import store from './store'
import directives from '@/directives'
import components from '@/components/UI'
import { io } from 'socket.io-client'
import config from './config'
// loads the Icon plugin

const socketIO = io(config.baseURL)

const app = createApp(App)
components.forEach(comp => app.component(comp.name, comp.self))
directives.forEach(directive => app.directive(directive.name, directive))

app.provide('io', socketIO)
app.use(store).use(router).mount('#app')
