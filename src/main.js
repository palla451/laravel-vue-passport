import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
// import "bootstrap/dist/js/bootstrap"
import "@popperjs/core"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {VueAxiosPlugin} from "@/services/axiosInterceptor";
import '@/main.css'

createApp(App).use(VueAxiosPlugin).use(store).use(router).mount('#app')

