import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue' // Importieren Sie DashboardView

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // Weitere Routen...
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView // Fügen Sie DashboardView als Komponente für die Route hinzu
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
