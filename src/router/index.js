import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView.vue";
import authGuard from "@/guards/authGuard";
import noAuthGuard from "@/guards/noAuthGuard";
import HomepageView from "@/views/menu-page/HomepageView.vue";
import AboutpageView from "@/views/menu-page/AboutpageView.vue";
import ContentPageView from "@/views/ContentPageView.vue";

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
        component: ContentPageView,
        children: [
            {
                path: 'home',
                name: 'home',
                component: HomepageView
            },
            {
                path: 'about',
                name: 'about',
                component: AboutpageView
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
