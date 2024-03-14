import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView.vue";
import authGuard from "@/guards/authGuard";
import noAuthGuard from "@/guards/noAuthGuard";
import HomepageView from "@/views/menu-page/HomepageView.vue";
import AboutpageView from "@/views/menu-page/AboutpageView.vue";
import ContentPageView from "@/views/ContentPageView.vue";
import UsersPageView from "@/views/menu-page/UsersPageView.vue";

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
            },
            {
                path: 'users',
                name: 'users',
                component: UsersPageView
            }
        ]
    },
    // {
    //     path: '/',
    //     redirect: '/dashboard/home'
    // }
    // {
    //     path: '/:catchAll(.*)', // Questa rotta cattura tutte le rotte non esistenti
    //     redirect: '/dashboard/home' // Reindirizza a '/dashboard/home'
    // }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// Gestisci il reindirizzamento alla posizione corrente
router.beforeEach((to, from, next) => {
    const currentRoute = to.fullPath;
    localStorage.setItem('currentRoute', currentRoute);
    next();
});

export default router
