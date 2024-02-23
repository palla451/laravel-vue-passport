import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView.vue";
import authGuard from "@/guards/authGuard";
import DashboardView from "@/views/DashboardView.vue";
import HomepageView from "@/views/HomepageView.vue";
import noAuthGuard from "@/guards/noAuthGuard";

const routes = [
    {
        path: '/login',
        name: 'login',
        component: LoginView,
        beforeEnter: noAuthGuard
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        beforeEnter: authGuard,
        component: DashboardView,
        children: [
            {
                path: 'home',
                name: 'home',
                component: HomepageView
            }
        ]
    },
    {
        path: '/',
        redirect: '/dashboard/home'
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
