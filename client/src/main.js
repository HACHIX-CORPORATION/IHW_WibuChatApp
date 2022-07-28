import { createApp } from 'vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import router from './router'

// import {BootstrapVue, IconsPlugin} from "bootstrap-vue"
// import { fromCodePoint } from 'core-js/core/string'
// Vue.use(router)

const Vue = createApp(App)
Vue.use(router)
Vue.mount('#app')
