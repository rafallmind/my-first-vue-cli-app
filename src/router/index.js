import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageCoach from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/PageCoach',
    name: 'AboutView',
    component: PageCoach
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
