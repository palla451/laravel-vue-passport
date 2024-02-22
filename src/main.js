import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap"
import App from './App.vue'
import router from './router'
import store from './store'
import {VueAxiosPlugin} from "@/services/axiosInterceptor";
import '@/main.css'

createApp(App).use(VueAxiosPlugin).use(store).use(router).mount('#app')
