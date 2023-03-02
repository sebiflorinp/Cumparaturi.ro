import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PaginaPrincipala from '../views/PaginaPrincipala.vue'
import Cautare from '../views/Cautare.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Pagina principala',
    component: PaginaPrincipala,
  },
  {
    path: '/cautare/:cautat',
    name: 'Cautare',
    component: Cautare
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
