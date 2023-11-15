import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeAulas from '../views/HomeAulas.vue'
import Admin from '../views/Admin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/aulas',
      name: 'aulas',
      component: HomeAulas
    },
    {
      path: '/aulas/admin',
      name: 'admin',
      component: Admin,
      meta: {
        auth: true
      }
    }
  ]
})

export default router
