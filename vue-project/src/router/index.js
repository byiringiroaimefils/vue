import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamView from '../views/TeamView.vue'
import Convertor from '../views/Convertor.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/TeamView',
      name: 'TeamView',
      component: TeamView
    },
    {
      path: '/Convertor',
      name: 'Convertor',
      component: Convertor
    }
  ]
})

export default router
