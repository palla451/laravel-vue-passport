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
      path: '/',
      name: 'dashboard',
      beforeEnter: authGuard,
      component: DashboardView,//TO DO
      children: [
          {
              path: '/home',
              name: 'home',
              component: HomepageView
          }
      ]
    },

  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
