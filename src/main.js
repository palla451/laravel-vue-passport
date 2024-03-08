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
import VueGoodTablePlugin from 'vue-good-table-next';

// import the styles
import 'vue-good-table-next/dist/vue-good-table-next.css'
import '@/main.css'

createApp(App).use(VueGoodTablePlugin).use(VueAxiosPlugin).use(store).use(router).mount('#app')

